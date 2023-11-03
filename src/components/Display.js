import { useSelector } from 'react-redux'
import Table from './Table'
import List from './List'
export default function Display() {
    const users = useSelector((state) => { 
        return state.users 
    })
    return (
        <div>
            <h2>Listing users - { users.data.length }</h2>
            <Table users={users} />
            <List type="Male" data={users.data.filter(ele => ele.gender === 'male')} />
            <List type="Female" data={users.data.filter(ele => ele.gender === 'female')} /> 
        </div>
    )
}