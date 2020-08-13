import * as actionType from '../action/actionType'
const initialState = {
    counter:0,
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case actionType.CHANGE_AMOUNT :
            return {
                ...state,
                counter : state.counter + action.value
            }
    }
    
    return state
}

export default reducer