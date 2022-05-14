import React from 'react';
import ButtonArrR from '../../../Atoms/ButtonArrR';
import './style.css'
import { Link } from 'react-router-dom';


function Disconts(props) {
    return (
        <div className="container disconts">
            <h2 className='disconts-heading'>DISCONTS</h2>
            <div className="row">
                <div className="col-6 disconts-text">
                    <p>
                        We are honored to have you as our valued customer. We are always looking 
                        for new ways to improve our services and satisfy our customers. 
                        To gain customer appreciation as well as keep the level of satisfaction. 
                        We always review the selling price of our products and services.
                        We are pleased to inform you that we have decided to reduce the 
                        price for [product / service]. As of [xxx], the price of [xxx] will 
                        be reduced to [new price] from [old price]. We are confident that our 
                        new rates will provide you with excellent value. It also reflects our 
                        commitment to providing customer satisfaction.
                        Please contact us to order with new price. Our staff will gladly process your order. 
                        Once again thank you for doing business with us. In case of any questions or concerns. 
                        Please contact and share with us.I am pleased to announce that we have decided to offer 
                        a discount for [Product or Service]. As of [Date], the price will decrease from [Old Price] 
                        to [New Price]. We believe this not only gives you a great value. 
                        It also reflects our commitment to customer satisfaction.
                    </p>
                    <Link to='/' className='content-btn'>
                        Shop now
                        <i className="arr disconts-arr fas fa-long-arrow-alt-right"></i>
                    </Link>
                </div>
                <div className="col-6 disconts-img">
                    <img src='assets/images/sale2.jpg' />
                </div>
            </div>

            <h2 className='disconts-heading'>BIGEST SALE</h2>
            <div className="row dirc">
                <div className="col-6 disconts-text">
                    <p>
                        We are honored to have you as our valued customer. We are always looking 
                        for new ways to improve our services and satisfy our customers. 
                        To gain customer appreciation as well as keep the level of satisfaction. 
                        We always review the selling price of our products and services.
                        We are pleased to inform you that we have decided to reduce the 
                        price for [product / service]. As of [xxx], the price of [xxx] will 
                        be reduced to [new price] from [old price]. We are confident that our 
                        new rates will provide you with excellent value. It also reflects our 
                        commitment to providing customer satisfaction.
                        Please contact us to order with new price. Our staff will gladly process your order. 
                        Once again thank you for doing business with us. In case of any questions or concerns. 
                        Please contact and share with us.I am pleased to announce that we have decided to offer 
                        a discount for [Product or Service]. As of [Date], the price will decrease from [Old Price] 
                        to [New Price]. We believe this not only gives you a great value. 
                        It also reflects our commitment to customer satisfaction.
                    </p>
                    <Link to='/' className='content-btn'>
                        Shop now
                        <i className="arr disconts-arr fas fa-long-arrow-alt-right"></i>
                    </Link>
                </div>
                <div className="col-6 disconts-img">
                    <img src='assets/images/sale1.jpg' />
                </div>
            </div>
        </div>
    );
}

export default Disconts;