import { InjectionToken } from "@angular/core";

export const DOCUMENT = new InjectionToken<Document>('Doc obj');
export const SET_INTERVAL = new InjectionToken<typeof setInterval>(
    'setInterval func'
);