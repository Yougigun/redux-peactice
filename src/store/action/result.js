import {STORE_RESULT,DELETE_RESULT} from './actionType'

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
