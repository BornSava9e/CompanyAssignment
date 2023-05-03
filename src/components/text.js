import React,{useState} from 'react'


const Text = () => {
  const [text, setText] = useState("Details")

  const handleChange = (event) =>{
    setText(event.target.value)
   
  } 

  return (
    <div style={{marginTop:"10px"}}>
      
        
         {text ? <input className="textbox1"  type="text" onChange={handleChange}/> 
         : <input className="textbox2"  type="text" placeholder=" January 2015 - Present" onChange={handleChange}/>}
    </div>
  )
}

export default Text