import React, { useState } from 'react';
import { Form, Input, Checkbox, Button, Typography, AutoComplete, Space } from 'antd';

const { Title } = Typography;

const citiesInIsrael = [
        "ירושלים",
        "תל אביב - יפו",
        "חיפה",
        "ראשון לציון",
        "פתח תקווה",
        "אשדוד",
        "נתניה",
        "באר שבע",
        "חולון",
        "בני ברק",
        "רמת גן",
        "בת ים",
        "רחובות",
        "הרצליה",
        "כפר סבא",
        "מודיעין-מכבים-רעות",
        "נצרת",
        "חדרה",
        "עכו (עכו)",
        "רעננה",
        "רמלה",
        "לוד",
        "אשקלון",
        "קרית גת",
        "קרית מוצקין",
        "אילת",
        "נהריה",
        "בית שמש",
        "קרית אתא",
        "גבעתיים",
        "טבריה",
        "קריית ים",
        "רמת השרון",
        "נשר",
        "דימונה",
        "קריית ביאליק",
        "טירת כרמל",
        "הוד השרון",
        "ראש העין",
        "יבנה",
        "אור יהודה",
        "עפולה",
        "מגדל העמק",
        "מודיעין עילית",
        "שדרות",
        "נתיבות",
        "אילבון",
        "טירה",
        "סח'נין",
        "קרית שמונה",
        "צפת (צפת)",
        "בית שאן",
        "מעלות-תרשיחא",
        "גבעת שמואל",
        "קרית ים",
        "קרית מלאכי",
        "קרית שמונה",
        "נס ציונה",
        "מגדל העמק",
        "רהט",
        "טמרה",
        "כפר קאסם",
        "קלנסווה",
        "אום אל-פחם",
        "כפר כנא",
        "בנימינה-גבעת עדה",
        "זכרון יעקב",
        "מעלה אדומים",
        "ביתר עילית",
        "מבשרת ציון",
        "אפרת",
        "ביתר עילית",
        "אריאל",
        "מודיעין עילית",
        "כפר יונה",
        "אבן יהודה",
        "שוהם",
        "גבעתיים",
        "הוד השרון",
        "רמת גן",
        "באקה אל-גרבייה",
        "כפר מנדא",
        "טייבה",
        "דאלית אל-כרמל",
        "צפת",
        "כרמיאל",
        "עין מאהל",
        "מעג'ר",
        "יוקנעם עילית",
        "שפרעם",
        "כפר קרע",
        "כפר קאנא",
        "כפר סבא",
        "נווה ים",
        "ג'לג'וליה",
        "בית ג'ן",
        "קצרין",
        "אום אל-פחם",
        "קלקיליה",
        "טירה",
        "עראבה",
        "קרית מלאכי",
        "קריית שמונה",
        "עזה (עזה)",
        "קריית ביאליק",
        "מג'ד אל-כרום",
        "בצרה",
        "מסעדה",
        "טובא זנגריה",
        "סאג'ור",
        "פקיעין (בוקייעה)",
        "צופית",
        "ג'ת",
        "ג'וריש",
        "מזרעה",
        "כפר עזה",
        "קיבוץ דגניה",
        "נופית",
        "עין חוד",
        "אל-בירה",
        "א-סוויט",
        "מנשייה זבדה",
        "קריית טבעון",
        "סלמה",
        "ג'לג'וליה",
        "רמת ישי",
        "אבו ג'ווייעד (הכפר הבדואי)",
        "עזר",
        "עמיקם",
        "אלעזי",
        "קטורה",
        "אל עומר",
        "טראבלוס",
        "בצרה",
        "עבדה",
        "שקפ",
        "נווה זוהר",
        "רמות",
        "כוכב השחר",
        "כוכב יאיר",
        'כפר בילו',
        "בית העמק",
        "אור עקיבא",
        "גליל ים",
        "אבו קרינאת (הכפר הבדואי)",
        "בית ינאי",
        "בית עריף",
        "אור יהודה",
        "גאליה",
        "יפיע",
        "עין דור",
        "מעין צבי",
        "אכסאל",
        'כפר חב"ד'
    
];


