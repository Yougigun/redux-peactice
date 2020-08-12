import * as actionType from '../action/action'
const initialState = {
    results:[]
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case actionType.STORE_RESULT:{
            //or use arr.concat to return 'new' array instead of push
            const newResult = [...state.results] // make new array
            newResult.push(action.counter)

            return {
                ...state,
                results:newResult
            }}
        case actionType.DELETE_RESULT:{
            // const newResult = [...state.results]
            // newResult.splice(action.index,1)
            const newResult = state.results.filter((result,i)=>i!==action.index) // filter return a new array which matters.
            return {
                ...state,
                results:newResult
            }}
    }
    
    return state
}

export default reducer