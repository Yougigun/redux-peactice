export const CHANGE_AMOUNT = "CHANGE_AMOUNT"
export const STORE_RESULT = "STORE_RESULT"
export const DELETE_RESULT = "DELETE_RESULT"


export const change_amount = (value)=>{
    return {
        type:CHANGE_AMOUNT,
        value
    }
}

export const store_result = (counter)=>{
    return {
        type:STORE_RESULT,
        counter
    }
}

export const storeResult = (counter) => {
    return dispatch => {
        setTimeout(()=>{
            dispatch(store_result(counter))
        },2000)
    }
}


export const delete_result = (index)=>{
    return {
        type:DELETE_RESULT,
        index
    }
}
