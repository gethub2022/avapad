import React, { FC, useCallback } from 'react';
import { SUPPORTED_WALLETS, injected } from '../../config/wallets';

import { AppDispatch } from '../../state';
import Button from '../Button';
import Copy from './Copy';
import ExternalLink from '../ExternalLink';
import Image from 'next/image';
import { ExternalLink as LinkIcon } from 'react-feather';
import ModalHeader from '../ModalHeader';
import Transaction from './Transaction';
import Typography from '../Typography';
import { clearAllTransactions } from '../../state/transactions/actions';
import { getExplorerLink } from '../../functions/explorer';
import { shortenAddress } from '../../functions';
import { useActiveWeb3React } from '../../hooks/useActiveWeb3React';
import { useDispatch } from 'react-redux';
import { useWeb3React } from '@web3-react/core';

const WalletIcon: FC<{ size?: number; src: string; alt: string }> = ({
  size,
  src,
  alt,
  children,
}) => {
  return (
    <div className="flex flex-row items-end justify-center mr-2 flex-nowrap md:items-center">
      <Image src={src} alt={alt} width={size} height={size} />
      {children}
    </div>
  );
};

function renderTransactions(transactions: string[]) {
  return (
    <div className="gap-2 d-flex flex-column flex-nowrap">
      {transactions.map((hash, i) => {
        return <Transaction key={i} hash={hash} />;
      })}
    </div>
  );
}

interface AccountDetailsProps {
  toggleWalletModal: () => void;
  pendingTransactions: string[];
  confirmedTransactions: string[];
  ENSName?: string;
  openOptions: () => void;
}

const AccountDetails: FC<AccountDetailsProps> = ({
  toggleWalletModal,
  pendingTransactions,
  confirmedTransactions,
  ENSName,
  openOptions,
}) => {
  const { chainId, account, connector } = useActiveWeb3React();
  const { deactivate } = useWeb3React();
  const dispatch = useDispatch<AppDispatch>();

  function formatConnectorName() {
    const { ethereum } = window;
    const isMetaMask = !!(ethereum && ethereum.isMetaMask);
    const name = Object.keys(SUPPORTED_WALLETS)
      .filter(
        (k) =>
          SUPPORTED_WALLETS[k].connector === connector &&
          (connector !== injected || isMetaMask === (k === 'METAMASK')),
      )
      .map((k) => SUPPORTED_WALLETS[k].name)[0];
    return (
      <div className="font-medium text-white text-baseline">
        Connected with {name}
      </div>
    );
  }

  function getStatusIcon() {
    if (connector === injected) {
      return null;
      // return <IconWrapper size={16}>{/* <Identicon /> */}</IconWrapper>
    } else if (connector.constructor.name === 'WalletConnectConnector') {
      return (
        <WalletIcon src="/wallet-connect.png" alt="Wallet Connect" size={16} />
      );
    } else if (connector.constructor.name === 'WalletLinkConnector') {
      return <WalletIcon src="/coinbase.svg" alt="Coinbase" size={16} />;
    } else if (connector.constructor.name === 'FortmaticConnector') {
      return <WalletIcon src="/formatic.png" alt="Fortmatic" size={16} />;
    } else if (connector.constructor.name === 'PortisConnector') {
      return (
        <WalletIcon src="/portnis.png" alt="Portis" size={16}>
          <Button
            onClick={async () => {
              // casting as PortisConnector here defeats the lazyload purpose
              (connector as any).portis.showPortis();
            }}
          >
            Show Portis
          </Button>
        </WalletIcon>
      );
    } else if (connector.constructor.name === 'TorusConnector') {
      return <WalletIcon src="/torus.png" alt="Torus" size={16} />;
    }
    return null;
  }

  const clearAllTransactionsCallback = useCallback(() => {
    if (chainId) dispatch(clearAllTransactions({ chainId }));
  }, [dispatch, chainId]);

  return (
    <div className="space-y-3">
      <div className="space-y-3">
        <ModalHeader title="Account" onClose={toggleWalletModal} />
        <div className="space-y-3">
          <div className="d-flex align-items-center justify-content-between">
            {formatConnectorName()}
            <div className="space-x-3 d-flex">
              {connector === injected &&
                connector.constructor.name !== 'WalletLinkConnector' &&
                connector.constructor.name !== 'BscConnector' &&
                connector.constructor.name !== 'KeystoneConnector' && (
                  <button
                    className="btn btn-primary btn-sm "
                    onClick={() => {
                      deactivate();
                      if (
                        (connector as any).close &&
                        typeof (connector as any).close === 'function'
                      ) {
                        (connector as any)?.close();
                      }
                    }}
                    style={{ marginRight: '10px', lineHeight: 1 }}
                  >
                    {`Disconnect`}
                  </button>
                )}
              <button
                className="btn btn-primary btn-sm "
                onClick={() => {
                  openOptions();
                }}
                style={{ lineHeight: 1 }}
              >
                {`Change`}
              </button>
            </div>
          </div>
          <div
            id="web3-account-identifier-row"
            className="mt-2 space-y-3 d-flex flex-column justify-content-center"
          >
            {ENSName ? (
              <div className="bg-dark-800">
                {getStatusIcon()}
                <Typography>{ENSName}</Typography>
              </div>
            ) : (
              <div className="px-3 py-2 text-white rounded bg-danger">
                {getStatusIcon()}
                <Typography>{account && shortenAddress(account)}</Typography>
              </div>
            )}
            <div className="gap-2 mt-2 space-x-3 d-flex align-items-center">
              {chainId && account && (
                <ExternalLink
                  color="blue"
                  startIcon={<LinkIcon size={16} />}
                  href={
                    chainId &&
                    getExplorerLink(chainId, ENSName || account, 'address')
                  }
                >
                  <Typography variant="sm">{`View on explorer`}</Typography>
                </ExternalLink>
              )}
              {account && (
                <Copy toCopy={account}>
                  <Typography
                    className="text-white"
                    variant="sm"
                  >{`Copy Address`}</Typography>
                </Copy>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="my-2">
        <div className="d-flex align-items-center justify-content-between">
          <Typography
            className="text-white"
            weight={700}
          >{`Recent Transactions`}</Typography>
          <div>
            <button
              className="btn btn-sm btn-primary"
              onClick={clearAllTransactionsCallback}
            >
              {`Clear all`}
            </button>
          </div>
        </div>
        {!!pendingTransactions.length || !!confirmedTransactions.length ? (
          <>
            {renderTransactions(pendingTransactions)}
            {renderTransactions(confirmedTransactions)}
          </>
        ) : (
          <Typography variant="sm" className="text-secondary">
            {`Your transactions will appear here...`}
          </Typography>
        )}
      </div> */}
    </div>
  );
};

export default AccountDetails;
