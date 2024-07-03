import React from 'react';
import product1 from '../img/product1.png';
import product2 from '../img/product2.png';

const Home = () => {
  console.log('This is : ', product1);
  return (
    <div className="">
      {/* <div className=' border-y-black border-y my-8'>
        {homeContent2}
      </div> */}
        {homeContent3}
      {/* <div className=' border-y-black border-y my-8'>
        {homeContent4}
      </div> */}
    </div>
  );
};

export default Home;


const homeContent2 =  <div className="p-8 bg-blue-50">
<header className="text-center mb-8">
  <h1 className="text-5xl font-bold text-blue-700">Welcome to RelaxWave</h1>
  <p className="mt-4 text-xl text-blue-600">Your gateway to ultimate relaxation and rejuvenation</p>
</header>

<section className="mb-12">
  <h2 className="text-3xl font-bold text-blue-700 mb-4">Our Mission</h2>
  <p className="text-lg text-gray-700">
    At RelaxWave, we are dedicated to enhancing your well-being through innovative relaxation products that blend modern technology with timeless relaxation techniques. Our mission is to help you find tranquility and relief from the stresses of everyday life.
  </p>
</section>

<section className="mb-12">
  <h2 className="text-3xl font-bold text-blue-700 mb-4">Featured Products</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src="images/massager.jpg" alt="RelaxWave Massager" className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-2xl font-bold text-blue-700 mt-4">RelaxWave Massager</h3>
      <p className="mt-2 text-gray-600">Experience soothing relief with our ergonomic massager, designed to target stress points with precision.</p>
      <p className="mt-2 text-gray-800">
        <span className="line-through">$199.99</span> <span className="font-bold text-red-600">$149.99</span>
      </p>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Add to Cart</button>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src="images/light_projector.jpg" alt="CalmWave Light Projector" className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-2xl font-bold text-blue-700 mt-4">CalmWave Light Projector</h3>
      <p className="mt-2 text-gray-600">
        Create a serene ambiance with our light projector, featuring customizable light patterns that mimic the soothing effect of ocean waves.
      </p>
      <p className="mt-2 text-gray-800">
        <span className="line-through">$99.99</span> <span className="font-bold text-red-600">$79.99</span>
      </p>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Add to Cart</button>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src="images/aroma_diffuser.jpg" alt="WaveAroma Diffuser" className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-2xl font-bold text-blue-700 mt-4">WaveAroma Diffuser</h3>
      <p className="mt-2 text-gray-600">
        Infuse your space with calming scents using our aroma diffuser, designed to promote relaxation and wellness.
      </p>
      <p className="mt-2 text-gray-800">
        <span className="line-through">$59.99</span> <span className="font-bold text-red-600">$49.99</span>
      </p>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Add to Cart</button>
    </div>
  </div>
</section>

<section className="mb-12">
  <h2 className="text-3xl font-bold text-blue-700 mb-4">Customer Testimonials</h2>
  <div className="bg-white p-6 rounded-lg shadow-md">
    <blockquote className="text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4">
      "The RelaxWave Massager has been a lifesaver! I use it daily to relieve tension in my neck and shoulders."
    </blockquote>
    <p className="mt-2 text-right text-gray-600">- Sarah M.</p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md mt-4">
    <blockquote className="text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4">
      "The CalmWave Light Projector has transformed my evenings. It's like bringing the ocean into my living room."
    </blockquote>
    <p className="mt-2 text-right text-gray-600">- John D.</p>
  </div>
</section>

<section className="bg-blue-100 p-6 rounded-lg">
  <h2 className="text-3xl font-bold text-blue-700 mb-4">Subscribe for Updates</h2>
  <form className="flex flex-col md:flex-row md:items-center md:space-x-4">
    <input
      type="email"
      placeholder="Your Email"
      className="flex-grow p-2 rounded-lg border-2 border-blue-300 mb-4 md:mb-0"
    />
    <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">Subscribe</button>
  </form>
