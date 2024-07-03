import React from 'react';

const Contact = () => {
  return (
    <div className="p-4 w-2/3 m-auto">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>If you have any questions or concerns, feel free to reach out to us.</p>
      <form className="flex flex-col mt-4">
        <input type="name"  placeholder="Name" required name='name' className="inputField" />
        <input type="email" placeholder="Email" name='email' required className="inputField" />
        <textarea placeholder="Message" className="inputField"></textarea>
        <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
};

export default Contact;
