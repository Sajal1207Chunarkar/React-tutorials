
import React from "react"
import MyThirdComponent from "./MyThirdComponent"
//create a component
function MyFirstComponent(){
     
    return(
        <div>
              {/* <h1>My First Component</h1> */}
              <h1 >My First component  executed</h1>
              <MyThirdComponent/>
              <p>My third component executed</p>
        </div>
    )
}
//send a component
export default MyFirstComponent