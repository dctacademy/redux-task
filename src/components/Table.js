import { useSelector, useDispatch } from 'react-redux'
import { removeUser } from '../actions/usersAction'

export default function Table() {
    const dispatch = useDispatch()
    const users = useSelector((state) => {
        return state.users 
    })

    const handleRemove = (id) => {
        const input = window.confirm("Are you sure?")
        if(input) {
            dispatch(removeUser(id))
        }
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            { users.data.map((ele,i) => { 
                return (
                    <tr key={i}>
                        <td>{ele.name}</td>
                        <td>{ele.gender}</td>
                        <td><button onClick={() => {
                            handleRemove(ele.id)
                        }}>x</button></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}

/*
    1. create event handler for onClick
    2. pass the id as an argument to handleRemove
    3. inside handleRemove ask the user if he wants to remove using the confirm method
    4. if the user says yes, then dispatch to the reducer
    5. invoke a removeUser action creator by passing the id of the user
    6. let the removeUser return an action object with property type - "REMOVE_USER" and payload is id
    7. when dispatched to the reducer, inside the reducer check for the action type, if it is remove user then using the filter method remove the user from the state 
*/