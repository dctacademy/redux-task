import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { startGetGender, startEditGender, setUserId } from '../actions/usersAction'
export default function Form(){
    
    const user = useSelector((state) => {
        return state.users.data.find(ele => ele.id === state.users.editUserId )
    })

    const dispatch = useDispatch()

    const [name,setName] = useState('') 

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: user ? user.id : Number(new Date()),
            name: name 
        }
        const resetForm = () => {
            setName('')
        }
        if(user) {
            dispatch(startEditGender(formData, resetForm))
        } else {
            dispatch(startGetGender(formData, resetForm))
        }
    }
    
    useEffect(() => {
        setName(user ? user.name : '')
    }, [user])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter Name</label> 
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <input type="submit" value={ user ? 'update' : 'save' }/>
            </form>
            {user && <button onClick={() => {
                dispatch(setUserId(''))
            }}> clear </button>}
            
        </div>
    )
}
