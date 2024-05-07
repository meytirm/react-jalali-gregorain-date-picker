import weekDayNames from "../../../../constants/weekDayNames.ts";
import {useCalendar} from "../../../../contexts/CalendarContext.ts";

function CalendarWeekNames() {
    const calendar = useCalendar()!
    const week = weekDayNames[calendar.isJalali ? 'fa' : 'en']
        .map(weekName => weekName.slice(0, calendar.isJalali ? 1 : 3))
    return (
        <div className="calendar__row">
            {week.map(weekName => <div className="calendar__cell is-week-name" key={weekName}>
                <div className="calendar__week-name">
                    {weekName}
                </div>
            </div>)}
        </div>
    )
}

export default CalendarWeekNames