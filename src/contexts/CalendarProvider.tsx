import { useReducer, Reducer, Dispatch } from "react";
import moment from "jalali-moment";
import { CalendarManager } from "../app/CalendarManager.ts";
import { CalendarContext, CalendarDispatchContext } from "./CalendarContext.ts";
import {CalendarActionType, CalendarContextType, CalendarProviderPropType} from "./CalendarContextType.ts";

export function CalendarProvider({ children, color, isDark, setDateRange, dateRange }: CalendarProviderPropType) {
    const [calendar, dispatch]: [CalendarContextType, Dispatch<CalendarActionType>] =
        useReducer<Reducer<CalendarContextType, CalendarActionType>>(
            calendarReducer,
            { ...initialCalendar, color, isDark, dateRange }
        );
    const datePickerClassNames = getDatePickerClassNames(calendar.isJalali, isDark);

    return (
        <CalendarContext.Provider value={{ ...calendar, dateRange }}>
            <CalendarDispatchContext.Provider value={{ dispatch, setDateRange }}>
                <div className={`date-picker ${datePickerClassNames}`}>
                    {children}
                </div>
            </CalendarDispatchContext.Provider>
        </CalendarContext.Provider>
    );
}

function getDatePickerClassNames(isJalali: boolean, isDark: boolean) {
    let classNames = '';
    if (isJalali) {
        classNames += 'rtl ';
    }
    if (isDark) {
        classNames += ' dark';
    }
    return classNames;
}

function calendarReducer(calendar: CalendarContextType, action: CalendarActionType): CalendarContextType {
    const { type, data } = action;
    switch (type) {
        case 'update-input-month': {
            return {
                ...calendar,
                inputDate: data.inputDate,
                get dates() {
                    return generateDates(this.isJalali, this.inputDate);
                }
            };
        }
        case 'set-calendar-type': {
            return {
                ...calendar,
                isJalali: data.isJalali,
                get dates() {
                    return generateDates(this.isJalali, this.inputDate);
                }
            };
        }
        default:
            return calendar;
    }
}

const inputDateFormat = 'YYYY-MM-DD';
const inputDate = new Date(moment().format(inputDateFormat));
const isJalali = false;

const initialCalendar: Omit<CalendarContextType, 'isDark' | 'color' | 'dateRange'> = {
    get dates() {
        return generateDates(this.isJalali, this.inputDate);
    },
    inputDate,
    isJalali,
};

function generateDates(isJalali: boolean, inputDate: Date) {
    const calendarManager = new CalendarManager(isJalali ? 'jalali' : 'gregorian');
    return calendarManager.getCurrentMonthDates(inputDate);
}
