import DatePickerArrows from "./DatePickerArrows.jsx";
import CalendarMain from "./CalendarMain.jsx";
import {useEffect, useRef} from "react";
import PropTypes from "prop-types";

function DatePickerContainer(
    {
        firstCalendarMonth,
        secondCalendarMonth,
        weekDaysName,
        secondDates,
        isGregorian,
        textColor,
        onClick,
        onPrev,
        onNext,
        dates,
        color,
        value,
    }
) {
    const datePickerRef = useRef(null)

    useEffect(() => {
        datePickerRef.current.style.direction = isGregorian ? 'ltr' : 'rtl'
    }, [isGregorian])

    return (
        <div ref={datePickerRef}>
            <DatePickerArrows
                isGregorian={isGregorian}
                onPrev={onPrev}
                onNext={onNext}
            />

            <CalendarMain
                firstCalendarMonth={firstCalendarMonth}
                secondCalendarMonth={secondCalendarMonth}
                weekDaysName={weekDaysName}
                secondDates={secondDates}
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

export default DatePickerContainer

DatePickerContainer.propTypes = {
    firstCalendarMonth: PropTypes.string,
    secondCalendarMonth: PropTypes.string,
    weekDaysName: PropTypes.array,
    secondDates: PropTypes.array,
    textColor: PropTypes.string,
    isGregorian: PropTypes.bool,
    color: PropTypes.string,
    onClick: PropTypes.func,
    dates: PropTypes.array,
    onPrev: PropTypes.func,
    onNext: PropTypes.func,
    value: PropTypes.any,
}