import React, {Component} from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    // Map through props array to return a table row for each object
    const rows = props.peopleData.map((row, index) => {
        return (
            // Use key indices to identify each list item / table row
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removePerson(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    
    return <tbody>{rows}</tbody>
}

const Table = (props) => {
    const {peopleData, removePerson} = props 

    return (
        <table>
            <TableHeader />
            <TableBody peopleData={peopleData} removePerson={removePerson} />
        </table>
    )
}

export default Table