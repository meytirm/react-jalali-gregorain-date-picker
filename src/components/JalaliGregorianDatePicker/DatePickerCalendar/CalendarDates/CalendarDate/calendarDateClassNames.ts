import moment from "jalali-moment";

export default function (date: string, isDisabled: boolean, dateRange: string[]) {
    let calendarDateClass = 'calendar__cell'

    if (isDisabled) {
        calendarDateClass += ' is-disabled'
    }


    if (dateRange.length > 0) {
        if (dateRange[0] === date) {
            calendarDateClass += ` is-selected is-selected-start`
        }
        if (dateRange[1] === date) {
            calendarDateClass += ` is-selected is-selected-end`
        }
    }

    if (dateRange.length === 2 && moment(date).isBetween(dateRange[0], dateRange[1])) {
        calendarDateClass += ` is-between`
    }

    if (moment().format('YYYY-MM-DD') === date) {
        calendarDateClass+= ' is-today'
    }

    return calendarDateClass
}