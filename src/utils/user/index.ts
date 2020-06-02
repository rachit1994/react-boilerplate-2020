import * as Cookie from 'js-cookie';
import { get } from 'lodash';

const COOKIE_NAME = 'connect.cts.development.user';

const userCookieText = Cookie.get(COOKIE_NAME);
let cookieJsonString = '';
let cookieObj: any = null;
if (typeof userCookieText !== 'undefined') {
    cookieJsonString = decodeURIComponent(userCookieText);
    cookieObj = JSON.parse(cookieJsonString);
}

export const getUserFromCookies = () => cookieObj;

export const getUserAttributesFromCookies = (attribute: string) => get(cookieObj, attribute, '');
