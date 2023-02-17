import '../styles/index.css';
import '../styles/bootstrap.min.css';
import '../styles/chunks/1.css';
import '../styles/chunks/2.css';
import '../styles/chunks/3.css';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-regular-svg-icons';
import '@fortawesome/free-solid-svg-icons';
import 'material-design-icons';
// import '../styles/fontawesome/all.css';
// import '../styles/materialdesignicons.css';

import { AppProps } from 'next/app';
import { Web3ReactProvider } from '@web3-react/core';
import Web3ReactManager from '../components/Web3ReactManager';
import dynamic from 'next/dynamic';
import { Provider as ReduxProvider } from 'react-redux';
import getLibrary from '../functions/getLibrary';
import store from '../state';
import ApplicationUpdater from '../state/application/updater';
import TransactionUpdater from '../state/transactions/updater';
import MulticallUpdater from '../state/multicall/updater';
import DefaultLayout from '../layouts/Default';
import { NextComponentType, NextPageContext } from 'next';
import { FunctionComponent, Fragment } from 'react';
import { ThemeProvider } from '@mui/material';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import theme from '../theme/index';
const Web3ProviderNetwork = dynamic(
  () => import('../components/Web3ProviderNetwork'),
  { ssr: false },
);

export default function MyApp({
  Component,
  pageProps,
}: AppProps & {
  Component: NextComponentType<NextPageContext> & {
    Provider: FunctionComponent;
  };
}) {
  // Allows for conditionally setting a provider to be hoisted per page
  const Provider = Component.Provider || Fragment;

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Web3ReactManager>
          <ThemeProvider theme={theme}>
            <ReduxProvider store={store}>
              <Provider>
                <ApplicationUpdater />
                <TransactionUpdater />
                <MulticallUpdater />
                <DefaultLayout>
                  <Component {...pageProps} />
                </DefaultLayout>
              </Provider>
            </ReduxProvider>
          </ThemeProvider>
        </Web3ReactManager>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  );
}
