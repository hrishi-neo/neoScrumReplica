import { LOGIN,LOGOUT} from "./actionTypes";

const intialState = {
    
    loggedIn: false,
    email:'',
    password:''
    
};

export const mainReducer = (state = intialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, loggedIn:true }


        case LOGOUT:
            return { ...state, loggedIn:false }

           
        default:
            return state;
    }
}