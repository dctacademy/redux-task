// npm install react-chartkick chart.js --force
import { PieChart } from 'react-chartkick'
import 'chartkick/chart.js'
import { useSelector } from 'react-redux'
export default function Stats() {
    const users = useSelector((state) => {
        return state.users.data 
    })

    const frequency = users.reduce(function(acc, cv){
        if(cv.gender === 'male') {
            acc.male += 1
        } else {
            acc.female += 1
        }
        return acc 
    }, { male: 0, female: 0})

    return (
        <div>
            <h2>Stats</h2>
            <PieChart data={Object.entries(frequency)}/>
        </div>
    )
}