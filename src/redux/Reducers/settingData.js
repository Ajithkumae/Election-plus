import * as actions from '../Actions/settingaction'

export const initialState = {
    username: null,
    voter_id: null,
    mobilenum: null,
    address: null,
    familymem: null,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case actions.USER_NAME:
            return userName(state, action)
        case actions.MOBILE:
            return mobile(state, action)
        case actions.VOTER_ID:
            return voter_id(state, action)
        case actions.ADDRESS:
            return address(state, action)
        case actions.FAMILY_MEMBER:
            return familymem(state, action)

        case actions.RESET:
            return reset(state, action)


        default:
            return state;
    }
}
const userName = (state, action) => {
    return {
        ...state,
        username: action.payload
    }
}

const voter_id = (state, action) => {
    return {
        ...state,
        voter_id: action.payload
    }
}
const mobile = (state, action) => {
    return {
        ...state,
        mobilenum: action.payload
    }
}
const address = (state, action) => {
    return {
        ...state,
        address: action.payload
    }
}
const familymem = (state, action) => {
    return {
        ...state,
        familymem: action.payload
    }
}
const reset = (state, action) => {
    return {
        ...state,
        username: null,
        voter_id: null,
        mobilenum: null,
        address: null,
        familymem: null,
    }
}
