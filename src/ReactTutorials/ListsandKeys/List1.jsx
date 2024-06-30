import React from 'react'
import List1 from './List1'

function List1() {
    const arr=['C','C++','Python','Java']
    return (
      <div>
        
          {
              arr.map1((val,i)=>(
                  <h1>{val}</h1>
              ))
          }
          {/* <h1>-------------</h1> */}
          {/* <h1>{arr.map((val,i)=>(`${val},`))}</h1> */}
      </div>
    )
  }
  
export default List1