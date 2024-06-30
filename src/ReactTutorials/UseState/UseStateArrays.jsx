import React ,{useState} from 'react'

function UseStateArrays() {
//     const[arr,setarr]=useState([])
//     const arr1=[10,20,30]
//     const changeArr=()=>{
//         // setarr([...arr,10])
//         // setarr(prevState=>[...prevState,10,20])
//         // setarr(prevState=>[...prevState,...arr1])
//         setarr(prevState=>[...arr1,'Sajal',...prevState])
    
        
//         //only spread opearator use
//         // state->10
//         // state->10
//         //state->10


//     }
//   return (
//     <div>
//         <h1>{arr}</h1>
//         <button onClick={changeArr}>Change Array</button>
//     </div>
//   )
// }

//assignment(output will be 1000,2000,100,200,abc,xyz,something)
const [arr,setarr]=useState([100,200])
const arr1=[1000,2000]
const arr2=['abc','xyz']
const changeArr=()=>{
  setarr([...arr1,arr,arr2,'something'])
}
return (
       <div>
           <h1>{arr}</h1>
          <button onClick={changeArr}>Change Array</button>
      </div>
    )
}
export default UseStateArrays