import moment from 'jalali-moment';
import weekDayNames from "../constants/weekDayNames.ts";

export class CalendarManager {
    private readonly calendar: string;

    constructor(calendar: string) {
        this.calendar = calendar;
    }

    private getIndexOfWeekDay(date: moment.Moment) {
        const weekDayNamesType = this.calendar === 'jalali' ? 'fa' : 'en'
        return weekDayNames[weekDayNamesType].findIndex(nameOfWeek => nameOfWeek === date.format('dddd'))
    }

    private getStartEndOfMonthOnWeek(startDate: moment.Moment, endDate: moment.Moment) {
        const startDayOfMonthOnWeek = this.getIndexOfWeekDay(startDate)
        const endDayOfMonthOnWeek = this.getIndexOfWeekDay(endDate)

        return {startDayOfMonthOnWeek, endDayOfMonthOnWeek}
    }

    private getMonthDates(inputDate: Date, offset: number): string[] {
        const currentDate = moment(inputDate).locale(this.calendar === 'jalali' ? 'fa' : 'en').add(offset, 'month').startOf('month');
        const monthDates: string[] = [];
        const daysInMonth = currentDate.daysInMonth();

        const startDate = currentDate.clone().startOf('month');
        const endDate = currentDate.clone().endOf('month');
        const {startDayOfMonthOnWeek, endDayOfMonthOnWeek} =
            this.getStartEndOfMonthOnWeek(startDate, endDate)

        for (let i = 0; i < startDayOfMonthOnWeek; i++) {
            monthDates.unshift(startDate.clone().subtract(i + 1, 'day').format('YYYY-MM-DD'));
        }

        for (let i = 0; i < daysInMonth; i++) {
            monthDates.push(currentDate.format('YYYY-MM-DD'));
            currentDate.add(1, 'day');
        }

        for (let i = endDayOfMonthOnWeek; i < 6; i++) {
            monthDates.push(endDate.clone().add(i - endDayOfMonthOnWeek + 1, 'day').format('YYYY-MM-DD'));
        }

        return monthDates;
    }

    public getCurrentMonthDates(inputDate: Date = new Date()): string[] {
        return this.getMonthDates(inputDate, 0);
    }

    public getNextMonthDates(inputDate: Date = new Date(), numMonths: number = 1): string[] {
        return this.getMonthDates(inputDate, numMonths);
    }

    public getPreviousMonthDates(inputDate: Date = new Date()): string[] {
        return this.getMonthDates(inputDate, -1);
    }
}
