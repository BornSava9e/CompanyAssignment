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
    <div >
        <div onClick={handleImageClick}>
        
        {image ? <img style={{width:"100px", height:"100px"}} src={URL.createObjectURL(image)} alt='profile' /> 
        : <img style={{width:"100px", height:"100px"}} src="./Logi.png" alt='profile' />}
        <input type="file" ref={inputRef} onChange={handleImageChange} style={{display :"none"}} />
    </div>
    </div>
    )
}

export default ProfileImg