import React from 'react';
import pic from "../pic.png";

const Header = () => {
    return (
    <section id="header">
        <div className="content">
            <span className='hello'>Hello,</span>
            <span className='text'> I'm <span className='introName'> Janea Janel Dinglasan</span></span>
        </div>
        <img src={pic} alt="pic" className="profpic" />
    </section>
    

);
}

export default Header;
