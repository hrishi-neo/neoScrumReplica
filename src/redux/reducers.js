
import { LOGIN, LOGOUT, REGISTER, ADD_FEEDBACK } from "./actionTypes";


const intialState = {

    loggedIn: false,
    email: null,
    password: null,
    data: [{ "id": 1, "name": "Hrishikesh Kedar", "date": "23rd July 2021", "title": "I can see real improvement in your work and professional skills as of late. I think you've come on leaps and bounds. I am particularly impressed with your ability to provide high attention to detail, without compromising on speed. Keep up the good work!", "time": "9:45 AM" },
    { "id": 2, "name": "Harshit Sharma", "date": "23rd July 2021", "title": "I just want to say that I know you have had distractions at home which you could have used as an excuse for not taking this meeting. Yo managed not only to step up to the plate after taking a knock, but you also encaptivated the audience with a clear, engaging, and well thought out presentation which I admire. I especially liked your use of audio cues. Keep up the good work!", "time": "9:45 AM" },
    { "id": 3, "name": "Ravi Ranjan", "date": "23rd July 2021", "title": "You did a great job yesterday by gathering all of your team members and asking them for an input regarding XY. This really helped everyone feel like they were part of the process. I also liked how you asked everyone a question related to their expertise. It was a great way to encourage participation. What you did yesterday with that meeting is a great example of a true teamwork we would like to encourage in our company. Nicely done!", "time": "9:45 AM" },
    { "id": 4, "name": "Nilesh Chavan", "date": "23rd July 2021", "title": "I’m really impressed with how you handled that last client. I understand how difficult it can be dealing with tough or difficult individuals but you were excellent at it. You were calm, collected and were able to quickly develop viable solutions for them. Keep it going!", "time": "9:45 AM" },
    { "id": 5, "name": "Nishant Parashar", "date": "23rd July 2021", "title": "There are some aspects of the project you just completed that I think we need to work on. I really liked what you did with XXXX, but I think we can improve on certain area. I think we can look at developing XXXX next time and we must make sure we tighter to deadlines next time.", "time": "9:45 AM" },
    { "id": 6, "name": "Abhishek Badugu", "date": "21st July 2021", "title": "I can see real improvement in your work and professional skills as of late. I think you’ve come on leaps and bounds. I am particularly impressed with your ability to provide high attention to detail, without compromising on speed. Keep up the good work!", "time": "9:45 AM" },
    ]

};

export const mainReducer = (state = intialState, action) => {
    
    switch (action.type) {
        
        case LOGIN:
           
            return { ...state, loggedIn: true }


        case LOGOUT:
            return { ...state, loggedIn: false }

        case ADD_FEEDBACK:
            
            return { ...state, data: [...state.data, action.payload] }

        case REGISTER:
            return { ...state, email: action.payload.email, password: action.payload.password }

        default:
            return state;
    }
}