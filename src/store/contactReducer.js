import { combineReducers } from "redux";

const initialState = {
    contacts: [],
    loading: false,
    filtered: null,
}

const contactReducer = (state = initialState, action) =>{
    switch(action.type)
    {
        case "ADD_CONTACT" :  
            return {
                ...state, 
                contacts: [action.payload, ...state.contacts],
                loading: false
            };
        case "TOOGLE_FAV":
            let contact = state.contacts.map(s=>s.id === action.payload.id ? action.payload : s)
            return {
                ...state,
                contacts : [...contact.filter(c=>c.isFav), ...contact.filter(c=>!c.isFav)],
                loading: false
            };
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(s=>s.id !== action.payload),
                loading: false
            }
        case "FILTER_CONTACTS":
            return{
                ...state,
                filtered: state.contacts.filter(
                    contact => {
                        const regex = new RegExp(`${action.payload}`, 'gi');
                        return contact.name.match(regex);
                    }
                ),
                loading: false
            }
        case "CLEAR_FILTER":
            return{
                ...state,
                filtered: null
            }
        default: 
            return state;
    }
}

const rootReducer = combineReducers({
    contacts: contactReducer
});

export default rootReducer;