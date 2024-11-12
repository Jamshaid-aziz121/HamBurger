

import React from 'react'

export default function StudentCards({ stds, index, handleClick }) {
    return (
        <>

            <tr role='button' onClick={() => handleClick(index)}>
                <td>{index}</td>
                <td>{stds.firstName}</td>
                <td>{stds.lastName}</td>
                <td>{stds.gender}</td>
                <td>{stds.age}</td>
                <td>{stds.eyeColor}</td>
            </tr>

        </>
    )
}
