import Cookies from 'js-cookie';

export default () => !!Cookies.get('connect.sid');
