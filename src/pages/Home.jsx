import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../assets/json/products.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="">
        {homeContent}
    </div>
  );
};

export default Home;



const homeContent =<div className="pageContainer">
<header className="text-center mb-8 mt-4 fade-in">
  <h1 className="text-3xl font-bold ">Welcome to RelaxWave</h1>
  <h2 className="mt-4 text-xl">Your gateway to ultimate relaxation and rejuvenation</h2>
</header>

<section className="mb-12">
  <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
  <p className="text-lg text-neutral-dark">
    At RelaxWave, we are dedicated to enhancing your well-being through innovative relaxation products that blend modern technology with timeless relaxation techniques. Our mission is to help you find tranquility and relief from the stresses of everyday life.
  </p>
</section>

<section className="mb-12">
  <h2 className="text-2xl font-bold text-primary mb-4">Featured Products</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Object.values(products).map((item, index)=>(
      index <3 && <ProductCard  key={index}
        imageClass='w-3/4 max-h-72 mx-auto rounded-full shadow-md object-cover'
        showProductCount={false} imageHeight={'15em'} cardHeight = {'30em'}
        isSale={true} discountPrecent={index===1 ? 10: undefined} product={item} />
    ))}
  </div>
  <div className="flex my-8 justify-around">
  <ProductCard imageClass='w-3/4 max-h-72 mx-auto rounded-full shadow-md object-cover' 
    showProductCount={false} discountPrecent={15} imageHeight={'15em'} cardHeight = {'30em'}
    product={Object.values(products)[9]} />
    <ProductCard imageClass='w-3/4 max-h-72 mx-auto rounded-full shadow-md object-cover'  
    showProductCount={false} imageHeight={'15em'} cardHeight = {'30em'}
    product={Object.values(products)[6]} />
  </div>
</section>

<section className="mb-12">
  <h2 className="sectionTitle">Customer Testimonials</h2>
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

<section className="bg-neutral/60 p-6 text-center border rounded-lg w-2/3 mx-auto">
  <div className="flex items-center justify-center gap-8 mb-8">
      <FontAwesomeIcon icon={faGift} />
     <h2 className="text-xl">Subscribe for Sales and Promotions</h2>
  </div>
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


const getRandomItemFromObject = (obj)=> {
  // Convert object values to an array
  const values = Object.values(obj);

  // Get a random index from the array
  const randomIndex = Math.floor(Math.random() * values.length);

  // Return the random item
  return values[randomIndex];
}