</section>
</div>


const homeContent3 =<div className="pageContainer">
<header className="text-center mb-8">
  <h1 className="text-5xl font-bold text-primary">Welcome to RelaxWave</h1>
  <p className="mt-4 text-xl text-primary-light">Your gateway to ultimate relaxation and rejuvenation</p>
</header>

<section className="mb-12">
  <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
  <p className="text-lg text-neutral-dark">
    At RelaxWave, we are dedicated to enhancing your well-being through innovative relaxation products that blend modern technology with timeless relaxation techniques. Our mission is to help you find tranquility and relief from the stresses of everyday life.
  </p>
</section>

<section className="mb-12">
  <h2 className="text-3xl font-bold text-primary mb-4">Featured Products</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="card">
      <img src="../img/product1.png" alt="RelaxWave Massager" className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-2xl font-bold text-primary mt-4">RelaxWave Massager</h3>
      <p className="mt-2 text-neutral-dark">Experience soothing relief with our ergonomic massager, designed to target stress points with precision.</p>
      <p className="mt-2 text-neutral-dark">
        <span className="line-through">$199.99</span> <span className="font-bold text-red-900">$149.99</span>
      </p>
      <button className="btn-primary rounded-lg mt-4 w-1/2 mx-auto">Add to Cart</button>
    </div>
    <div className="card">
      <img src={product1} alt="CalmWave Light Projector" className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-2xl font-bold text-primary mt-4">CalmWave Light Projector</h3>
      <p className="mt-2 text-neutral-dark">
        Create a serene ambiance with our light projector, featuring customizable light patterns that mimic the soothing effect of ocean waves.
      </p>
      <p className="mt-2 text-neutral-dark">
        <span className="line-through">$99.99</span> <span className="font-bold text-red-900">$79.99</span>
      </p>
      <button className="btn-primary rounded-lg mt-4 w-1/2 mx-auto ">Add to Cart</button>
    </div>
    <div className="card">
      <img src={product2} alt="WaveAroma Diffuser" className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-2xl font-bold text-primary mt-4">WaveAroma Diffuser</h3>
      <p className="mt-2 text-neutral-dark">
        Infuse your space with calming scents using our aroma diffuser, designed to promote relaxation and wellness.
      </p>
      <p className="mt-2 text-neutral-dark">
        <span className="line-through">$59.99</span> <span className="font-bold text-red-900">$49.99</span>
      </p>
      <button className="btn-primary rounded-lg mt-4 w-1/2 mx-auto">Add to Cart</button>
    </div>
  </div>
</section>

<section className="mb-12">
  <h2 className="text-3xl font-bold text-primary mb-4">Customer Testimonials</h2>
  <div className="bg-white p-6 rounded-lg shadow-md">
    <blockquote className="text-lg text-neutral-dark italic border-l-4 border-primary pl-4">
      "The RelaxWave Massager has been a lifesaver! I use it daily to relieve tension in my neck and shoulders."
    </blockquote>
    <p className="mt-2 text-right text-neutral-dark">- Sarah M.</p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md mt-4">
    <blockquote className="text-lg text-neutral-dark italic border-l-4 border-primary pl-4">
      "The CalmWave Light Projector has transformed my evenings. It's like bringing the ocean into my living room."
    </blockquote>
    <p className="mt-2 text-right text-neutral-dark">- John D.</p>
  </div>
</section>

<section className="bg-neutral/50 p-6 rounded-lg w-2/3 mx-auto">
  <h2 className="text-3xl font-bold text-primary mb-4">Subscribe for Updates</h2>
  <form className="flex flex-col md:items-center md:space-x-4">
    <div className="flex justify-around w-full">
        <input type="name" required placeholder="Name" className="inputField w-2/5" />
        <input type="email" required placeholder="Email" className="inputField w-2/5" />
        <button className="cool-button text-sm h-min p-2">Subscribe</button>
    </div>
    <label className="flex items-center">
      <input type="checkbox" defaultChecked className="mr-2" />
      Update me with new products
    </label>
  </form>
