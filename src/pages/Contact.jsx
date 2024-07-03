import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="pageContainer">
      <div className="text-center mb-8 mt-4 fade-in">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>
        <p className='text-lg text-center mb-12'>If you have any questions or concerns, feel free to reach out to us.</p>
      </div>
        <div className='mx-auto my-8 p8 w-2/3'>
        <form className="flex flex-col mt-4">
          <input type="name"  placeholder="Name" required name='name' className="inputField" />
          <input type="email" placeholder="Email" name='email' required className="inputField" />
          <textarea placeholder="Message" className="inputField"></textarea>
          <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded">Send</button>
        </form>
        <section className="bg-neutral/60 p-6  font-bold shadow-md m-3 text-center rounded-lg w-2/3 mx-auto">

            <p className="text-lg mb-2">Address: 123 Serenity Lane, Calm City, Tranquility State, 56789</p>
            <p className="text-lg mb-6">Phone: (123) 456-7890</p>
            <Link className='m-0 p-0' to={' '} ><p className="text-lg mb-6">Whatsapp: (123) 456-7890</p></Link>
            
        </section>
      </div>
    </div>
  );
};

export default Contact;
