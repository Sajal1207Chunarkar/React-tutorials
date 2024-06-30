import React from 'react'

function JSX5() {
    const something='Sajal'
    const a =10, b=20;

    const someFunction=()=>{
        if (a>b){
            return(
                <h1>Sajal From if statement</h1>
            
            )
            
        }else{
            
        return(
            <h1>Sajal from else statement</h1>
        )
    }
}

const today= new Date();
  return (
    <div>
        <h1>{something}</h1>
        {
            someFunction()
        }
        <h1>{today.toString()}</h1>
        <h1>{Date.now()}</h1>
    </div>
  )
}

export default JSX5