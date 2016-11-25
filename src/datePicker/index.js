import util from '../util'
import dateFns from 'date-fns'

const dom = Regular.dom
const tpl = require('./index.html')

export default Regular.extend({
  name: 'datePicker',
  template: tpl,
  computed: {
    yearText () {
      return dateFns.format(this.data.yearMonth, 'YYYY')
    },
    monthText () {
      return dateFns.format(this.data.yearMonth, 'MM')
    },
    dateText () {
      return dateFns.format(this.data.selected, 'YYYY-MM-DD')
    }
  },
  getDayInList (i, j) {
    return this.data.dayList[(i - 1) * 7 + (j - 1)]
  },
  calcDayList () {
    let i
    const dayInMonth = this.data.yearMonth.getDate()
    this.data.dayList = new Array(dateFns.getDaysInMonth(this.data.yearMonth))
    for (i = 0; i < this.data.dayList.length; i++) {
      this.data.dayList[i] = {
        clazz: 'curr-month' + ((dayInMonth - 1) === i ? ' active' : ''),
        text: i + 1
      }
    }
    const dayInWeek = dateFns.startOfMonth(this.data.yearMonth).getDay()
    const prevMonth = new Date(this.data.yearMonth).setMonth(this.data.yearMonth.getMonth() - 1)
    const daysInPrevMonth = dateFns.getDaysInMonth(prevMonth)
    const prevDayList = new Array(dayInWeek)
    for (i = 0; i < prevDayList.length; i++) {
      prevDayList[i] = {
        clazz: 'prev-month',
        text: daysInPrevMonth - (dayInWeek - 1 - i)
      }
    }
    const nextDayList = new Array(42 - this.data.dayList.length - prevDayList.length)
    for (i = 0; i < nextDayList.length; i++) {
      nextDayList[i] = {
        clazz: 'next-month',
        text: i + 1
      }
    }
    this.data.dayList = [...prevDayList, ...this.data.dayList, ...nextDayList]
  },
  prevYear (event) {
    event.stopPropagation()
    this.data.yearMonth = dateFns.addYears(this.data.yearMonth, -1)
    this.calcDayList()
  },
  nextYear (event) {
    event.stopPropagation()
    this.data.yearMonth = dateFns.addYears(this.data.yearMonth, 1)
    this.calcDayList()
  },
  prevMonth (event) {
    event.stopPropagation()
    this.data.yearMonth = dateFns.addMonths(this.data.yearMonth, -1)
    this.calcDayList()
  },
  nextMonth (event) {
    event.stopPropagation()
    this.data.yearMonth = dateFns.addMonths(this.data.yearMonth, 1)
    this.calcDayList()
  },
  pick ({clazz, text: day}) {
    let monthDelta = 0
    if (clazz === 'prev-month') {
      monthDelta = -1
    } else if (clazz === 'next-month') {
      monthDelta = 1
    }
    let date = dateFns.addMonths(this.data.yearMonth, monthDelta)
    date = dateFns.setDate(date, day)
    this.data.selected = new Date(date)
    this.hide()
    this.$emit('input', date)
  },
  toggle (event) {
    event.stopPropagation()
    if (!this.data.open) {
      this.show()
    } else {
      this.hide()
    }
  },
  show () {
    this.data.yearMonth = this.data.selected
    this.calcDayList()
    this.data.open = true
  },
  hide () {
    this.data.open = false
  },
  handleBodyClick () {
    if (!util.containsNode(this.$el, event.target)) {
      this.hide()
    }
  },
  addEvent () {
    dom.on(document.body, 'click', this.bodyClickHandler)
  },
  removeEvent () {
    dom.off(document.body, 'click', this.bodyClickHandler)
  },
  config () {
    util.merge(this.data, {
      open: false,
      yearMonth: new Date(),
      dayList: [],
      selected: new Date(),
      prevYearText: '<<',
      nextYearText: '>>',
      prevMonthText: '<',
      nextMonthText: '>'
    }, _.pick(this.data, [
      'prevYearText',
      'nextYearText',
      'prevMonthText',
      'nextMonthText'
    ]))
    if (this.data.initDate) {
      this.data.yearMonth = this.data.selected = new Date(this.data.initDate)
    }
    this.calcDayList()
    this.bodyClickHandler = this.handleBodyClick.bind(this)
    this.addEvent()
  },
  destroy () {
    this.supr()
    this.removeEvent()
  }
})
