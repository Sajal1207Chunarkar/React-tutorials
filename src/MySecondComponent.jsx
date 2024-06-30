
import React from "react"
import MyThirdComponent from "./MyThirdComponent"
import MyFirstComponent from "./MyFirstComponent"
function MySecondComponent(){
    return(
    <div>
        <h1>My Second Component</h1>
        <MyThirdComponent/>
        <MyFirstComponent/>
        <h2>Thank you</h2>
    </div>
    )
}
export default MySecondComponent