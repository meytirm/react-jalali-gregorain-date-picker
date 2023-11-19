import useIsPassedDate from "../hooks/useIsPassedDate.js";
import useIsToday from "../hooks/useIsToday.js";
import CalendarCell from "./CalendarCell.jsx";
import PropTypes from "prop-types";
import isInRange from "../utils/isInRange.js";

function CalendarDay({calendarDate, isGregorian, onClick, value, textColor}) {
    const day = calendarDate ? calendarDate.split('-')[2] : ''
    const isPassed = useIsPassedDate(calendarDate, isGregorian)
    const isToday = useIsToday(calendarDate, isGregorian)

    let isSelectedFrom = false
    let isSelectedTo = false
    let isSelected = false
    let inRange = false

    if (Array.isArray(value)) {
        if (value.length === 2) {
            inRange = isInRange(value[0], value[1], calendarDate)
        }
        if (value[0] === calendarDate) {
            isSelectedFrom = true
            isSelected = true
        }
        if (value[1] === calendarDate) {
            isSelectedTo = true
            isSelected = true
        }
    } else if (value) {
        if (value === calendarDate) {
            isSelected = true
        }
    }

    let classNames = [
        {className: 'is-selected-from', isValidate: isSelectedFrom},
        {className: 'is-selected-to', isValidate: isSelectedTo},
        {className: 'is-selected', isValidate: isSelected},
        {className: 'is-disabled', isValidate: isPassed},
        {className: 'calendar-cell', isValidate: true},
        {className: 'is-today', isValidate: isToday},
        {className: 'in-range', isValidate: inRange},
    ]

    classNames = classNames.map(className => className.isValidate ? className.className : '')
    classNames = classNames.join(' ')

    function handleOnClick() {
        if (isPassed) return;
        onClick(calendarDate)
    }

    return <CalendarCell
        onClick={handleOnClick}
        className={classNames}
        textColor={textColor}
    >
        <span style={{color: isPassed ? '' : textColor}}>{day}</span>
    </CalendarCell>
}

export default CalendarDay

CalendarDay.propTypes = {
    calendarDate: PropTypes.string,
    isGregorian: PropTypes.bool,
    textColor: PropTypes.string,
    onClick: PropTypes.func,
    value: PropTypes.any,
}