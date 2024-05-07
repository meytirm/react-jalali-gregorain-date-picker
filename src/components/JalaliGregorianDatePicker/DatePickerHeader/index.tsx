import {useCalendar, useCalendarDispatch} from "../../../contexts/CalendarContext.ts";
import moment from "jalali-moment";

function DatePickerHeader() {
    const calendar = useCalendar()!
    const dispatch = useCalendarDispatch()!

    function setCalendarType() {
        dispatch.dispatch({
            type: 'set-calendar-type',
            data: {
                isJalali: !calendar.isJalali
            }
        })
    }

    function goToToday() {
        dispatch.dispatch({
            type: 'update-input-month',
            data: {
                inputDate: new Date(moment().format('YYYY-MM-DD'))
            }
        })
    }

    return (
        <div className="date-picker__header">
            <div className="date-picker__toggle d-button" onClick={setCalendarType}>
                {
                    calendar.isJalali ? 'تقویم میلادی' : 'تقویم شمسی'
                }
            </div>
            <div className="d-button" onClick={goToToday}>برو به امروز</div>
        </div>
    )
}

export default DatePickerHeader