import PropTypes from 'prop-types' // npm install prop-types 
export default function List(props) {
    const { type, data } = props 
    return (
        <div>
            <h2>Listing { type } - { data.length }</h2>
            <ul>
                { data.map((ele) => {
                    return <li key={ele.id}> { ele.name }</li>
                })}
            </ul>
        </div>
    )
}

List.propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired
}