import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../assets/json/products.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Header';

const Home = () => {

  console.log(process.env.PUBLIC_URL);
  return (
    <div className="">
        {homeContent}
    </div>
  );
};

export default Home;



const homeContent =<div className="pageContainer max-sm:px-0">
<header className="text-center mb-8 mt-4 fade-in">
  <h1 style={{fontFamily: '"Poppins", sans-serif'}} className="text-3xl font-bold text-gradient-linear ">RelaxWave - LifeStyle</h1>
  <h2 className="mt-4 text-xl">Your gateway to ultimate relaxation and rejuvenation</h2>
</header>

<section className="mb-12 max-sm:px-8">
  <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
  <p className="text-lg text-neutral-dark">
    At RelaxWave, we are dedicated to enhancing your well-being through innovative relaxation products that blend modern technology with timeless relaxation techniques. Our mission is to help you find tranquility and relief from the stresses of everyday life.
  </p>
</section>

<section className="mb-12 max-sm:px-8">
  <h2 className="text-2xl font-bold text-primary mb-4">Featured Products</h2>
  <div className="flex flex-wrap justify-around justify-items-center gap-4">
    {Object.values(products).map((item, index)=>(
      index <3 && <ProductCard  key={index}
        imageClass='w-5/6 max-h-56 mx-auto rounded-full shadow-md object-cover'
        showProductCount={false} 
        isSale={true} discountPrecent={index===1 ? 10: undefined} product={item} />
    ))}
  </div>
  <div className="flex items-center my-8 justify-around flex-wrap gap-4">
  <ProductCard imageClass='w-5/6 max-h-56 mx-auto rounded-full shadow-md object-cover' 
    showProductCount={false} discountPrecent={15}
    product={Object.values(products)[9]} />
    <ProductCard imageClass='w-5/6 max-h-56 mx-auto rounded-full shadow-md object-cover'  
    showProductCount={false} 
    product={Object.values(products)[7]} />
  </div>
</section>

<section className="mb-12 max-sm:px-4">
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

<section className="bg-blue-300/90 p-6 text-center border rounded-2xl w-4/5 mx-auto max-sm:w-full max-sm:px-4">
  <div className="flex items-center justify-center gap-8 mb-8 max-sm:gap-4 max-sm:flex-col">
      <FontAwesomeIcon icon={faGift} size='xl' color='#17332A' />
     <h2 className="text-xl">Subscribe for Sales and Promotions</h2>
  </div>
  <form className="flex flex-col md:items-center md:space-x-4 max-sm:flex-col">
    <div className="flex items-center justify-around w-full max-sm:flex-col">
        <input type="name" required placeholder="Name" className=" text-center inputField my-2 w-2/5 max-sm:w-4/5 max-sm:mx-auto" />
        <input type="email" required placeholder="Email" className=" text-center inputField my-2 w-2/5 max-sm:w-4/5 max-sm:mx-auto" />
        <button className="cool-button text-sm h-min p-2 max-sm:w-4/5 max-sm:m-auto">Subscribe</button>
    </div>
    <label className="flex justify-center my-4 items-center">
      <input type="checkbox" defaultChecked className="mr-2" />
      Update me with new products
    </label>
  </form>
</section>
</div>


