import React from 'react'
import CompA from './CompA'
import Compb from './Compb'

function ParentComp() {
    const a=20
    const b=30
    const name='Sajal'
    const img=''
    const age=20
    const courses=['C','C++','Java','Python','Javascript']
    const info ={
        city:'Ngp',
        state:'MH'
    }
  return (
    <div>
        {/* props passing/sending */}
        <CompA
        num1={a}
        b={b}
        name={name}
        img={img}
        age={age}
        courses={courses}
        info={info}
        city={info.city}
        state={info.state}
        placeholder={'My name is sajal'}
        />

        <Compb
        num1={a}
        b={b}
        name={name}
        img={img}
        age={age}
        courses={courses}
        info={info}
        city={info.city}
        state={info.state}
        placeholder={'My name is sajal'}/>
    </div>
  )
}

export default ParentComp