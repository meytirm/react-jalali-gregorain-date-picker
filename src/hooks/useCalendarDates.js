function useCalendarDates(calendarDate) {
    // const prevMonth = calendarDate.clone().subtract('month', 1)
    // const nextMonth = calendarDate.clone().add('month', 1)
    const currentMonth = calendarDate.clone()

    const daysInCurrentMonth = currentMonth.daysInMonth()
    // const daysInPrevMonth = prevMonth.daysInMonth()

    const endDayOfMonth = calendarDate.clone().date(daysInCurrentMonth).day()
    const startDayOfMonth = calendarDate.clone().date(1).day()

    const daysFromPrevMonth = []
    const daysFromCurrentMonth = []
    const daysFromNextMonth = []

    for (let day = 1; day < startDayOfMonth; day++) {
        // const date = `${prevMonth.format('YYYY-MM')}-${daysInPrevMonth - (startDayOfMonth - 1) + day}`
        daysFromPrevMonth.push('')
    }

    for (let day = 1; day <= daysInCurrentMonth; day++) {
        const date = `${currentMonth.format('YYYY-MM')}-${day}`
        daysFromCurrentMonth.push(date)
    }

    for (let day = 1; day <= (7 - endDayOfMonth); day++) {
        // const date = `${nextMonth.format('YYYY-MM')}-${day}`
        daysFromNextMonth.push('')
    }

    return [...daysFromPrevMonth, ...daysFromCurrentMonth, ...daysFromNextMonth]
}

export default useCalendarDates