const phonePrefixes = ["052", "054", "050", "053", "055"];

const AddressForm = () => {
  const [form] = Form.useForm();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    country: 'ישראל',
    city: 'תל אביב - יפו',
    address: '',
    buildingNumber: '',
    homeNumber: '',
    entrance: '',
    sendInvoice: true,
    receiveNews: true
  });

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={formData}
      onFinish={handleSubmit}
      className="max-w-[600px] mx-auto p-4 rtl"
      style={{
        direction: 'rtl',
        textAlign: 'right',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
      }}
    >
      <Title level={5} style={{ textAlign: 'center', marginBottom: 24 }}>
        פרטי משלוח
      </Title>

      <Form.Item
        label="שם לקוח"
        name="name"
        rules={[{ required: true, message: 'נא להזין שם' }]}
      >
        <Input onChange={(e) => handleInputChange('name', e.target.value)} />
      </Form.Item>

      <Form.Item
        label='דוא"ל'
        name="email"
        rules={[
          { required: true, message: 'נא להזין כתובת דואר אלקטרוני' },
          { type: 'email', message: 'כתובת דואר אלקטרוני לא תקינה' }
        ]}
      >
        <Input 
          dir="ltr" 
          onChange={(e) => handleInputChange('email', e.target.value)} 
        />
      </Form.Item>

      <Form.Item
        label="מספר טלפון"
        name="phoneNumber"
        rules={[{ required: true, message: 'נא להזין מספר טלפון' }]}
      >
        <Input onChange={(e) => handleInputChange('phoneNumber', e.target.value)} />
      </Form.Item>

      <Form.Item
        label="מדינה"
        name="country"
      >
        <Input readOnly />
      </Form.Item>

      <Form.Item
        label="עיר"
        name="city"
        rules={[{ required: true, message: 'נא לבחור עיר' }]}
      >
        <AutoComplete
          options={citiesInIsrael.map(city => ({ value: city }))}
          onChange={(value) => handleInputChange('city', value)}
          filterOption={(inputValue, option) =>
            option.value.toString().indexOf(inputValue) !== -1
          }
        />
      </Form.Item>

      <Form.Item
        label="כתובת"
        name="address"
        rules={[{ required: true, message: 'נא להזין כתובת' }]}
      >
        <Input onChange={(e) => handleInputChange('address', e.target.value)} />
      </Form.Item>

      <Space style={{ width: '100%', justifyContent: 'space-between' }}>
        <Form.Item
          label="מספר בניין"
          name="buildingNumber"
        >
          <Input onChange={(e) => handleInputChange('buildingNumber', e.target.value)} />
        </Form.Item>

        <Form.Item
          label="מספר בית"
          name="homeNumber"
          rules={[{ required: true, message: 'נא להזין מספר בית' }]}
        >
          <Input onChange={(e) => handleInputChange('homeNumber', e.target.value)} />
        </Form.Item>

        <Form.Item
          label="כניסה"
          name="entrance"
        >
          <Input onChange={(e) => handleInputChange('entrance', e.target.value)} />
        </Form.Item>
      </Space>

      <Form.Item
        name="sendInvoice"
        valuePropName="checked"
      >
        <Checkbox onChange={(e) => handleInputChange('sendInvoice', e.target.checked)}>
          קבלת חשבונית במייל
        </Checkbox>
      </Form.Item>

      <Form.Item
        name="receiveNews"
        valuePropName="checked"
      >
        <Checkbox onChange={(e) => handleInputChange('receiveNews', e.target.checked)}>
          אישור קבלת חדשות ומבצעים
        </Checkbox>
      </Form.Item>

      <Form.Item style={{ textAlign: 'center' }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: '66%', marginTop: 16 }}
        >
          שלח
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddressForm;     