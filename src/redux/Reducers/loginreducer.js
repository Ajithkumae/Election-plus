import * as actions from '../Actions/loginaction'

export const initialState ={
    username :null,
    password: null,

}

export default function reducer (state = initialState, action){
    switch(action.type){

        case actions.USER_NAME:
            return userName(state,action)

            case actions.PASSWORD:
                return password( state,action)

                default:
                    return state;
    }
}
const userName =(state,action )=>{
    return{
        ...state,
        username:action.payload
    }
}

const password =(state,action )=>{
    return{
        ...state,
        password:action.payload
    }
}