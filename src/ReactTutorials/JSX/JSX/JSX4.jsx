import React from 'react'

function JSX4() {
    const handlekeypress = ()=>{
        console.log('key pressed')
    }
    const handleClick =()=>{
        console.log('button clicked')
    }
  return (
    <div>
        <input 
        onKeyUp={{handlekeypress}}
        type="text" placeholder='type here'/>
        <br/>
        <br/>
        <button onClick={handleClick}></button>

    </div>
  )
}

export default JSX4