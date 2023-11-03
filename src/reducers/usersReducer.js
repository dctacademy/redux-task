const intialState = {
    data: [],
    editUserId: ''
}
export default function usersReducer(state = intialState, action){
    switch(action.type) {
        case 'ADD_USER' : {
            return {...state, data: [...state.data, action.payload], editUserId: ''}
        }
        case 'REMOVE_USER' : {
            return {...state, data: state.data.filter(ele => ele.id !== action.payload )}
        }
        case 'SET_USER_ID' : {
            return {...state, editUserId: action.payload}
        }
        case 'EDIT_USER' : {
            return {...state, editUserId: '', data: state.data.map((ele) => {
                if(ele.id === action.payload.id) {
                    return {...ele, ...action.payload}
                } else {
                    return {...ele}
                }
            })}
        }
        default: {
            return {...state}
        }
    }
}