import React from 'react';
import './style.css'
import MediumImageContent from '../../Atoms/MediumImageContent';


function MediumImage(props) {
    return (
        <div className='medium-img row'>
            <div className='col md-6 medium'>
                <img src='https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-HERO-samsung-note10-bundle-3000x1682:VP1-539x440'/>
                <MediumImageContent toLink='/SamSung' title='SamSung' desc='beautiful and comfortable with Samsung'/>
            </div>
            <div className='col md-6 medium'>
                <img src='https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-note-9s/nor.jpg'/>
                <MediumImageContent toLink='/Xiaomi' title='Xiaomi' desc='Strong battery, high configuration, play games'/>
            </div>
            
        </div>
    );
}

export default MediumImage;