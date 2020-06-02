import ApolloClient from 'apollo-boost';
import { getUserFromCookies } from 'utils/user';

const cookieObj = getUserFromCookies() || {
    jwt: '',
};
console.log('coming in cookies', cookieObj);
export const apolloClient = new ApolloClient({
    uri: '',
    headers: {
        Authorization: '',
    },
});

export default apolloClient;
