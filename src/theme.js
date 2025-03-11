import { theme } from 'antd';

export const themeConfig = {
  token: {
    colorPrimary: '#17332A',
    colorSecondary: '#C97B5B',
    colorAccent: '#EEB85D',
    fontFamily: 'Heebo, Roboto, Arial, sans-serif',
    borderRadius: 8,
    colorBgContainer: '#FEF8E9',
    colorText: '#17332A',
    colorTextSecondary: '#C97B5B',
  },
  components: {
    Button: {
      borderRadius: 8,
      paddingInline: 16,
      paddingBlock: 8,
    },
    Card: {
      borderRadius: 12,
    },
  },
};

export default themeConfig;


