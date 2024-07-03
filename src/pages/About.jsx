import React from 'react';
import { Link } from 'react-router-dom';
import MoodIcon from '@mui/icons-material/Mood';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SpaIcon from '@mui/icons-material/Spa';

const About = () => {
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
