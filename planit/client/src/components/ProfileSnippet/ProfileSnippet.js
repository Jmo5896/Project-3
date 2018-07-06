import React from 'react';
import profile_img from '../../img/profile_img.jpg';

const ProfileSnippet = () => {

    return (
        <div className='profileInfo'>
            <img className='profileImg' src={profile_img} alt='Profile' />
            <p>Walker Radez</p>
            <p>walkerradez@gmail.com</p>
        </div>
    );
}

export default ProfileSnippet;