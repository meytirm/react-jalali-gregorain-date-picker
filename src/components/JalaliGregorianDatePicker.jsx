import useCalendarDates from "../hooks/useCalendarDates.js";
import DatePickerContainer from "./DatePickerContainer.jsx";
import persianDate from "persian-date";
import PropTypes from "prop-types";
import {useEffect, useRef, useState} from "react";
import dateDifference from "../utils/dateDifference.js";
import AppTransition from "./AppTransition.jsx";

function JalaliGregorianDatePicker(
    {
        secondCalendar = false,
        textColor = '#485259',
        color = '#fdb713',
        isRange = false,
        isGregorian,
        onInput,
        value,
        width = '600',
        CustomInput
    }
) {
    persianDate.toLocale('en');

    const [calendarDate, setCalendarDate] = useState(new persianDate())
    const [showCalendar, setShowCalendar] = useState(false)
    const weekDaysName = new persianDate().toLocale(isGregorian ? 'en' : 'fa').rangeName().weekdaysMin
    const firstCalendarDate = calendarDate.toCalendar(isGregorian ? 'gregorian' : 'persian')
    const secondCalendarDate = calendarDate.clone().toCalendar(isGregorian ? 'gregorian' : 'persian').add('month', 1)
    const secondDates = useCalendarDates(secondCalendarDate)
    const dates = useCalendarDates(firstCalendarDate)
    const inputRef = useRef(null)
    const datePickerRef = useRef(null)
    const firstCalendarMonth = firstCalendarDate.clone().toLocale(isGregorian ? 'en' : 'fa').format('MMMM')
    const secondCalendarMonth = secondCalendarDate.toLocale(isGregorian ? 'en' : 'fa').format('MMMM')
    const firstInput = <CustomInput ref={inputRef} onFocus={() => setShowCalendar(true)}/>
    function handleOnClick(date) {
        if (isRange) {
            if (value) {
                if (value.length > 1) {
                    onInput([date])
                    return;
                }
                if (dateDifference(value[0], date) < 0) {
                    onInput([date])
                    return;
                }
                onInput([...value, date])
            } else {
                onInput([date])
            }
        } else {
            onInput(date)
        }
    }

    function handleOnPrev() {
        setCalendarDate(calendarDate.subtract('month', 1))
    }

    function handleOnNext() {
        setCalendarDate(calendarDate.add('month', 1))
    }

    function hideDatePicker(event) {
        if (firstInput.ref.current.contains(event.target) || (datePickerRef.current && datePickerRef.current.contains(event.target))) return
        setShowCalendar(false)
    }

    useEffect(() => {
        if (showCalendar) {
            console.log(inputRef.current.getBoundingClientRect())
            const { left, bottom } = inputRef.current.getBoundingClientRect()
            console.log(datePickerRef.current)
            datePickerRef.current.style.width = `${width}px`
            datePickerRef.current.style.position = 'absolute'
            datePickerRef.current.style.left = `${left}px`
            datePickerRef.current.style.top = `${bottom}px`
        }
        document.addEventListener('click', hideDatePicker)

        return () => document.removeEventListener('click', hideDatePicker)
    }, [showCalendar])

    return (
        <>
            {firstInput}
            <AppTransition value={showCalendar} ref={datePickerRef}>
                <div>
                    <DatePickerContainer
                        secondDates={secondCalendar ? secondDates : []}
                        firstCalendarMonth={firstCalendarMonth}
                        secondCalendarMonth={secondCalendarMonth}
                        weekDaysName={weekDaysName}
                        isGregorian={isGregorian}
                        onClick={handleOnClick}
                        onPrev={handleOnPrev}
                        onNext={handleOnNext}
                        textColor={textColor}
                        value={value}
                        dates={dates}
                        color={color}
                    />
                </div>
            </AppTransition>
        </>
    )
}

export default JalaliGregorianDatePicker

JalaliGregorianDatePicker.propTypes = {
    CustomInput: PropTypes.elementType || PropTypes.element,
    secondCalendar: PropTypes.bool,
    textColor: PropTypes.string,
    isGregorian: PropTypes.bool,
    isRange: PropTypes.bool,
    color: PropTypes.string,
    width: PropTypes.string,
    onInput: PropTypes.func,
    value: PropTypes.any,
}