import CalendarDate from "./CalendarDate";
import {useCalendar} from "../../../../contexts/CalendarContext.ts";

function CalendarDates() {
    const calendar = useCalendar()!

    const chunkArray = (array: string[], size: number) => {

        const chunkedArray = [];
        for (let i = 0; i < array.length; i += size) {
            chunkedArray.push(array.slice(i, i + size));
        }
        return chunkedArray;
    };

    const weeks = chunkArray(calendar.dates, 7)

    return (
        <div>
            {weeks.map((week, index) => (
                <div className="calendar__row" key={index}>
                    {week.map(date => <CalendarDate date={date} key={date} />)}
                </div>
            ))}
        </div>
    )
}

export default CalendarDates