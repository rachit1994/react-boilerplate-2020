import ApolloClient from 'apollo-boost';
import { getUserFromCookies } from 'utils/user';

const cookieObj = getUserFromCookies() || {
    jwt: '',
};
console.log('coming in cookies', cookieObj);
export const apolloClient = new ApolloClient({
    uri: 'https://graphql2.aasaanjobs.net/',
    headers: {
        Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3R5cGUiOiJQQSIsImVudGl0eV9pZCI6IjMzNDYiLCJuYW1lIjoiUmFjaGl0IFNyaXZhc3RhdmEiLCJpZCI6IjEwMzBiZWQyLWE0MzItNDg4My1iZjJlLWIzMjRiOGRjMWE1YiJ9.cQrWzXKuhnnDa7sl0PDcaCTyGvXivmSQABQt4sLVMC4',
        'x-aj-platform': 1,
    },
});

export default apolloClient;
