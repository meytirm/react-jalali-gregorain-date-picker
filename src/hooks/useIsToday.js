import persianDate from "persian-date";
import toPersianDateFormat from "../utils/toPersianDateFormat.js";

function useIsToday(calendarDate ,isGregorian) {
    const dateToArray = toPersianDateFormat(calendarDate)
    const date = new persianDate(dateToArray)

    let today = new persianDate().toCalendar(isGregorian ? 'gregorian' : 'persian')
    today = new persianDate(toPersianDateFormat(today.format('YYYY-MM-DD')))

    return today.isSameDay(date)
}

export default useIsToday