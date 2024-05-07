import { createContext, useContext } from "react";
import {CalendarContextType, DispatchValueType} from "./CalendarContextType.ts";

export const CalendarContext = createContext<null | CalendarContextType>(null);
export const CalendarDispatchContext = createContext<null | DispatchValueType>(null);

// Custom hooks to access calendar context and dispatch context
export function useCalendar() {
    return useContext(CalendarContext);
}

export function useCalendarDispatch() {
    return useContext(CalendarDispatchContext);
}