import React from 'react';
const ProfilePhoto = () => {
    const style = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover"
  };
    return (
        <div>
            <img src="./Picture/myPicture.jpg" alt='me' style = {style}/>
        </div>
      )
  };


export default ProfilePhoto;