import React, { useState } from 'react';
import { Card, Button, InputNumber, Typography, Badge, Space } from 'antd';
import { MinusOutlined, PlusOutlined, TagOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { currDict } from './Item';

const { Title, Text } = Typography;
const { Meta } = Card;

const SaleIcon = () => (
  <Badge.Ribbon text="Sale!" color="green" className="opacity-80" />
);

const defaultImageClass = "w-full mx-auto max-h-56 shadow rounded-md object-cover";

const ProductCard = ({ 
  productData,
  minQuantity = 1,
  maxQuantity = 10,
  showProductCount = true,
  showDescription = true,
  showOldPrice = true,
  showPrice = true, 
  showButton = true,
  buttonText = 'Add to Cart',
  onBtnClick = (e) => { console.log(e.target?.innerText, ' Clicked!') },
  onClick,
  imageWidth,
  isSale = false,
  showDiscount = false,
  discountText = 'OFF',
  imageClass = defaultImageClass,
  containerClass = '',
  cardHeight 
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    if (value >= minQuantity && value <= maxQuantity) {
      setQuantity(value);
    }
  };

  const onClickHandler = () => {
    let buyingOptions = {};
    for (let category in productData.buyingOptions) {
      buyingOptions[category] = productData.buyingOptions[category][0];
    }
    let customerRequest = {
      image: process.env.PUBLIC_URL + productData.image,
      id: productData.id,
      title: productData.title,
      options: buyingOptions,
      quantity,
      currency: productData.currency,
      pricePerUnit: productData.price,
      total: Number(quantity * productData.price).toFixed(2)
    };
    onBtnClick(customerRequest);
  };

  const cardCover = (
    <div className="w-full block overflow-hidden">
      <img
        onClick={onClick}
        id='cardImg'
        src={process.env.PUBLIC_URL + productData.image}
        style={{
          width: imageWidth ? `${imageWidth}px` : '100%',
          height: imageWidth ? `${0.8 * imageWidth}px` : 'auto'
        }}
        alt={productData.title}
        className={imageClass}
      />
    </div>
  );

  return (
    <Card
      hoverable
      className={`${containerClass}`}
      style={{ height: cardHeight }}
      cover={cardCover}
      onClick={onClick}
    >
      {(productData.discount && showDiscount) && (
        <Badge.Ribbon
          text={`${Math.floor(100 * (1 - productData.price / productData.originalPrice))}% ${discountText}`}
          color="red"
        />
      )}
      
      <Meta
        title={<Title level={4} className="text-primary">{productData.title}</Title>}
        description={showDescription && <Text className="text-gray-500">{productData.description}</Text>}
      />

      {showPrice && (
        <div className="mt-4 flex justify-center items-center">
          {(productData.originalPrice && showOldPrice) && (
            <Text delete type="secondary" className="mr-2">
              ${productData.originalPrice}
            </Text>
          )}
          <Text strong type="danger" className="text-lg">
            {currDict[productData.currency]}{productData.price}
          </Text>
        </div>
      )}

      {(showProductCount && showButton) ? (
        <Space direction="vertical" className="w-full mt-4">
          <Space className="w-full justify-between">
            <Button
              type="primary"
              onClick={onClickHandler}
              className="w-2/3"
            >
              {buttonText}
            </Button>
            <Space.Compact>
              <Button
                icon={<MinusOutlined />}
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= minQuantity}
              />
              <InputNumber
                min={minQuantity}
                max={maxQuantity}
                value={quantity}
                onChange={handleQuantityChange}
                controls={false}
                className="w-16 text-center"
              />
              <Button
                icon={<PlusOutlined />}
                onClick={() => handleQuantityChange(quantity + 1)}
                disabled={quantity >= maxQuantity}
              />
            </Space.Compact>
          </Space>
        </Space>
      ) : (
        showButton && (
          <Button
            type="primary"
            block
            onClick={onClickHandler}
            className="mt-4"
          >
            {buttonText}
          </Button>
        )
      )}
    </Card>
  );
};

export default ProductCard;
