import React from 'react';
import landing from "../../Assets/Images/undraw_data_points_re_vkpq.svg";
import './Landing.css';

const Landing = () => {

    const handleClick = () => {
        document.querySelector('.header-info').style.display = 'none';
    }

    return (
        <div className="landing-page" onClick={handleClick}>
            <h1>We are VCreaTek</h1>
            <img src={landing} alt="landing" />
        </div>
    )
}

export default Landing;
