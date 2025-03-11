import React, { useContext, useState } from 'react';
import { Card, Button, Typography, Select, InputNumber, Space, Carousel } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import useWindowDimensions from '../assets/useWindowDimensions';
import productInfo from '../assets/json/productData.json';
import '../style/item.css';
import Collage from './Collage/Collage';
import { CartContext } from '../context/CartContext';

const { Title, Text } = Typography;
const { Option } = Select;

export const currDict = {
    usd: '$',      // USA
    eur: '€',      // Europe
    thb: '฿',      // Thailand
    cny: '¥',      // China
    nis: '₪'       // Israel
};

const createObjectFromList = (keysList, defaultValue = '', data) => {
    if (!keysList?.length) {
        return {};
    }
    return keysList.reduce((obj, key) => {
        obj[key] = data ? data[key][0] : defaultValue;
        return obj;
    }, {});
};

const Item = ({ productData = productInfo[0], maxQuantity = 10, minQuantity = 1 }) => {
    const [buyingOptions, setBuyingOptions] = useState(createObjectFromList(Object.keys(productData.buyingOptions), '', productData.buyingOptions));
    const { cart, addToCart, removeFromCart } = useContext(CartContext);
    const { width } = useWindowDimensions();
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (value) => {
        if (value >= minQuantity && value <= maxQuantity) {
            setQuantity(value);
        }
    };

    const onClickHandler = () => {
        const customerRequest = {
            image: process.env.PUBLIC_URL + productData.image,
            id: productData.id,
            title: productData.title,
            options: buyingOptions,
            quantity,
            currency: productData.currency,
            pricePerUnit: productData.price,
            total: Number(quantity * productData.price).toFixed(2)
        };
        addToCart(customerRequest);
    };

    return (
        <div id='itemContainer' className="w-full mx-auto rounded-lg p-4 max-sm:px-0 max-sm:border-none">
            <div className="block flex-col md:flex-row">
                {/* Item options menu */}
                <Card className="w-full z-40 p-4 h-fit mx-2 ml-8 float-right md:w-1/3 bg-gray-50 rounded-lg shadow-xl">
                    <Title level={5}>Price: {currDict[productData.currency]}{productData.price}</Title>
                    {productData.discount && (
                        <Text type="secondary">
                            Discount: {Math.floor(100*(1-productData.price/productData.originalPrice))}%
                        </Text>
                    )}
                    
                    {/* Select from product's buying Options */}
                    {Object.keys(productData.buyingOptions).map((item, index) => (
                        <div key={index} className='my-4'>
                            <Text>{`Select ${item}`}</Text>
                            <Select
                                value={buyingOptions[item]}
                                onChange={(value) => setBuyingOptions(prev => ({...prev, [item]: value}))}
                                className="w-full mb-4"
                            >
                                {productData.buyingOptions[item].map((option, idx) => (
                                    <Option key={idx} value={option}>{option}</Option>
                                ))}
                            </Select>
                        </div>
                    ))}

                    <Text>Quantity</Text>
                    <Space.Compact className="flex justify-center items-center mb-4">
                        <Button
                            icon={<MinusOutlined />}
                            onClick={() => handleQuantityChange(quantity - 1)}
                            disabled={quantity <= minQuantity}
                            className={quantity <= minQuantity ? 'opacity-50' : ''}
                        />
                        <InputNumber
                            value={quantity}
                            onChange={(value) => handleQuantityChange(value)}
                            min={minQuantity}
                            max={maxQuantity}
                            className="mx-2 w-20 text-center"
                        />
                        <Button
                            icon={<PlusOutlined />}
                            onClick={() => handleQuantityChange(quantity + 1)}
                            disabled={quantity >= maxQuantity}
                            className={quantity >= maxQuantity ? 'opacity-50' : ''}
                        />
                    </Space.Compact>

                    <Space className="flex gap-4 my-4">
                        <Text>Total Price: </Text>
                        <Text strong>{currDict[productData.currency]}{Number(quantity*productData.price).toFixed(2)}</Text>
                    </Space>

                    <Button
                        type="primary"
                        onClick={onClickHandler}
                        className="w-full"
                    >
                        Add to Cart
                    </Button>
                </Card>

                {/* Item Description and Creative */}
                <div className="w-full p-4 max-sm:py-8">
                    <Title level={3} className="text-primary">{productData.title}</Title>
                    <Text>{productData.description}</Text>
                    <Collage imageList={[process.env.PUBLIC_URL +productData.image,...productData.collageImage]} />
                    
                    {productData.video && (
                        <div className="my-6 py-4 mx-auto max-sm:px0 overflow-hidden w-fit h-fit">
                            <iframe
                                className="rounded-lg shadow-lg"
                                width={2*width/3}
                                height={Math.min(2*width*0.7/3, 400)}
                                src={productData.video}
                                title="Product Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    )}
                    
                    <Text>{productData.descriptionBody}</Text>
                    
                    {productData.carouselImage?.length > 1 ? (
                        <Carousel autoplay>
                            {productData.carouselImage.map((image, index) => (
                                <div key={index} className="flex justify-center">
                                    <img
                                        src={image}
                                        alt={`Product ${index + 1}`}
                                        className="w-2/3 mx-auto rounded-md max-h-96"
                                    />
                                </div>
                            ))}
                        </Carousel>
                    ) : productData.carouselImage?.length === 1 ? (
                        <div className="flex justify-center">
                            <img
                                src={productData.carouselImage[0]}
                                alt="Product"
                                className="max-w-full mx-auto rounded-2xl max-h-96"
                            />
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Item;
