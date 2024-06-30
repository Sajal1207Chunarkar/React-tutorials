
function JSX1() {
    const name='Sajal_something';
    const age=21;
    const placeholder="My name is Sajal";   
    const textcolor='red'
    // const imgPath='https://'



  return (
    <div>
        {/* <h1>Mrugnaini</h1> */}
        {/* <h2>My name is Sajal and I am 21 Years old</h2> */}
        
        <h1 style={{ color: textcolor}}>{name}</h1>
        <h2>My name is {name}and I am {age}years old</h2>
        <input type="text" placeholder={placeholder}/>

        {/* <input type="text" placeholder="Enter your name"/> */}
        <img src="" width={'200px'} alt=""/>
    </div>
  )
}

export default JSX1