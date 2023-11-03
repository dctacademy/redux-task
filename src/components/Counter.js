import { useState } from 'react'
export default function Counter() {
    console.log('before use State')
    const [count, setCount] = useState(0)
    console.log('after use state')
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={e => setCount(count + 1)}> + 1</button>
        </div>
    )
}