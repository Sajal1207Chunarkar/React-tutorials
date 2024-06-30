import React from 'react'

function List2() {
    const users=[
        {userName:'Sajal',userId:1},
        {userName:'Manthan',userId:2},
        {userName:'Tejaswini',userId:3},
        {userName:'Vedant',userId:4},
        {userName:'Saurabh',userId:5},
        {userName:'Ayush1',userId:6},
        {userName:'Ayush2',userId:7},
    ]
  return (
    //Div element wrapper
     <div>
         {users.map((val,i)=>(
            <div key={i}>
                 <h1>{val.userName}</h1>
                <h1>{val.userId}</h1>
                </div>
        ))
     } 
    {/* react fragments */}
    {users.map((val,i)=>(
            <>
            <h1>{val.userName}</h1>
            <h1>{val.userId}</h1>
            </>
        ))
    }

    {users.map((val,i)=>(
            <React.Fragment key={i}>
            <h1>{val.userName}</h1>
            <h1>{val.userId}</h1>
            </React.Fragment>
        ))
    }
     
    
    </div>
  )
}

export default List2