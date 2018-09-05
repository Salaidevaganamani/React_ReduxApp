import { INC, DEC, ALT } from "../actionTypes/counter";

const initialState = { counter: 0 };

export default function counterReducer(prevState = initialState, action) {
    switch (action.type) {
        case INC:
            return { counter: prevState.counter + action.by };
        case DEC:
            return { counter: prevState.counter - action.by };
        case ALT: 
            return { counter: prevState.counter = 0, alert};
        default:
            return prevState;
    }
}