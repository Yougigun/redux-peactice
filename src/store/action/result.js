import {STORE_RESULT,DELETE_RESULT} from './actionType'

export const store_result = (counter)=>{
    return {
        type:STORE_RESULT,
        counter
    }
}

export const storeResult = (counter) => {
    return (dispatch, getState) => {
        setTimeout(()=>{
            const oldCounter = getState().ctr.counter
            console.log(oldCounter);
            dispatch(store_result(oldCounter))
        },2000)
    }
}

export const delete_result = (index)=>{
    return {
        type:DELETE_RESULT,
        index
    }
}
