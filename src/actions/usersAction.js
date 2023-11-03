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