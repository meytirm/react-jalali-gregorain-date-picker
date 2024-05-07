import {Dispatch, ReactElement} from "react";

export type CalendarActionType =
    | { type: 'update-input-month', data: { inputDate: Date } }
    | { type: 'set-calendar-type', data: { isJalali: boolean } };

export interface CalendarContextType {
    dates: string[] | [];
    inputDate: Date;
    isJalali: boolean;
    dateRange: [] | string[]
    isDark: boolean,
    color: string
}

export interface DispatchValueType {
    dispatch: Dispatch<CalendarActionType>
    setDateRange: (dateRange: [] | string[]) => void
}

export interface CalendarProviderPropType {
    children?: ReactElement;
    color: string;
    isDark: boolean;
    setDateRange: (dateRange: [] | string[]) => void;
    dateRange: [] | string[];
}