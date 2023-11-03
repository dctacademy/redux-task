const intialState = {
    data: []
}
export default function usersReducer(state = intialState, action){
    switch(action.type) {
        case 'ADD_USER' : {
            return {...state, data: [...state.data, action.payload]}
        }
        case 'REMOVE_USER' : {
            return {...state, data: state.data.filter(ele => ele.id !== action.payload )}
        }
        default: {
            return {...state}
        }
    }
}