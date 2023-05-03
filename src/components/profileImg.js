import React,{useRef, useState} from 'react'

               

const ProfileImg = () => {
    const inputRef = useRef(null)
    const [image, setImage] = useState('')

    const handleImageClick = () =>{
        inputRef.current.click()
    }

    const handleImageChange = (event) =>{
        const file = event.target.files[0]
        console.log(file)
        setImage(event.target.files[0])
    }

  return (
    <span style={{display:"flex"}}>
        <div style={{marginLeft:"10px", width:"100px" , height:"100px"}}onClick={handleImageClick}>
        
        {image ? <img style={{width:"100px", height:"100px"}} src={URL.createObjectURL(image)} alt='profile' /> 
        : <img style={{width:"100px", height:"100px"}} src="./Logi.png" alt='profile' />}
        <input type="file" ref={inputRef} onChange={handleImageChange} style={{display :"none"}} />
        
    </div>
    <input style={{border:"none", height:"20px", textDecoration:"underline", fontWeight:"bold", fontSize:"15px", margin:"10px"}} type="text" placeholder='title'/>
    </span>
    )
}

export default ProfileImg