import { INC, DEC, ALT } from "../actionTypes/counter";

export function incActionCreator(by = 1) {
    return {
        type: INC,
        by
    };
}

export function decActionCreator(by = 1) {
    return {
        type: DEC,
        by
    };
}

export function altActionCreator(alert) {
    return {
        type: ALT,
        alert
    };
}