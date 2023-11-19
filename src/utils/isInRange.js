import toPersianDateFormat from "./toPersianDateFormat.js";
import persianDate from "persian-date";

function isInRange(fromDate, toDate, date) {
    // console.log(date)
    const fromPersianDate = new persianDate(toPersianDateFormat(fromDate))
    const toPersianDate = new persianDate(toPersianDateFormat(toDate))
    const datePersianDate = new persianDate(toPersianDateFormat(date))

    const fromDifference = datePersianDate.diff(fromPersianDate, 'days')
    const toDifference = datePersianDate.diff(toPersianDate, 'days')

    return toDifference < 0 && fromDifference > 0
}

export default isInRange