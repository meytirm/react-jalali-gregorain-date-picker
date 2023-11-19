import CalendarContainer from "./CalendarContainer.jsx";
import PropTypes from "prop-types";

function CalendarMain(
    {
        secondDates,
        weekDaysName,
        dates,
        color,
        isGregorian,
        onClick,
        value,
        textColor,
        firstCalendarMonth,
        secondCalendarMonth
    }
) {
    const firstCalendar = <CalendarContainer
        weekDaysName={weekDaysName}
        month={firstCalendarMonth}
        isGregorian={isGregorian}
        textColor={textColor}
        onClick={onClick}
        dates={dates}
        color={color}
        value={value}
    />

    const secondCalendar = secondDates.length > 0 ?
        <CalendarContainer
            month={secondCalendarMonth}
            weekDaysName={weekDaysName}
            isGregorian={isGregorian}
            textColor={textColor}
            dates={secondDates}
            onClick={onClick}
            color={color}
            value={value}
        /> : ''

    return <div className="calendar-container">
        {firstCalendar}
        {secondCalendar}
    </div>
}

export default CalendarMain

CalendarMain.propTypes = {
    firstCalendarMonth: PropTypes.string,
    secondCalendarMonth: PropTypes.string,
    weekDaysName: PropTypes.array,
    secondDates: PropTypes.array,
    textColor: PropTypes.string,
    isGregorian: PropTypes.bool,
    onClick: PropTypes.func,
    color: PropTypes.string,
    dates: PropTypes.array,
    value: PropTypes.any,
}