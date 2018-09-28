const initialState = {
    photos: [],
    fetching: false
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case 'FETCH_PHOTOS':
            return {
                    ...state,
                    fetching: true
                   }
        case 'FETCH_PHOTOS_SUCCESS':
            return {
                ...state,
                fetching: false,
                photos: action.payload
            }
        case 'FETCH_PHOTOS_FAIL':
            return {
                ...state,
                fetching: false
            }
        default:
            return {...state}
    }
} 

export default reducer;