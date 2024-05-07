import moment from "jalali-moment";
import {useCalendar, useCalendarDispatch} from "../../../../../contexts/CalendarContext.ts";
import calendarDateClassNames from "./calendarDateClassNames.ts";

function CalendarDate({date}: { date: string }) {
    const dispatch = useCalendarDispatch()!
    const calendar = useCalendar()!

    const momentDate = calendar.isJalali ? moment(date, 'jYYYY/jM/jD') : moment(date)
    const gregorianFormattedDate = momentDate.format('YYYY-MM-DD')
    const currentDate = moment().format('YYYY-MM-DD')
    const inputDate = moment(calendar.inputDate)
    const day = calendar.isJalali ? momentDate.jDate() : momentDate.date()

    const format = calendar.isJalali ? 'jYYYY-jMM' : 'YYYY-MM'
    const isAfterCurrentDate = moment(currentDate).isAfter(gregorianFormattedDate, 'date')
    const isNotSameWithCurrentMonth = inputDate.format(format) !== momentDate.format(format)


    const isDisabled = isAfterCurrentDate || isNotSameWithCurrentMonth

    const calendarDateClass = calendarDateClassNames(gregorianFormattedDate, isDisabled, calendar.dateRange)
    function setDateRange() {
        if (!isDisabled) {
            let dateRange: string[] = calendar.dateRange
            if (calendar.dateRange.length === 0) {
                dateRange = [gregorianFormattedDate]
            } else if (calendar.dateRange.length === 1) {
                if (moment(calendar.dateRange[0]).isAfter(gregorianFormattedDate)) {
                    dateRange = [gregorianFormattedDate]
                } else {
                    dateRange.push(gregorianFormattedDate)
                }
            } else if (calendar.dateRange.length === 2) {
                dateRange = [gregorianFormattedDate]
            }
            dispatch.setDateRange(dateRange)
        }
    }

    return (
        <div className={calendarDateClass} onClick={setDateRange} style={{color: calendar.color}}>
            {isAfterCurrentDate ? <div className="is-passed"></div> : ''}
            <div className="calendar__date">
                {day}
            </div>
        </div>
    )
}

export default CalendarDate
