
import JSX2 from './ReactTutorials/JSX/JSX/JSX2'
function JSX2() {
    const arr =[100,200,300,400,500]

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
        <h1>{arr}</h1>
        { <h1>{
            arr.map((val)=>
            (`${val},`)
        )
            }</h1>}

            <h1>
                {
                    arr.map((val,i)=>
                    (`${val}
                        ${i===arr.length -1 ? '.' :','}
                        `)
                )
            }
            </h1>

            <h1>
                {
                    arr.map((val,i)=>
                        (
                    <h1 key={i}>
                        {val}</h1> 
                        )//for putting , in h1 put {val},
                )
            }
            </h1>
    </div>
  )
}

export default JSX2