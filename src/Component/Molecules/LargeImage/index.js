import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';


function LargeImage(props) {
    return (
        <div className='large-image'>
            <img className='large-img' src='https://www.trumiwatch.vn/wp-content/uploads/2020/08/apple-banner.jpg'/>
            <div className='large-image_content'>
                <span className='content-title'>20% OFF</span>
                <span className='content-desc'>All apple products in the store</span>
                <Link to='/IPhone' className='content-btn'>
                    Shop now
                    <i className="arr fas fa-long-arrow-alt-right"></i>
                </Link>
            </div>
        </div>
    );
}

export default LargeImage;