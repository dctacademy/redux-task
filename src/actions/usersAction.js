import axios from 'axios'

export const startGetGender = (user, resetForm) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://api.genderize.io/?name=${user.name}`)
            user.gender = response.data.gender
            dispatch(addUser(user))
            resetForm()
        } catch(e) {

        }
    }
}

const addUser = (user) => {
    return { type: "ADD_USER", payload: user}
}

export const removeUser = (id) => {
    return { type: "REMOVE_USER", payload: id }
}

export const setUserId = (id) => {
    return { type: 'SET_USER_ID', payload: id }
}

export const startEditGender = (user, resetForm) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://api.genderize.io/?name=${user.name}`)
            user.gender = response.data.gender 
            dispatch(editUser(user))
        } catch(e) {

        }
    }
}

const editUser = (user) => {
    return { type: "EDIT_USER", payload: user}
}