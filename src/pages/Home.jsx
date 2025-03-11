import React from 'react';
import ProductCard from '../components/ProductCard';
import products from '../assets/json/productData.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSpa, faMoon, faHeart, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { SwiperCarousel } from '../components/Slider/Slider';
import { Layout, Card, Typography, Button, Row, Col } from 'antd';

const { Content } = Layout;
const { Title, Text } = Typography;

const FeatureCard = ({ icon, title, description }) => (
  <Card hoverable className="h-full transform transition-all duration-300 hover:scale-105">
    <div className="flex flex-col items-center text-center gap-4">
      <FontAwesomeIcon icon={icon} className="text-4xl text-primary-orange" />
      <Title level={5} className="font-bold text-primary">
        {title}
      </Title>
      <Text className="text-neutral-dark">
        {description}
      </Text>
    </div>
  </Card>
);

const Home = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: faSpa,
      title: "הרמוניה מושלמת",
      description: "מוצרים שנבחרו בקפידה להביא שלווה ורוגע לחיי היומיום שלכם"
    },
    {
      icon: faMoon,
      title: "שינה איכותית",
      description: "פתרונות מתקדמים לשיפור איכות השינה והרגעה לפני השינה"
    },
    {
      icon: faHeart,
      title: "איזון גוף-נפש",
      description: "מוצרים המשלבים טכנולוגיה מתקדמת עם שיטות הרגעה מסורתיות"
    },
    {
      icon: faLeaf,
      title: "חיים בריאים",
      description: "פתרונות טבעיים ובריאים להפחתת מתח ושיפור איכות החיים"
    }
  ];

  return (
    <Layout className="bg-transparent">
      <Content>
        {/* Hero Section */}
        <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="text-center max-w-4xl mx-auto px-4">
            <Title level={1} className="mb-6 text-primary">
              גלו שלווה בכל רגע
            </Title>
            <Text className="text-lg mb-8 text-neutral-dark">
              מוצרי הרגעה ורוגע איכותיים שיעזרו לכם למצוא את האיזון המושלם בחיי היומיום
            </Text>
            <Button 
              type="primary" 
              size="large"
              onClick={() => navigate('/products')}
              className="bg-secondary hover:bg-secondary/90"
            >
              גלו את המוצרים שלנו
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16 bg-neutral">
          <div className="max-w-7xl mx-auto px-4">
            <Title level={2} className="text-center mb-12 text-primary">
              למה לבחור בנו?
            </Title>
            <Row gutter={[24, 24]}>
              {features.map((feature, index) => (
                <Col key={index} xs={24} sm={12} lg={6}>
                  <FeatureCard {...feature} />
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Featured Products */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <Title level={2} className="text-center mb-12 text-primary">
              המוצרים המובילים שלנו
            </Title>
            <Row gutter={[24, 24]}>
              {products.slice(0, 4).map((product, index) => (
                <Col key={index} xs={24} sm={12} lg={6}>
                  <ProductCard productData={product} />
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 mb-8">
          <Card className="bg-primary/90 text-white max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <FontAwesomeIcon className="text-4xl text-primary-orange mb-4 animate-bounce" icon={faBell} />
              <Title level={3} className="text-white mb-4">
                הצטרפו למועדון ההטבות שלנו
              </Title>
              <Text className="text-white">
                קבלו עדכונים על מבצעים חדשים ומוצרים חדשים
              </Text>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <input
                type="text"
                placeholder="שם"
                className="w-full md:w-1/3 p-3 rounded-lg focus:ring-2 focus:ring-primary-orange"
              />
              <input
                type="email"
                placeholder='דוא"ל'
                className="w-full md:w-1/3 p-3 rounded-lg focus:ring-2 focus:ring-primary-orange"
              />
              <Button
                type="primary"
                size="large"
                className="w-full md:w-auto bg-secondary hover:bg-secondary/90"
              >
                הרשמה
              </Button>
            </div>
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;