</section>
</div>

const homeContent4 =<div className="p-8 bg-gray-50">
<header className="text-center mb-8">
  <h1 className="text-5xl font-bold text-blue-800">Welcome to RelaxWave</h1>
  <p className="mt-4 text-xl text-blue-600">Your gateway to ultimate relaxation and rejuvenation</p>
</header>

<section className="mb-12">
  <h2 className="text-3xl font-bold text-blue-800 mb-4">Our Mission</h2>
  <p className="text-lg text-gray-700">
    At RelaxWave, we are dedicated to enhancing your well-being through innovative relaxation products that blend modern technology with timeless relaxation techniques. Our mission is to help you find tranquility and relief from the stresses of everyday life.
  </p>
</section>

<section className="mb-12">
  <h2 className="text-3xl font-bold text-blue-800 mb-4">Featured Products</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="hover-card">
      <img src="images/massager.jpg" alt="RelaxWave Massager" className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-2xl font-bold text-blue-800 mt-4">RelaxWave Massager</h3>
      <p className="mt-2 text-gray-600">Experience soothing relief with our ergonomic massager, designed to target stress points with precision.</p>
      <p className="mt-2 text-gray-800">
        <span className="line-through">$199.99</span> <span className="font-bold text-yellow-600">$149.99</span>
      </p>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Add to Cart</button>
    </div>
    <div className="hover-card">
      <img src="images/light_projector.jpg" alt="CalmWave Light Projector" className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-2xl font-bold text-blue-800 mt-4">CalmWave Light Projector</h3>
      <p className="mt-2 text-gray-600">
        Create a serene ambiance with our light projector, featuring customizable light patterns that mimic the soothing effect of ocean waves.
      </p>
      <p className="mt-2 text-gray-800">
        <span className="line-through">$99.99</span> <span className="font-bold text-yellow-600">$79.99</span>
      </p>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Add to Cart</button>
    </div>
    <div className="hover-card">
      <img src="images/aroma_diffuser.jpg" alt="WaveAroma Diffuser" className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="text-2xl font-bold text-blue-800 mt-4">WaveAroma Diffuser</h3>
      <p className="mt-2 text-gray-600">
        Infuse your space with calming scents using our aroma diffuser, designed to promote relaxation and wellness.
      </p>
      <p className="mt-2 text-gray-800">
        <span className="line-through">$59.99</span> <span className="font-bold text-yellow-600">$49.99</span>
      </p>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Add to Cart</button>
    </div>
  </div>
</section>

<section className="mb-12">
  <h2 className="text-3xl font-bold text-blue-800 mb-4">Customer Testimonials</h2>
  <div className="bg-white p-6 rounded-lg shadow-md">
    <blockquote className="text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4">
      "The RelaxWave Massager has been a lifesaver! I use it daily to relieve tension in my neck and shoulders."
    </blockquote>
    <p className="mt-2 text-right text-gray-600">- Sarah M.</p>
  </div>
  <div className="bg-white p-6 rounded-lg shadow-md mt-4">
    <blockquote className="text-lg text-gray-700 italic border-l-4 border-blue-500 pl-4">
      "The CalmWave Light Projector has transformed my evenings. It's like bringing the ocean into my living room."
    </blockquote>
    <p className="mt-2 text-right text-gray-600">- John D.</p>
  </div>
</section>

<section className="light-gradient">
  <h2 className="text-3xl font-bold text-blue-800 mb-4">Subscribe for Updates</h2>
  <form className="flex flex-col md:flex-row md:items-center md:space-x-4">
    <input
      type="email"
      placeholder="Your Email"
      className="flex-grow p-2 rounded-lg border-2 border-blue-300 mb-4 md:mb-0"
    />
    <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">Subscribe</button>
  </form>
</section>
</div>