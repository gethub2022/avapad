import AdminProvider, { useAdmin } from '@/components/Admin/Context';
import Container from '@/components/Container';
import { useActiveWeb3React, useLevelsContract } from '@/hooks';
import { Token } from '@/sdk';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import IPFS from 'nano-ipfs-store';
import { parseUnits } from '@ethersproject/units';
import { useTransactionAdder } from '@/state/transactions/hooks';
import { PoolData, ProjectData } from '@/features/launchpad/types';
import DefiLaunchPadForm from '@/components/LaunchpadForm/DefiLaunchpadInfo';
import ProjectForm from '@/components/LaunchpadForm/ProjectForm';
import { Box } from '@mui/material';
import { Table } from 'react-bootstrap';
import { ContractFactory } from '@ethersproject/contracts';
import { Interface } from '@ethersproject/abi';
import abi from '@/constants/abis/ido.json';
import {
  AGGREGATOR_ADDRESS,
  LEVELMANAGER_ADDRESS,
} from '@/sdk/constants/addresses';
const ipfs = IPFS.at('https://api.thegraph.com/ipfs');

function getInitialFields(prefix) {
  return {
    [`${prefix}StartTime`]: undefined,
    [`${prefix}EndTime`]: undefined,
    [`${prefix}Price`]: '',
    [`${prefix}VestingPercentage`]: '',
    [`${prefix}TgePercentage`]: '',
    [`${prefix}Cliff`]: '',
    [`${prefix}Interval`]: '',
    [`${prefix}TgeStartTime`]: undefined,
  };
}

const steps = ['DeFi Launchpad Info', 'Add Additional Info', 'Finish'];

export default function Add() {
  const [activeStep, setActiveStep] = useState(0);
  const [poolData, setPoolData] = useState<PoolData | null>(null);
  const [projectData, setProjectData] = useState<ProjectData | null>(null);

  const { admin } = useAdmin();
  const router = useRouter();
  const [deploying, setDeploying] = useState<boolean>(false);
  const { chainId, account, library } = useActiveWeb3React();
  const addTransaction = useTransactionAdder();
  const levelsContract = useLevelsContract();
  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    if (!admin) {
      router.push('/');
    }
  }, []);

  async function deployPool() {
    try {
      setDeploying(true);
      const ipfsHash = ipfs.add(
        JSON.stringify({ ...poolData, ...projectData }),
      );
      if (ipfsHash) {
        const signer = library.getSigner(account);
        const factory = new ContractFactory(
          new Interface(abi.abi),
          abi.bytecode,
          signer,
        );
        const contract = await factory.deploy(
          poolData.projectName,
          poolData.startTime.unix(),
          poolData.endTime.diff(poolData.startTime, 'seconds'),
          parseUnits(poolData.rate.toFixed(20)),
          parseUnits(poolData.tokensForSale.toString()),
          '0x0000000000000000000000000000000000000000',
          AGGREGATOR_ADDRESS[chainId],
          [poolData.levelsEnabled, poolData.whitelist],
          LEVELMANAGER_ADDRESS[chainId],
        );
        await levelsContract.addIDO(contract.address, ipfsHash);
        const responce = await contract.deployTransaction.wait();
        addTransaction(
          { hash: responce.transactionHash },
          { summary: 'Deployed Pool' },
        );
        router.push('/configure');
        setDeploying(false);
      }
    } catch (error) {
      setDeploying(false);
      console.error(error);
    }
  }
  return (
    <>
      <Head>
        <title>Configure</title>
        <meta key="description" name="description" content="configure" />
      </Head>
      <Container
        id="configure-add-page"
        className="grid h-full grid-cols-1 py-4 mx-auto md:py-8 lg:py-12 gap-9"
        maxWidth="7xl"
      >
        <div className="w-full max-w-3xl mx-auto">
          <Box display={activeStep == 0 ? 'block' : 'none'}>
            <DefiLaunchPadForm
              handleBack={handleBack}
              setPoolData={setPoolData}
              handleNext={handleNext}
            />
          </Box>

          <Box display={activeStep == 1 && poolData ? 'block' : 'none'}>
            <ProjectForm
              handleBack={handleBack}
              handleNext={handleNext}
              setProjectData={setProjectData}
            />
          </Box>
          <Box
            display={
              activeStep == 2 && poolData && projectData ? 'block' : 'none'
            }
          >
            {poolData && projectData && (
              <div className="p-2 rounded p-sidebar-card p-sidebar-card-steps">
                <Table>
                  <tbody>
                    <tr>
                      <td>ProjectName</td>
                      <td>{poolData.projectName}</td>
                    </tr>
                    <tr>
                      <td>Rate</td>
                      <td>{poolData.rate} USD</td>
                    </tr>
                    <tr>
                      <td>No of tokens to sell</td>
                      <td>{poolData.tokensForSale}</td>
                    </tr>
                    <tr>
                      <td>Sale Type</td>
                      <td>
                        {!poolData.whitelist && !poolData.levelsEnabled && (
                          <>Public&nbsp;</>
                        )}
                        {poolData.whitelist && <>Whitelist,&nbsp;</>}
                        {poolData.levelsEnabled && <>Levels&nbsp;</>}
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Box
                  sx={{ maxWidth: '170px', mx: 'auto' }}
                  display="flex"
                  justifyContent="space-between"
                >
                  <button
                    onClick={handleBack}
                    className={'  btn btn-secondary btn-sm' + ' rounded-full'}
                    style={{ borderRadius: '160px' }}
                  >
                    {' '}
                    Back
                  </button>
                  <button
                    onClick={deployPool}
                    disabled={deploying}
                    className="btn btn-primary btn-sm"
                  >
                    Deploy{' '}
                  </button>
                </Box>
              </div>
            )}
          </Box>
        </div>
      </Container>
    </>
  );
}
Add.Provider = AdminProvider;
