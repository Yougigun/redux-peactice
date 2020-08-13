import {CHANGE_AMOUNT} from  './actionType'

export const change_amount = (value)=>{
    return {
        type:CHANGE_AMOUNT,
        value
    }
}
