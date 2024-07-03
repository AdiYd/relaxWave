import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div className="pageContainer max-sm:p-0">
    <div className='flex justify-center'>
          <Logo />
    </div>
      <div className='mx-auto mb-4 p-4 w-2/3 fade-in max-sm:mx-0 max-sm:w-full max-sm:px-0'>
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
        <section className="bg-neutral/60 p-6 font-bold shadow-md m-3 text-center rounded-lg w-2/3 mx-auto max-sm:w-full max-sm:mx-0 max-sm:px-4 max-sm:bg-purple-300/30">

            <p className="text-lg mb-2">Address: 123 Serenity Lane, Calm City, Tranquility State, 56789</p>
            <p className="text-lg mb-6">Phone: (123) 456-7890</p>
            <Link className='m-0 p-0' to={' '} ><p className="text-lg mb-6">Whatsapp: (123) 456-7890</p>
            <FontAwesomeIcon icon={faWhatsapp} className='text-green-500' />
            </Link>
            
        </section>
      </div>
    </div>
  );
};

export default Contact;
