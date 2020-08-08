const initialState = {
    counter:0
}

const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case "onChangeAmount" :
            return {
                counter : state.counter + action.value
            }
    }
    
    return state
}

export default reducer