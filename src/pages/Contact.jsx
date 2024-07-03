import React from 'react';

const Contact = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p>If you have any questions or concerns, feel free to reach out to us.</p>
      <form className="flex flex-col mt-4">
        <input type="text" placeholder="Name" className="border p-2 rounded mb-2" />
        <input type="email" placeholder="Email" className="border p-2 rounded mb-2" />
        <textarea placeholder="Message" className="border p-2 rounded mb-2"></textarea>
        <button type="submit" className="bg-pink-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>
  );
};

export default Contact;
