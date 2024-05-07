import CalendarDates from "./CalendarDates";
import CalendarWeekNames from "./CalendarWeekNames";

function DatePickerCalendar() {
    return (
        <div className="calendar">
            <CalendarWeekNames />
            <CalendarDates />
        </div>
    )
}

export default DatePickerCalendar