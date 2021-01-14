export const PASSWORD = "PASSWORD"
export const USER_NAME = "USERNAME"


export const userName = (usr) => ({
    type: USER_NAME,
    payload: usr,
  });
  
  export const password = (pwd) => ({
    type: PASSWORD,
    payload: pwd,
  });