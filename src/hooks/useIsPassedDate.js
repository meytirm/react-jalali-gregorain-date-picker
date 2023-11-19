import toPersianDateFormat from "../utils/toPersianDateFormat.js";
import persianDate from "persian-date";

function useIsPassedDate(calendarDate, isGregorian) {
    const dateToArray = toPersianDateFormat(calendarDate)
    const date = new persianDate(dateToArray)

    let today = new persianDate().toCalendar(isGregorian ? 'gregorian' : 'persian')
    today = new persianDate(toPersianDateFormat(today.format('YYYY-MM-DD')))

    return date.diff(today) < 0
}

export default useIsPassedDate