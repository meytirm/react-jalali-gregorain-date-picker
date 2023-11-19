import CalendarCell from "./CalendarCell.jsx";
import PropTypes from "prop-types";

function CalendarWeekDaysName({weekDaysName, textColor}) {
    const calendarWeekDaysNameCells = weekDaysName
        .map(dayName => <CalendarCell key={dayName}>
            <div style={{color: textColor}}>{dayName}</div>
        </CalendarCell>)

    return calendarWeekDaysNameCells
}

export default CalendarWeekDaysName

CalendarWeekDaysName.propTypes = {
    weekDayNames: PropTypes.array,
    textColor: PropTypes.string,
    dates: PropTypes.array,
}