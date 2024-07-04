import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faLightbulb, faGlobe, faSpa, faBed, faBrain, faLeaf, faStar, faSmile, faRecycle } from '@fortawesome/free-solid-svg-icons';
import aboutContent from '../assets/json/About.json';


const AboutSection = ({ section }) => {
  const iconMap = {
    faHeart,
    faLightbulb,
    faGlobe,
    faSpa,
    faBed,
    faBrain,
    faLeaf,
    faStar,
    faSmile,
    faRecycle
  };
  return (
    <section className="mb-12">
      <h2 className="sectionTitle">{section.title}</h2>
      {section.description && <p className="text-lg text-start mb-6">{section.description}</p>}
      {section.items && (
        <ul className="list-disc list-inside text-lg mx-12 max-sm:mx-4 max-w-screen-md">
          {section.items.map((item, index) => (
            <li key={index} className="flex items-start mb-4 max-sm:flex-col">
              <div className='flex gap-4'>
                <FontAwesomeIcon 
                color = {item.color}
                icon={iconMap[item.icon]} 
                className="mr-2 mt-1" />
                <span className="font-semibold text-primary-dark">{item.title}:</span>
              </div>
              <span className="ml-2">{item.text}</span>
            </li>
          ))}
        </ul>
      )}
      {section.additionalText && <p className="text-lg text-start">{section.additionalText}</p>}
    </section>
  );
};


const About = () => {
  return (
    <div className="pageContainer max-sm:px-4">
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

        <div>
          {aboutContent.map((section, index) => (
            <AboutSection key={index} section={section} />
          ))}
      </div>

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