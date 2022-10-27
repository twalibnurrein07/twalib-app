import React, { useState } from 'react'

function Form() {
    const [val,setVal] = useState()
const handleChange =({target})=>{
    setVal(target.value)
}
const handleClick =(e) =>{
e.preventDefault();
alert("I got clicked!")
}

  return (
    <div className='container'>
        <div className='form d-flex justify-content-center'>
            <form className='d-flex flex-column py-3 px-3' style={{width:'500px'}}>
                <div>
                    <input type='text' value={val} onChange={handleChange}/>
                </div>
                <div className='d-grid'>
                    <button className='btn btn-success' type='button' disabled={!val} onClick={handleClick}>Click me</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form
