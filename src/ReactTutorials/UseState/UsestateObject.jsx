import React, { useState } from 'react'

function UsestateObject() {
    const[obj,setobj]=useState({
        name:'Sajal',
        age:10,
        courses:['html','css'],
        info:{
            city:'Pune',
            state:'MH',
            arr1:[1000,2000],
            contact:{
                mobile:909641297,
                email:'email@gmail.com',
                arr2:['a','b','c']
            }
        }
    })
    const handleChangeObject=()=>{
        setobj(prevState=>{
            return{
                ...prevState,
                courses:[...prevState.courses,'js'],
                name:'Sajal_Chunarkar',
                age:21,
                info:{
                    ...prevState.info,
                    arr2:[...prevState.info.arr1,3000],
                    city:'Nagpur',
                    contact:{
                        ...prevState.info.contact,
                        mobile:7896434555,
                        email:'new value'
                
                    }
    
                }
                // city:'Nagpur'
            }
        })

    }
  return (
    <div>
        <h1>{obj.name}</h1>
        <h1>{obj.age}</h1>
        {/* <h1>{obj.city}</h1> */}
        <h1>{obj.info.city}</h1>
        <h1>{obj.info.state}</h1>
        <h1>{obj.info.contact.mobile}</h1>
        <h1>{obj.info.contact.email}</h1>
        <h1>{obj.info.contact.arr2}</h1>
        <h1>{obj.courses}</h1>
        <h1>{obj.info.contact.arr2}</h1>


        <button onClick={handleChangeObject}>Change Object</button>
    </div>
  )
}

export default UsestateObject