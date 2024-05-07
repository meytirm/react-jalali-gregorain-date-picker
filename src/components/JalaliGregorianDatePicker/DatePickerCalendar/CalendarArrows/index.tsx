import {useCalendar, useCalendarDispatch} from "../../../../contexts/CalendarContext.ts";
import moment from "jalali-moment";
import arrowLeft from '../../../../assets/arrow-left.svg'
import arrowRight from '../../../../assets/arrow-right.svg'

function CalendarArrows() {
    const calendar = useCalendar()!
    const dispatch = useCalendarDispatch()!

    const date = moment(calendar.inputDate).format('YYYY-MM-DD')
    const momentDate = moment(date)
    const currentMonthName = momentDate.clone().locale(calendar.isJalali ? 'fa' : 'en')
        .format(calendar.isJalali ? 'jMMMM' : 'MMMM')

    function handleMonth(action: 'next' | 'prev') {
        let handledMonth
        if (action === 'next') {
            handledMonth = momentDate.clone().add(1, 'month').format('YYYY-MM-DD')
        } else {
            handledMonth = momentDate.clone().subtract(1, 'month').format('YYYY-MM-DD')
        }
        dispatch.dispatch({
            type: 'update-input-month',
            data: {inputDate: new Date(handledMonth)}
        })
    }
    return (
        <div className="date-picker__arrows">
            <img alt={calendar.isJalali ? 'next' : 'prev'} src={arrowLeft} width="20px" onClick={() => handleMonth(calendar.isJalali ? 'next' : 'prev')}/>
            <div>{currentMonthName}</div>
            <img alt={calendar.isJalali ? 'prev' : 'next'} src={arrowRight} width="20px" onClick={() => handleMonth(calendar.isJalali ? 'prev' : 'next')}/>
        </div>
    )
}

export default CalendarArrows