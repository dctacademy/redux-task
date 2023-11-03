import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startGetGender } from '../actions/usersAction'
export default function Form(){
    const dispatch = useDispatch()
    const [name,setName] = useState('') 
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: Number(new Date()),
            name: name 
        }
        const resetForm = () => {
            setName('')
        }
        dispatch(startGetGender(formData, resetForm))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter Name</label> 
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )
}

