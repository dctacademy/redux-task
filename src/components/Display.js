import { useSelector } from 'react-redux'
import Table from './Table'
export default function Display() {
    const users = useSelector((state) => { 
        return state.users 
    })
    return (
        <div>
            <h2>Listing users - { users.data.length }</h2>
            <Table />
        </div>
    )
}