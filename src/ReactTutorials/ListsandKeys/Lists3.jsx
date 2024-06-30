import React from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

function Lists3() {

  const arr=[1,2,3,4,5]
  return (
    <div>
    {/* {
      arr.map((val,i)=>(
        <ComponentA key={i}/>
      ))
    } */}
    

    {
      arr.map((val,i)=>(
        <>
        <ComponentA key={i}/>
        <ComponentB key={i}/>
        </>
      ))
    }
  </div>
  )
}

export default Lists3