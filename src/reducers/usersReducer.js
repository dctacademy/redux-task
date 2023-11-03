const intialState = {
    data: []
}
export default function usersReducer(state = intialState, action){
    switch(action.type) {
        case 'ADD_USER' : {
            return {...state, data: [...state.data, action.payload]}
        }
        default: {
            return {...state}
        }
    }
}