import React, { useEffect, useState } from 'react'

function HookCounterWithObject() {
    const [name, setName] = useState({ firstName: '', lastName: '' })

    return (
        <div>
            <input
                type='text'
                value={name.firstName}
                onChange={e => setName({...name, firstName: e.target.value })}></input> {/* a spreed operator to merge an input with an object (instead of setState). This method makes a copy of an object and update only indicated value */}
            <input
                type='text'
                value={name.lastName}
                onChange={e => setName({...name, lastName: e.target.value })}></input>
            <h2>First name is {name.firstName}</h2>
            <h2>Last name is {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterWithObject