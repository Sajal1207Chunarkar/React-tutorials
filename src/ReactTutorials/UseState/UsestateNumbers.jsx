import React,{useState} from 'react'
 
function UsestateNumbers() {
    // const[age,setage]=useState(100)
    const[age,setage]=useState('Sajal')

    function changeAge(){
        // setage(age+100)
        // setage(age+5)*interview question
        setage(prevState=>prevState+'Something')
        setage(prevState=>prevState+'Something')
        setage(prevState=>prevState+'Something')

        setage(age+'Something')
        setage(age+'Something')
        setage(age+'Something')



        // setage(prevState =>prevState+100)
        // setage(prevState =>prevState+70)
        // setage(prevState =>prevState+30)


    }
    return(
        <div>
            <h1>{age}</h1>
            <button onClick={changeAge}>Change Age</button>
        </div>
    )
    
    
    }

export default UsestateNumbers