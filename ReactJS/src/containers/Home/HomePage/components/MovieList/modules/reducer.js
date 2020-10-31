import {MOVIELIST_REQ,MOVIELIST_SUC,MOVIELIST_FAIL} from './constant';
let initialState = {
    loading: false,
    data: null,
    err: null,
  };
const movieListReducer = (state = initialState,action)=>{
    switch(action.type){
        case MOVIELIST_REQ:
            state.loading = true;
            state.data = null;
            state.err = null;
            return { ...state };
        case MOVIELIST_SUC:
            state.loading = false;
            state.data = action.payload;
            state.err = null;
            return { ...state };
        case MOVIELIST_FAIL:
            state.loading = false;
            state.data = null;
            state.err = action.payload;
            return { ...state };
        default: // bắt buộc phải có 
            return { ...state };
    }
}
export {movieListReducer};