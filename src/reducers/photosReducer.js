export const photosReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_ALL_PHOTOS':
            return action.payload
        default:
            return state
    }

}