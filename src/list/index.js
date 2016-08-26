/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-04-23 19:01:33
* @Last modified by:   zyy
* @Last modified time: 2016-07-08 18:33:67
*/

define([
  '../loading/index',
  '../pager/index',
  'pro/base/util'
], function (Loading, Pager, u) {
  /**
   * 列表
   *
   * @constructor
   *
   * @property {Boolean} [static=false] 是否是静态列表
   * - 静态列表的话, 点击 pager 不会重新加载列表
   * - 动态列表的话, 点击 pager 会重新加载列表
   * @property {Object} data 数据
   * @property {String} url 服务器接口地址
   * @property {Number} [query.offset=0] offset
   * @property {Number} [query.limit=10] limit
   * @property {Object} [extraData] 提交请求时的额外参数
   * @property {Boolean} [needPager=true] 是否需要设置分页参数
   * @property {Boolean} [autoLoad=true] 是否要自动加载
   * @property {Function} [formatList] 如果需要格式化列表, 那么传入此函数
   * @property {Function} [sortList] 如果需要排序, 那么传入此函数
   * @property {Boolean} [sync] 是否同步
   * - 如果是, 那么点击的时候会自动跳转, URL 上会带上 offset limit 以及 extraData, 此时请手动设置 current
   */
  return Regular.extend({

    errorCardTpl: '<div class="card card-block text-danger text-xs-center">{errmsg}</div>',
    errTrTpl: '<tr><td colspan="{errColSpan}" class="text-danger text-xs-center">{errmsg}</td></tr>',
    errListItemTpl: '<li class="list-group-item text-danger text-xs-center">{errmsg}</li>',

    emptyCardTpl: '<div class="card card-block text-muted text-xs-center">{emptymsg}</div>',
    emptyTrTpl: '<tr><td colspan="{errColSpan}" class="text-muted text-xs-center">{emptymsg}</td></tr>',
    emptyListItemTpl: '<li class="list-group-item text-muted text-xs-center">{emptymsg}</li>',

    pagerTpl: '<pager total={total} limit={limit} current={current} extraData={extraData} showJump={showJump} on-nav={this.load($event)} clazz={pagerClazz}></pager>',

    data: {
      url: '',
      total: 0,
      current: 1,
      queryBase: {
        offset: 0,
        limit: 5
      },
      query: {},
      needPager: true,
      pagerClazz: 'right',
      autoLoad: true,
      globalLoading: false,
      errmsg: '获取列表失败',
      errColSpan: 3,
      emptymsg: '暂无记录'
    },

    computed: {
      // 静态列表当前展示的部分
      listShown: 'list.slice((current-1)*limit, (current-1)*limit + limit)'
    },

    init () {
      var self = this
      if (self.data.globalLoading) {
        self.$watch('loading', function () {
          if (self.data.loading) {
            u.showPageLoading()
          } else {
            u.hidePageLoading()
          }
        })
      }
    },

    load (page) {
      // debugger
      var self = this
      // beforeload callback
      if (u._$isFunction(self.beforeload)) {
        self.beforeload()
      }

      var data = self.data
      // 重置状态
      data.unloaded = false

      // 设置页码
      if (!page) {
        // 如果没有提供 page
        // - 如果不是同步列表, 说明是第一次进来, 默认加载第一页
        // - 如果是同步列表, 那么请直接设置 data.current
        if (!data.sync) {
          data.current = 1
        }
      } else {
        // 如果提供了 page, 那么加载对应的页面
        data.current = parseInt(page.current || page) || 1
        // 如果是同步列表, 那么直接跳转后返回
        if (data.sync) {
          return self.jump()
        }
      }

      // 如果是静态列表, 并且已经加载过了, 那么直接返回; 否则删掉 list 来重新加载
      if (data.static && data.list) {
        data.total = data.list.length
        data.limit = data.query.limit || data.queryBase.limit
        return self.$update()
      } else {
        delete data.list
      }

      if (!data.list && !data.loading) {
        // 设置状态
        data.loading = true
        self.query()
      }

      self.$update()
    },

    packQuery () {
      var self = this
      var data = self.data
      var query = data.query || {}

      // 设置分页参数
      if (data.needPager) {
        // 先计算 limit, 然后根据 current 和 limit 计算 offset
        query.limit = parseInt(query.limit) || data.queryBase.limit
        query.offset = (data.current - 1) * query.limit
      } else {
        delete query.offset
        delete query.limit
      }

      return Object.assign({}, query, data.extraData)
    },

    jump () {
      location.search = '?' + u._$object2query(this.packQuery())
    },

    query () {
      var self = this
      var data = self.data
      var query = self.packQuery()
      u.post(data.url, {
        data: query,
        onload (obj) {
          // 如果已经销毁了, 那么不再处理
          if (data.unloaded) {
            return
          }
          data.loading = false

          if (!obj.res) {
            u.showError(obj.errmsg)
            return
          }

          // 修正数据
          if (!obj.msg) {
            obj.msg = {}
          }
          if (!obj.msg.list) {
            obj.msg.list = []
          }

          // debugger
          var list = obj.msg.list || []
          // offset & limit
          var offset = data.offset = query.offset || data.queryBase.offset
          var limit = data.limit = query.limit || data.queryBase.limit
          // total
          if (data.static) {
            data.total = Math.ceil(list.length)
          } else {
            data.total = Math.ceil(obj.msg.total)
          }
          // current
          data.current = Math.floor(offset / limit) + 1
          // format
          if (u._$isFunction(self.formatList)) {
            u._$forEach(list, self.formatList, self)
          }
          // sort
          if (u._$isFunction(self.sortList)) {
            list.sort(self.sortList._$bind(self))
          }
          // merge
          delete obj.msg.total
          u._$merge(data, obj.msg)
          delete data.error
          // success callback
          if (u._$isFunction(self.success)) {
            self.success()
          }
          self.$update()
        },
        onerror (obj) {
          data.loading = false
          data.limit = data.query.limit || data.queryBase.limit

          if (obj) {
            // 默认显示错误提示, 如果有处理函数并返回 true 的话显示错误提示
            var shouldShowError = true
            if (self.response) {
              var cb = self.response[obj.res]
              if (u._$isBoolean(cb)) {
                shouldShowError = cb
              }
              if (u._$isFunction(cb)) {
                shouldShowError = cb.call(self, obj.msg)
              }
            }
            if (shouldShowError) {
              // 统一在 u.request 里面提示错误
              // u.showError(obj.errmsg)
              data.error = true
              data.errmsg = obj.errmsg
            }
          }

          // error callback
          if (u._$isFunction(self.error)) {
            self.error()
          }
          self.$update()
        }
      })
    },

    unload () {
      var self = this
      var data = self.data
      data.current = 1
      delete data.offset
      delete data.limit
      delete data.list
      delete data.query
      data.loading = false
      data.unloaded = true
    }

  })
})
