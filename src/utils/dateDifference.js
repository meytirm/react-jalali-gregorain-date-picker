import toPersianDateFormat from "./toPersianDateFormat.js";
import persianDate from "persian-date";

function dateDifference(firstDate, secondDate) {
    const from = new persianDate(toPersianDateFormat(firstDate))
    const to = new persianDate(toPersianDateFormat(secondDate))

    return to.diff(from, 'days')
}

export default dateDifference