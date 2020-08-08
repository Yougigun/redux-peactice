const initialState = {
    counter:0,
    results:[]
}

const reducer = (state = initialState, action)=>{
    console.log(action);
    switch (action.type) {
        case "onChangeAmount" :
            return {
                ...state,
                counter : state.counter + action.value
            }
        case 'STORE_RESULT':{
            //or use arr.concat to return 'new' array instead of push
            const newResult = [...state.results]
            newResult.push(state.counter)
            return {
                ...state,
                results:newResult
            }}
        case 'DELETE_RESULT':{
            const newResult = [...state.results]
            newResult.splice(action.index,1)
            return {
                ...state,
                results:newResult
            }}
    }
    
    return state
}

export default reducer