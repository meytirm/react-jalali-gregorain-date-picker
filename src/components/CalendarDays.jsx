import CalendarCell from "./CalendarCell.jsx";
import CalendarDay from "./CalendarDay.jsx";
import PropTypes from "prop-types";

function CalendarDays({dates, color, isGregorian, onClick, value, textColor}) {
    const calendarDays = dates
        .map((calendarDate, index) => {
            if (calendarDate) {
                return <CalendarDay
                    calendarDate={calendarDate}
                    isGregorian={isGregorian}
                    textColor={textColor}
                    onClick={onClick}
                    color={color}
                    value={value}
                    key={index}
                />
            } else {
                return <CalendarCell
                    className="calendar-cell is-disabled"
                    key={index}
                ></CalendarCell>
            }
        })

    return calendarDays
}

export default CalendarDays

CalendarDays.propTypes = {
    isGregorian: PropTypes.bool,
    textColor: PropTypes.string,
    onClick: PropTypes.func,
    color: PropTypes.string,
    dates: PropTypes.array,
    value: PropTypes.any,
}