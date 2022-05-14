import React from 'react';
import Heading from '../../../Atoms/Heading';
import './style.css'
import { Link } from 'react-router-dom';
function AboutUs(props) {
    return (
        <div className="container about">
            <h2 className='about-heading'>ABOUT</h2>
            <div className="row">
                <div className="col-6 about-text">
                    <p>
                        Cell phone, You are the one of the most important things in my life. 
                        You keep me in touch with my family and friends. Even if I dont 
                        want to text I can always call or go on the internet to contact my friends 
                        that dont have a cell phone. Cell phone, you are a wonderful thing to have 
                        because you can help me when I am lost.Everytimes i have a free time, i can 
                        play games with you or listen to music, read news, even i can learn everything 
                        on the internet via yours.I would never ask you to change better. However, if 
                        you do, I would like a version of you that looks better and are more thin, enough for my hands.
                        I want you to become an iphone 6. I would like you gold or white.I cant go one day without you,
                        contacting my friends and family is so important to me. I can text or call anyone, 
                        anywhere when I have you in my hands. Cell phone, without you, 
                        I would sit at home waiting for the phone to ring, or even go into my room and look for someone
                        I want to call. With you I can have my plans, contacts and information
                        all in one thing and not lose anything. I just want to say, I am so thankful to have you.
                    </p>
                </div>
                <div className="col-6">
                    <img src='assets/images/about.jpg' />
                </div>
            </div>

            <h2 className='about-heading'>COMMUNITY</h2>
            <div className="row dirc">
                <div className="col-6 about-text">
                    <p>
                        I received a very precious gift from my sister on my 24th birthday.
                        It was a laptop. My sister has always been very generous, but this time even 
                        I was surprised by her generosity. I could have never envisaged that she would
                        give me such an expensive gift. At first I told refused to accept it as I believe 
                        it was an extravagant expenditure, but on her persistent persuasion I had to accept
                        this expensive gift.
                        It is so difficult to describe the laptop in words, but I would just tell you something
                        about. It was an i3 and it has a black color. I don't know the price of the laptop as 
                        it was a gift but it has been priceless for me. Whenever someone looks at the laptop
                        the person asks me about the laptop and tells me how good it is. I am not person an
                        IT professionals so I would not be able to explain this electronic device in the 
                        most proper way, but I still want to say that it is not only stylish but also useful.
                        This gift has been very beneficial for me. It has helped me both educationally and 
                        socially. I use my laptop whenever I have to do an assignment or report. I also talk 
                        or communicate with my friends by using different websites and applications. I can say 
                        that my life would have been boring and slow if I had not had this beautiful gift. 
                        That is the reason I always tell my sister how thankful I am to her for giving me 
                        suck a useful thing which has actually helped me a lot
                    </p>
                </div>
                <div className="col-6">
                    <img src='assets/images/about2.jpg' />
                </div>
            </div>

            <h2 className='about-heading'>CONTACT</h2>
            <div className="row">
                <div className="col-6 about-text">
                    <div className='contact-item'>
                        <i className="fa-solid fa-location-dot"></i>
                        <span>07th Floor, Golden Field Building, 24 Nguyen Co Thach Street, Hanoi, Vietnam </span>
                    </div>
                    <div className='contact-item'>
                        <i className="fa-solid fa-phone"></i>
                        <span>Phone: +(84).839.716.099</span>
                    </div>
                    <div className='contact-item'>
                        <i className="fa-solid fa-envelope"></i>
                        <span>Email: vantienn@reactplus.jp</span>
                    </div>

                    <div className='row'>
                        <div className="col-6">
                            <input required className='input-row1' type="text" placeholder='Name'/>
                        </div>
                        <div className="col-6">
                            <input required className='input-row1' type="text" placeholder='Email'/>
                        </div>
                    </div>

                    <input required className='message' type="text" placeholder='Message'/>

                    <button type='submit' className='send'>SEND</button>
                </div>
                <div className="col-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.942817604326!2d105.7634631144075!3d21.034973892943217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b93c73ca9d%3A0x210784911132ebe!2zMjQgUGjhu5EgTmd1eeG7hW4gQ8ahIFRo4bqhY2gsIE3hu7kgxJDDrG5oLCBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1645084273523!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" />
                </div>
            </div>

        </div>
    );
}

export default AboutUs;