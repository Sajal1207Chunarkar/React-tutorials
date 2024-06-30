import React from 'react'

function JSX3() {
    const obj={
        name:'Sajal',
        age:21,
        info:{
            city:'Ngp',
            state:'MH',
            courses:['C','C++','Java','Python']
        }
    }
  return (
    <div>
    <h1>{obj.name}</h1>
    <h2>{obj.age}</h2>
    <h1>{obj.info.city}</h1>
    <h1>{obj.info.state}</h1>
    <h1>{obj.info.courses}</h1>
    <h1>{obj.info.courses[0]}</h1>
    <h1>{obj.info.courses[1]}</h1>
    <h1>{obj.info.courses[0]}</h1>
    <h1>{obj.info.courses[3]}</h1>

</div>
  )
}

export default JSX3