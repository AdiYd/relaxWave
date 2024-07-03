import React from 'react';

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Welcome to RelaxWave</h1>
      <p>RelaxWave is your ultimate destination for high-quality electronic massagers designed to bring comfort and relaxation to your life. Our products are engineered with the latest technology to ensure the best performance and user experience.</p>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Why Choose Us?</h2>
        <ul className="list-disc ml-5">
          <li>High-quality, durable products</li>
          <li>Affordable prices</li>
          <li>Fast shipping</li>
          <li>Excellent customer service</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Stay Updated</h2>
        <form className="flex flex-col">
          <input type="text" placeholder="Name" className="border p-2 rounded mb-2" />
          <input type="email" placeholder="Email" className="border p-2 rounded mb-2" />
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Update me with new products
          </label>
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded mt-2">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
