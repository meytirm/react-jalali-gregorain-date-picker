import DatePickerCalendar from "./DatePickerCalendar";
import {CalendarProvider} from "../../contexts/CalendarProvider.tsx";
import DatePickerHeader from "./DatePickerHeader";
import CalendarArrows from "./DatePickerCalendar/CalendarArrows";
import DatePickerFooter from "./DatePickerFooter";
import {useEffect, useRef} from "react";
import {ReactTransition} from "react-element-transition";
import '../../index.scss'

export const JalaliGregorianDatePicker = function JalaliGregorianDatePicker (props: JalaliGregorianDatePickerType) {
    const {
        color = 'blue',
        isDark = false,
        setDateRange,
        dateRange,
        elementId = '',
        isVisible = true,
        setIsVisible
    } = props
    const datePickerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const input = document.getElementById(elementId)
        const datePickerElement = datePickerRef.current

        function setPositionOfDatePicker (datePickerElement: HTMLDivElement, input: HTMLElement) {
            const documentWidth = document.documentElement.clientWidth
            const datePickerElementWidth = datePickerElement.clientWidth
            const datePickerElementStyle = datePickerElement.style
            const datePickerOffsetTop = input.offsetTop + input.offsetHeight + 'px';
            let datePickerOffsetLeft;

            if (input.offsetLeft + datePickerElementWidth > documentWidth) {
                datePickerOffsetLeft =
                    input.offsetLeft - (datePickerElementWidth - input.offsetWidth) + 'px'
            } else {
                datePickerOffsetLeft = input.offsetLeft + 'px'
            }

            datePickerElementStyle.top = datePickerOffsetTop
            datePickerElementStyle.left = datePickerOffsetLeft
        }

        if (input) {
            if (datePickerElement) {
                setPositionOfDatePicker(datePickerElement, input)
                window.addEventListener(
                    "resize",
                    () => setPositionOfDatePicker(datePickerElement, input),
                    false
                );
            }
        }

        function handleDocumentClick(e: MouseEvent) {
            if (datePickerElement && input && setIsVisible && e.target) {
                if (!datePickerElement.contains(e.target as Node) && !input.contains(e.target as Node)) {
                    setIsVisible(false)
                }
            }
        }

        if (setIsVisible) {
            document.addEventListener('click', handleDocumentClick)
        }
        return () => document.removeEventListener("click", handleDocumentClick);
    }, [isVisible])
    return (
        <ReactTransition value={isVisible} ref={datePickerRef}>
            <div className="date-picker-wrapper">
                <CalendarProvider
                    color={color}
                    isDark={isDark}
                    setDateRange={setDateRange}
                    dateRange={dateRange}
                >
                    <>
                        <DatePickerHeader/>
                        <CalendarArrows/>
                        <DatePickerCalendar/>
                        <DatePickerFooter/>
                    </>
                </CalendarProvider>
            </div>
        </ReactTransition>
    )
}

interface JalaliGregorianDatePickerType {
    color?: string
    isDark?: boolean
    setDateRange: (dateRange: [] | string[]) => void
    dateRange: [] | string[]
    elementId?: string
    isVisible?: boolean
    setIsVisible?: (isVisible: boolean) => void
}