import Cookies from 'js-cookie';

// TODO check if tokens are expired
export default () => !!Cookies.get('connect.sid');
