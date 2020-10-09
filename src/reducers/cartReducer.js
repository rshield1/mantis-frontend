let initialState = {current_cart: {items: [], total: 0}}



export const cartReducer = (state = initialState, action) => {
    let items = state.current_cart.items
    let total = state.current_cart.total
    let current_cart = state.current_cart


    switch(action.type){
     case "ADD_ITEM":
            return {
                ...state,
                current_cart: {
                    ...current_cart,
                    items: [
                        ...items,
                        action.payload
                    ],
                    total: total+action.payload.price
                }
            }
            default: 
                return state
    }
}