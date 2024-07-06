import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../assets/json/productData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from '../components/MUI';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="">
        {homeContent(navigate)}
    </div>
  );
};

export default Home;



const homeContent = (navigate)=><div className="pageContainer max-sm:px-0">
<header className="text-center mb-8 mt-4 fade-in">
  <h1  className="title border bg-primary-white ">RelaxWave - LifeStyle</h1>
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
    {products.map((item, index)=>(
      item.id <31 && <ProductCard  
        key={index}
        buttonText='View Item'
        showPrice = {false} 
        onBtnClick={()=>{navigate(`products/${item.title}`)}}
        imageClass='w-5/6 max-h-56 mx-auto rounded-full shadow-md object-cover'
        showProductCount={false} 
        isSale={true} showDiscount={item.id === 20} product={item} />
    ))}
  </div>
</section>

<section className="mb-12 max-sm:px-8">
      <h2 className="text-2xl font-bold text-primary text-center mb-4">Special discounts offers</h2>
      <div className="flex items-center my-8 justify-around flex-wrap gap-4">
      <div className='w-2/3 mx-auto max-sm:w-full'>
        <Carousel  >
        <div className='flex justify-center'>
        <ProductCard
          buttonText='View Item'
          showPrice = {false} 
          onBtnClick={()=>{navigate(`products/${products[9].title}`)}}
          imageClass='w-5/6 max-h-56 mx-auto rounded-full shadow-md object-cover' 
          showProductCount={false} showDiscount={true}
          product={products[9]} />
          </div>
        <div className='flex justify-center'>
          <ProductCard
          buttonText='View Item' 
          showPrice = {false}         
          onBtnClick={()=>{navigate(`products/${products[7].title}`)}}
          imageClass='w-5/6 max-h-56 mx-auto rounded-full shadow-md object-cover'  
          showProductCount={false} 
          showDiscount={true}
          product={products[7]} />
          </div>
        </Carousel>
        </div>
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

<section className="bg-primary/90 text-primary-white p-6 text-center border rounded-2xl w-4/5 mx-auto max-sm:w-full max-sm:px-4">
  <div className="flex items-center justify-center gap-8 mb-8 max-sm:gap-4 max-sm:flex-col">
      <FontAwesomeIcon icon={faGift} size='xl' color='#17332A' />
     <h2 className="text-xl">Subscribe for Sales and Promotions</h2>
  </div>
  <form className="flex flex-col md:items-center md:space-x-4 max-sm:flex-col">
    <div className="flex items-center justify-around w-full max-sm:flex-col">
        <input type="name" required placeholder="Name" className=" focus-visible:outline-primary-orange text-center inputField my-2 w-2/5 max-sm:w-4/5 max-sm:mx-auto" />
        <input type="email" required placeholder="Email" className=" focus-visible:outline-primary-orange text-center inputField my-2 w-2/5 max-sm:w-4/5 max-sm:mx-auto" />
        <button className="cool-button text-sm h-min p-2 max-sm:w-4/5 max-sm:m-auto">Subscribe</button>
    </div>
    <label className="flex justify-center my-4 items-center">
      <input type="checkbox" defaultChecked className="mr-2" />
      Update me with new products
    </label>
  </form>
</section>
</div>


