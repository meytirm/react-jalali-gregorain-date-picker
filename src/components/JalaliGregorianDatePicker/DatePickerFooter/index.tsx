import {useCalendar, useCalendarDispatch} from "../../../contexts/CalendarContext.ts";
import moment from "jalali-moment";

function DatePickerFooter() {
    const calendar = useCalendar()!
    const dispatch = useCalendarDispatch()!
    let fromDate
    let toDate
    if (calendar.dateRange[0]) {
        fromDate = formatDate(calendar.dateRange[0])
    }
    if (calendar.dateRange[1]) {
        toDate = formatDate(calendar.dateRange[1])
    }

    fromDate = fromDate ? <div>
        <span>از </span>
        <span>{fromDate}</span>
    </div> : ''

    toDate = toDate ? <div>
        <span>تا </span>
        <span>{toDate}</span>
    </div> : ''

    function formatDate(date: string) {
        return moment(date).clone().locale(calendar.isJalali ? 'fa' : 'en').format('DD MMMM')
    }

    function clearDateRange() {
        dispatch.setDateRange([])
    }

    return (
        <div className="date-picker__footer">
            <div className="d-button" onClick={clearDateRange}>
                پاک کردن
            </div>
            <div className="date-picker__selected-dates">
                {fromDate}
                {toDate}
            </div>
        </div>
    )
}

export default DatePickerFooter