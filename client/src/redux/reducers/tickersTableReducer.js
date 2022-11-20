import {SET_TICKERS_DATA} from "./tickersTableActionTypes";

const initialState = {
    tickers: []
}

const tickersTableReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TICKERS_DATA:
            return {
                ...state,
                tickers: action.payload
            }

        default:
            return state;
    }
}

export default tickersTableReducer;

export const getTableData = (data) => (dispatch) => {
    dispatch({type: SET_TICKERS_DATA, payload: data});
}