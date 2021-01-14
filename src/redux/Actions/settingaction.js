export const USER_NAME = "SETTING_USERNAME"
export const VOTER_ID = "VOTER_ID"
export const MOBILE = "MOBILE"
export const ADDRESS = "ADDRESS"
export const FAMILY_MEMBER = "FAMILY_MEMBER"
export const RESET = " RESET"


export const userName = (usr) => ({
  type: USER_NAME,
  payload: usr,
});

export const voter_id = (pwd) => ({
  type: VOTER_ID,
  payload: pwd,
});

export const mobile = (mob) => ({
  type: MOBILE,
  payload: mob,
});

export const address = (add) => ({
  type: ADDRESS,
  payload: add,
});

export const familymem = (meb) => ({
  type: FAMILY_MEMBER,
  payload: meb,
});

export const reset = () => ({
  type: RESET,
});