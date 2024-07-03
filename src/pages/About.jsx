import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLightbulb, faGlobe, faSpa, faBed, faBrain, faLeaf, faStar, faSmile, faHeadset, faRecycle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="pageContainer max-sm:px-1">
      <div className="text-center mb-8 mt-4 fade-in">
        <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg text-center mb-12">
          Welcome to RelaxWave, where tranquility meets technology. Our journey began with a simple mission: to enhance the well-being of individuals through innovative relaxation solutions. Today, we proudly stand as a global leader in providing top-notch relaxation products that have transformed lives around the world.
        </p>
      </div>
      <div className="text-start">
        <section className="mb-12">
          <div className="flex gap-4">
          {/* <Logo /> */}
            <h2 className="sectionTitle">Our Story</h2>
          </div>
          <p className="text-lg text-start">
            From our humble beginnings, RelaxWave has been driven by a passion for creating a peaceful world. Our founder, inspired by personal experiences with stress and anxiety, envisioned a brand that could offer relief and rejuvenation to people everywhere. We started our journey in a small garage, fueled by a dream to help communities across the globe find inner peace with our products.
          </p>
          <p className="text-lg text-start">
            With a dedicated team of experts in wellness and technology, we embarked on a journey to design products that merge the latest advancements with ancient relaxation techniques. Always on the lookout for innovative electronic gadgets, we strive to improve our clients' indoor living experience, making their homes sanctuaries of calm and tranquility.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="sectionTitle">Our Agenda</h2>
          <p className="text-lg text-start mb-6">
            At RelaxWave, we believe in the power of relaxation to improve lives. Our agenda is simple yet profound:
          </p>
          <ul className="list-disc list-inside text-lg mx-12 max-w-screen-md">
            <li className="flex items-start mb-4 max-sm:flex-col">
              <FontAwesomeIcon icon={faHeart} className=" mr-2 mt-1" />
              <span className="font-semibold text-primary-dark">Enhance Well-being:</span>
              <span className="ml-2">We strive to provide tools that help our clients find peace and tranquility in their daily lives.</span>
            </li>
            <li className="flex items-start mb-4 max-sm:flex-col">
              <FontAwesomeIcon icon={faLightbulb} className=" mr-2 mt-1" />
              <span className="font-semibold text-primary-dark">Innovate Continuously:</span>
              <span className="ml-2">We are committed to staying at the forefront of technology, ensuring our products are not only effective but also cutting-edge.</span>
            </li>
            <li className="flex items-start mb-4 max-sm:flex-col">
              <FontAwesomeIcon icon={faGlobe} className=" mr-2 mt-1" />
              <span className="font-semibold text-primary-dark">Global Reach:</span>
              <span className="ml-2">Our products are designed to cater to diverse needs and are accessible to people worldwide.</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="sectionTitle">Transforming Lives Globally</h2>
          <p className="text-lg text-start mb-6">
            RelaxWave has touched the lives of countless individuals across the globe. Our products are crafted to deliver unparalleled relaxation, promoting mental clarity, reduced stress, and overall well-being. Here’s how we’ve made a difference:
          </p>
          <ul className="list-disc list-inside text-lg mx-12 max-w-screen-md">
            <li className="flex items-start mb-4 max-sm:flex-col">
              <FontAwesomeIcon icon={faSpa} className=" mr-2 mt-1" />
              <span className="font-semibold text-primary-dark">Stress Reduction:</span>
              <span className="ml-2">Our innovative relaxation devices help alleviate stress, allowing users to unwind and recharge.</span>
            </li>
            <li className="flex items-start mb-4 max-sm:flex-col">
              <FontAwesomeIcon icon={faBed} className="mr-2 mt-1" />
              <span className="font-semibold text-primary-dark">Improved Sleep:</span>
              <span className="ml-2">Many of our clients have reported better sleep quality, thanks to our soothing products.</span>
            </li>
            <li className="flex items-start mb-4 max-sm:flex-col">
              <FontAwesomeIcon icon={faBrain} className="mr-2 mt-1" />
              <span className="font-semibold text-primary-dark">Enhanced Focus:</span>
              <span className="ml-2">By promoting relaxation, our products help improve concentration and productivity.</span>
            </li>
            <li className="flex items-start mb-4 max-sm:flex-col">
              <FontAwesomeIcon icon={faLeaf} className=" mr-2 mt-1" />
              <span className="font-semibold text-primary-dark">Holistic Wellness:</span>
              <span className="ml-2">We offer a range of solutions that cater to both physical and mental well-being, ensuring a comprehensive approach to relaxation.</span>
            </li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="sectionTitle">Environmental Responsibility</h2>
          <p className="text-lg text-start mb-6">
            At RelaxWave, we take our responsibility to the environment seriously. We are committed to minimizing the use of non-recyclable materials in our products and packaging. Our manufacturing processes are designed to reduce waste and promote sustainability.
          </p>
          <p className="text-lg text-start">
            We worship the earth and seek to make it a better place to live in. By choosing eco-friendly materials and sustainable practices, we aim to reduce our carbon footprint and inspire others to do the same. Join us in our mission to protect the planet for future generations.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="sectionTitle">Why Choose RelaxWave?</h2>
          <ul className="list-disc list-inside text-lg mx-12 max-w-screen-md">
            <li className="flex items-start mb-4 max-sm:flex-col">
              <FontAwesomeIcon icon={faStar} className="mr-2 mt-1" />
              <span className="font-semibold text-primary-dark">Top-Quality Products:</span>
              <span className="ml-2">Each product is meticulously designed and tested to meet the highest standards of quality and effectiveness.</span>
            </li>
            <li className="flex items-start mb-4 max-sm:flex-col">
              <FontAwesomeIcon icon={faSmile} className=" mr-2 mt-1" />
              <span className="font-semibold text-primary-dark">Customer Satisfaction:</span>
              <span className="ml-2">Our commitment to customer satisfaction is unwavering, and we go the extra mile to ensure our clients are happy.</span>
            </li>
            <li className="flex items-start mb-4 max-sm:flex-col">
              <FontAwesomeIcon icon={faRecycle} className=" mr-2 mt-1" />
              <span className="font-semibold text-primary-dark">Sustainable Practices:</span>
              <span className="ml-2">We are dedicated to sustainability, ensuring our products and processes are environmentally friendly.</span>
            </li>
          </ul>
        </section>

        <section className="bg-neutral/60 p-6 sha text-center rounded-lg w-2/3 mx-auto max-sm:w-full max-sm:bg-purple-300/30">
            <h3 className="text-2xl font-semibold text-primary mb-4">Contact Us</h3>
            <p className="text-lg mb-2">Address: 123 Serenity Lane, Calm City, Tranquility State, 56789</p>
            <p className="text-lg mb-6">Phone: (123) 456-7890</p>
            <Link to="/contact" className="text-blue-600 underline text-lg">Contact Us</Link>
        </section>

      </div>
    </div>
  );
}

export default About;