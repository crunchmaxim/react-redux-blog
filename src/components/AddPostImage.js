import React from 'react';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import './styles/AddPostImage.css';

const AddPostImage = (props) => {
    const openPostImageInput = () => {
        const imageInput = document.getElementById(`${props.postId}`);
        imageInput.click();
    }

    const handlePostImage = (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append('image', image, image.name);
        props.setPostImage(props.postId, formData);
    }

    return (
        <>
            <AddPhotoAlternateIcon onClick={openPostImageInput} className='add-post-image'/>
            <input id={`${props.postId}`} type='file' hidden onChange={handlePostImage}/>
        </>
    )
}

export default AddPostImage;
