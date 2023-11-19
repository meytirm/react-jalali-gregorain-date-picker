import CalendarWeekDaysName from "./CalendarWeekDaysName.jsx";
import CalendarDays from "./CalendarDays.jsx";
import PropTypes from "prop-types";

function CalendarContainer({dates, weekDaysName, color, isGregorian, onClick, value, textColor, month}) {
    return (
        <div className={`calendar-grid ${isGregorian ? 'is-gregorian' : 'is-jalali'}`} style={{color: color}}>
            <div className="calendar-month" style={{color: textColor}}>{month}</div>
            <CalendarWeekDaysName
                weekDaysName={weekDaysName}
                textColor={textColor}
            />
            <CalendarDays
                isGregorian={isGregorian}
                textColor={textColor}
                onClick={onClick}
                dates={dates}
                color={color}
                value={value}
            />
        </div>
    )
}

export default CalendarContainer

CalendarContainer.propTypes = {
    weekDaysName: PropTypes.array,
    textColor: PropTypes.string,
    isGregorian: PropTypes.bool,
    onClick: PropTypes.func,
    color: PropTypes.string,
    month: PropTypes.string,
    dates: PropTypes.array,
    value: PropTypes.any,
}