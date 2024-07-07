import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Header';
import contact from '../assets/json/contact.json';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {StyledContainer, Carousel, StyledBox, StyledMenu } from '../components/MUI';
import { SwiperCarousel } from '../components/Slider/Slider';

export const ContactUs = ({data, whatsApp = false})=>(
  <section className="bg-primary-white text-primary p-6 text-center rounded-lg w-full mx-auto">
      <Link to={data.linkTo} >
      <h3 className="text-2xl font-semibold text-primary mb-4 hover:text-blue-600">{data.title}</h3>
      </Link>
      <p className="text-lg mb-2">{data.address}</p>
      <p className="text-lg mb-6">{data.phone}</p>
      {whatsApp && <FontAwesomeIcon className='cursor-pointer hover:text-green-600' 
      icon={faWhatsapp} size='2xl' color='#25D366' />}
</section>
)


const Contact = () => {
  return (
    <div className="pageContainer max-sm:p-0">
      <div className='flex justify-center'>
            <Logo />
      </div>

      {/* <div className='testingMUI items-center my-8 py-4 bg-orange-200/50 rounded-lg w-full'>
        <div className='flex justify-center mx-4'>
        <StyledContainer />
        </div>
        <div className='flex justify-center mx-4 '>
        <StyledBox />
        </div>
        <div className='flex justify-center mx-4 '>
        <StyledMenu />
        </div>
        <div className='flex justify-center mx-4 '>
        <Carousel />
        </div>

      </div> */}
      <div className='mx-auto mb-4 p-4 w-3/4 fade-in max-sm:w-11/12 max-sm:px-0'>
        <form className="flex flex-col gap-4 px-12 py-8 rounded-2xl border bg-primary-yellow/70 max-sm:rounded-none max-sm:px-4">
            <div className="text-center m-auto">
              <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
              <p className='text-lg text-center mb-4'>If you have any questions or concerns, feel free to reach out to us.</p>
            </div>
            <input type="name"  placeholder="Name" required name='name' className="inputField" />
            <input type="email" placeholder="Email" name='email' required className="inputField" />
            <textarea placeholder="Message" className="inputField h-40"></textarea>
            <div className='flex justify-center w-full'>
            <Button 
              variant='contained' 
              color='success'
              type="submit" 
              className="bg-primary m-auto w-2/3 h-10 text-white px-4 py-2 rounded-xl">Send</Button>
            </div>
          </form>
        </div>
        <div className='w-3/4 mx-auto shadow-md max-sm:w-5/6'>
          <ContactUs data={contact} whatsApp={true} />
        </div>
    </div>
  );
};

export default Contact;


const GadgetNestLogo = () => {
  return (
    <svg width="300" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 100">
      <g fill="none" stroke="#FF6F61" strokeWidth="2">
        <path d="M100,20 Q60,60 100,100 Q140,60 100,20" />
        <path d="M100,20 Q80,40 100,60 Q120,40 100,20" />
        <path d="M100,60 Q70,90 100,120 Q130,90 100,60" transform="translate(0, -40)" />
        <path d="M100,60 Q90,70 100,80 Q110,70 100,60" transform="translate(0, -40)" />
        <path d="M100,100 Q130,140 100,180 Q70,140 100,100" transform="translate(0, -60)" />
      </g>
      <text 
        x="150" 
        y="65" 
        fontFamily="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" 
        fontWeight="bold" 
        fill="#FF6F61" 
        fontSize="24">
        GadgetNest
      </text>
    </svg>
  );
};