import { useSelector } from 'react-redux'
export default function Table() {
    const users = useSelector((state) => {
        return state.users 
    })
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
                        <td><button>x</button></td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}