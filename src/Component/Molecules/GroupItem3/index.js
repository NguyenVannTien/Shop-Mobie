import React from 'react';
import FooterLinkItem from '../../Atoms/FooterLinkItem';
import HeadingFooter from '../../Atoms/HeadingFooter';
import './style.css'
function GroupItem3(props) {
    return (
        <div className='center'>
            <HeadingFooter text = 'About Us'/>
            <FooterLinkItem nameitem='Our stores'/>
            <FooterLinkItem nameitem='Customer consulting'/>
            <FooterLinkItem nameitem='Site map'/>
        </div>
    );
}

export default GroupItem3;