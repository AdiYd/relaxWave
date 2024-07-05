import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Header';
import contact from '../assets/json/contact.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {StyledContainer, Carousel, StyledBox, StyledMenu } from '../components/MUI';

export const ContactUs = ({data, whatsApp = false})=>(
  <section className="bg-purple-300/30 p-6 text-center rounded-lg w-full mx-auto">
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
        <form className="flex flex-col gap-4 px-12 py-8 rounded-2xl border bg-red-300 max-sm:rounded-none max-sm:px-4">
            <div className="text-center m-auto">
              <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
              <p className='text-lg text-center mb-4'>If you have any questions or concerns, feel free to reach out to us.</p>
            </div>
            <input type="name"  placeholder="Name" required name='name' className="inputField" />
            <input type="email" placeholder="Email" name='email' required className="inputField" />
            <textarea placeholder="Message" className="inputField h-40"></textarea>
            <button type="submit" className="bg-primary m-auto w-2/3 text-white px-4 py-2 rounded-md">Send</button>
          </form>
        </div>
        <div className='w-3/4 mx-auto shadow-md max-sm:w-5/6'>
          <ContactUs data={contact} whatsApp={true} />
        </div>
    </div>
  );
};

export default Contact;
