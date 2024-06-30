import React, { useState } from 'react'

function UseStateString() {
    const [name, setname] = useState('Sajal')


    function changeName () {
        // setter function call
        // updates the state of name variable to 'abc'
        setname('abc')
        console.log(name);
    }
     
    console.log(name);

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default UseStateString