import { GET_NEXT_DATA, REQUEST_NEXT_DATA, FAILED_NEXT_DATA } from "../Actions/actionCreator";

const initialState = {
    nextData: [],
    loading:false,
    apiError:{}

}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_NEXT_DATA:
            console.log("reducers data check", typeof(action.payload), action.payload);
            return {
                ...state,
                nextData:action.payload,
                loader:false
            }
        case REQUEST_NEXT_DATA:
            return {
                ...state,
                loader: true
            }
        case FAILED_NEXT_DATA:
            return {
                ...state,
                loader: false,
                apiError:action.payload
            }
        default:
            return state;
    }
}