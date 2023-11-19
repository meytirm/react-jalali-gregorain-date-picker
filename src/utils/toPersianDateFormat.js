function toPersianDateFormat(calendarDate) {
    return calendarDate.split('-').map(num => Number(num))
}

export default toPersianDateFormat