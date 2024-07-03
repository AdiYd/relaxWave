import React from 'react';
import { Link } from 'react-router-dom';
import '../style/about.css';
import MoodIcon from '@mui/icons-material/Mood';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SpaIcon from '@mui/icons-material/Spa';

const About = () => {
  return (
    <div className="pageContainer">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-lg text-center mb-12">
          Welcome to RelaxWave, where tranquility meets technology. Our journey began with a simple mission: to enhance the well-being of individuals through innovative relaxation solutions. Today, we proudly stand as a global leader in providing top-notch relaxation products that have transformed lives around the world.
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Our Story</h2>
          <p className="text-lg text-center">
            From our humble beginnings, RelaxWave has been driven by a passion for creating a peaceful world. Our founder, inspired by personal experiences with stress and anxiety, envisioned a brand that could offer relief and rejuvenation to people everywhere. With a dedicated team of experts in wellness and technology, we embarked on a journey to design products that merge the latest advancements with ancient relaxation techniques.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Our Agenda</h2>
          <p className="text-lg text-center mb-6">
            At RelaxWave, we believe in the power of relaxation to improve lives. Our agenda is simple yet profound:
          </p>
          <ul className="list-disc list-inside text-lg mx-auto max-w-screen-md">
            <li><span className="font-semibold">Enhance Well-being:</span> We strive to provide tools that help our clients find peace and tranquility in their daily lives.</li>
            <li><span className="font-semibold">Innovate Continuously:</span> We are committed to staying at the forefront of technology, ensuring our products are not only effective but also cutting-edge.</li>
            <li><span className="font-semibold">Global Reach:</span> Our products are designed to cater to diverse needs and are accessible to people worldwide.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Transforming Lives Globally</h2>
          <p className="text-lg text-center mb-6">
            RelaxWave has touched the lives of countless individuals across the globe. Our products are crafted to deliver unparalleled relaxation, promoting mental clarity, reduced stress, and overall well-being. Here’s how we’ve made a difference:
          </p>
          <ul className="list-disc list-inside text-lg mx-auto max-w-screen-md">
            <li><span className="font-semibold">Stress Reduction:</span> Our innovative relaxation devices help alleviate stress, allowing users to unwind and recharge.</li>
            <li><span className="font-semibold">Improved Sleep:</span> Many of our clients have reported better sleep quality, thanks to our soothing products.</li>
            <li><span className="font-semibold">Enhanced Focus:</span> By promoting relaxation, our products help improve concentration and productivity.</li>
            <li><span className="font-semibold">Holistic Wellness:</span> We offer a range of solutions that cater to both physical and mental well-being, ensuring a comprehensive approach to relaxation.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Why Choose RelaxWave?</h2>
          <ul className="list-disc list-inside text-lg mx-auto max-w-screen-md">
            <li><span className="font-semibold">Top-Quality Products:</span> Each product is meticulously designed and tested to meet the highest standards of quality and effectiveness.</li>
            <li><span className="font-semibold">Customer Satisfaction:</span> Our commitment to customer satisfaction is unwavering, and we go the extra mile to ensure our clients are happy.</li>
            <li><span className="font-semibold">Expert Support:</span> Our team of wellness experts is always available to guide and support you on your relaxation journey.</li>
            <li><span className="font-semibold">Sustainable Practices:</span> We are dedicated to sustainability, ensuring our products and processes are environmentally friendly.</li>
          </ul>
        </section>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <p className="text-lg mb-2">Address: 123 Serenity Lane, Calm City, Tranquility State, 56789</p>
          <p className="text-lg mb-6">Phone: (123) 456-7890</p>
          <Link to="/contact" className="text-blue-600 underline text-lg">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}



const About2 = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-primary">About RelaxWave</h1>
      <p className="mt-4">
        Welcome to RelaxWave, your ultimate destination for high-quality electronic massagers designed to bring comfort and relaxation into your life. Our journey began with a simple mission: to help people around the world find moments of peace and relief from the daily stresses of life.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mt-6">Our Origins</h2>
      <p className="mt-2">
        RelaxWave was founded by a team of health and wellness enthusiasts who recognized the growing need for accessible and effective relaxation solutions. Drawing from both modern technology and traditional massage techniques, we developed a range of massagers that cater to the diverse needs of our customers.
      </p>
      <h2 className="text-2xl font-bold text-gray-800 mt-6">Benefits of Using RelaxWave Massagers</h2>
      <ul className="list-disc ml-5 mt-2 space-y-2">
        <li>
          <MoodIcon className="text-primary mr-2" />
          <span className="font-semibold">Mental Health:</span> Using our massagers helps reduce stress and anxiety, promoting a sense of calm and well-being.
        </li>
        <li>
          <FavoriteIcon className="text-primary mr-2" />
          <span className="font-semibold">Physical Health:</span> Regular massage can relieve muscle tension, improve circulation, and reduce pain and soreness.
        </li>
        <li>
          <SpaIcon className="text-primary mr-2" />
          <span className="font-semibold">Holistic Wellness:</span> Our massagers provide a comprehensive approach to health by combining physical relief with mental relaxation.
        </li>
      </ul>
      <h2 className="text-2xl font-bold text-gray-800 mt-6">Why Choose RelaxWave?</h2>
      <ul className="list-disc ml-5 mt-2 space-y-2">
        <li>High-quality, durable products</li>
        <li>Affordable prices</li>
        <li>Fast shipping</li>
        <li>Excellent customer service</li>
      </ul>
      <div className="mt-8">
        <Link to="/products" className="text-primary underline">Explore our products</Link>
      </div>
    </div>
  );
};

export default About;
