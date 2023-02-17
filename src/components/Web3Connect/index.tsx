import Button, { ButtonProps } from '../Button';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';

import { Activity } from 'react-feather';
import React from 'react';
import { useWalletModalToggle } from '../../state/application/hooks';

export default function Web3Connect({
  color = 'gray',
  size = 'sm',
  className = '',
  ...rest
}: ButtonProps) {
  const toggleWalletModal = useWalletModalToggle();
  const { error } = useWeb3React();
  return error ? (
    <div
      className="px-2 py-1 font-semibold text-white border rounded d-flex align-items-center justify-content-center border-danger bg-opacity-80 border-red bg-red hover:bg-opacity-100"
      onClick={toggleWalletModal}
      style={{ fontSize: '.8rem', cursor: 'pointer' }}
    >
      <div className="mr-1">
        <Activity className="w-4 h-4" />
      </div>
      {error instanceof UnsupportedChainIdError
        ? `You are on the wrong network`
        : `Error`}
    </div>
  ) : (
    <button
      className="btn btn-sm btn-primary"
      id="connect-wallet"
      onClick={toggleWalletModal}
      variant="outlined"
      color={color}
      {...rest}
    >
      <i className="mdi mdi-wallet-plus-outline me-1" />
      <span>Connect Wallet</span>
    </button>
  );
}
