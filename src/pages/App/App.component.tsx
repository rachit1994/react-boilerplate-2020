import { ApolloProvider } from '@apollo/react-hooks';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import GlobalStyle from './App.style';
import Routes from './Routes.component';
import { ModalProvider, ModalInterface } from 'utils/context/ModalContext';
import client from 'utils/graphql/client';

const modalValue: ModalInterface = {
    visible: false,
    values: [],
};

const App: FC<{}> = () => (
    <>
        <GlobalStyle />
        <Helmet
          titleTemplate='CTS - %s'
          defaultTitle='CTS'
        >
            <meta name='description' content='CMS for Aasaanjobs' />
        </Helmet>
        <ApolloProvider client={client}>
            <ModalProvider value={modalValue}>
                <Routes />
            </ModalProvider>
        </ApolloProvider>
    </>
);

export default App;
