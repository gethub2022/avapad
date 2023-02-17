import Head from 'next/head';
import Container from '@/components/Container';
import AdminProvider, { useAdmin } from '@/components/Admin/Context';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import {
  useActiveWeb3React,
  useClaimerContract,
  useTokenContract,
} from '@/hooks';
import { Field, FieldArray, Formik } from 'formik';
import moment from 'moment-timezone';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterMoment from '@mui/lab/AdapterMoment';
import DateTimePicker from '@mui/lab/DateTimePicker';
import { formatUnits, parseUnits } from '@ethersproject/units';
import {
  Box,
  Button,
  Divider,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material';
import { Error } from '@/components/FormikError';
import {
  ClaimerSchema,
  FilterData,
  isValidFile,
  parseDataFromFile,
  parseStateData,
  generateMerkleTree,
  toTokenAmount,
} from '@/functions/validators/claimer';
import { calculateGasMargin, getContract, isAddress } from '@/functions';
import { Token } from '@/sdk';
import ERC_20_ABI from '@/constants/abis/erc20.json';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import {
  faFileAlt,
  faFileCsv,
  faFileExcel,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Editor = dynamic(() => import('@/components/Editor'), { ssr: false });
import IPFS from 'nano-ipfs-store';
import Dots from '@/components/Dots';
import { useTransactionAdder } from '@/state/transactions/hooks';
const ipfs = IPFS.at('https://api.thegraph.com/ipfs');

const StyledLabel = styled.label`
  margin-bottom: 10px;
  width: 100%;
  font-size: 0.7rem;
  font-weight: 700;
  color: ${({ theme }) => theme.blue};
`;
const DragSection = styled.div`
  padding: 3rem 1.5rem;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: #000;
`;
const StyledText = styled.p`
  margin: 0;
  ${({ secondary, theme }) =>
    secondary &&
    `
color:${theme.default};
`}
`;
const StyledTextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 0.7rem;
  color: ${({ theme }) => theme.lightBlue};
`;
const StyledChangeTypeButton = styled.button`
  cursor: pointer;
  text-decoration: underline;
  border: none;
  background: none;
  font-size: 0.7rem;
  font-weight: 700;
  color: ${({ theme }) => theme.lightBlue};
`;
const ExamplesButton = styled.button`
  position: relative;
  cursor: pointer;
  text-decoration: underline;
  border: none;
  background: none;
  color: ${({ theme }) => theme.default};
  font-size: 0.7rem;
  :hover > div,
  :focus > div {
    display: flex;
  }
`;
const ExamplesDropDown = styled.div`
  position: absolute;
  bottom: 0;
  left: 10px;
  transform: translateY(100%);
  background: #fff;
  border-radius: 3px;
  padding: 5px 10px;
  display: none;
  flex-direction: column;
`;
const ExamplesDropDownItem = styled.a`
  padding: 5px;
  text-align: left;
  :hover {
    text-decoration: underline;
  }
`;

const ErrorContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.red};
  border-radius: 4px;
  background: #fff;
  padding: 10px;
`;
const StyledErrorSection = styled.div`
  width: 100%;
`;
const ErrorComponent = styled.p`
  color: ${({ theme }) => theme.red};
  font-size: 0.7rem;
  margin: 0px;
  width: 100%;
  margin-bottom: 10px;
`;
const ErrorButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.red};
`;
const ErrorStatment = styled.h3`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.red};
  margin: 10px 0px;
`;
const ErrorButton = styled.button`
  color: ${({ theme }) => theme.red};
  border: none;
  background: none;
  font-size: 0.8rem;
  cursor: pointer;
  text-decoration: underline;
`;

export default function AddClaimer() {
  const [pendingTx, setPendingTx] = useState(false);
  const [token, setToken] = useState<Token | null>(null);
  const [loading, setLoading] = useState(false);
  const [insertManually, setInsertManually] = useState(true);
  const [state, setState] = useState('');
  const [parsedData, setParsedData] = useState([]);
  const [error, setError] = useState('');
  const { library, account, chainId } = useActiveWeb3React();
  const textAreaRef = useRef(null);
  const tokenContract = useTokenContract(token?.address);
  const { admin } = useAdmin();
  const router = useRouter();
  const claimerContract = useClaimerContract();
  const addTransaction = useTransactionAdder();

  useEffect(() => {
    if (!admin) {
      router.push('/');
    }
  }, []);
  const getTokenData = async (tokenAddress) => {
    if (!isAddress(tokenAddress)) {
      setError('Invalid token address');
      return;
    }
    setLoading(true);
    try {
      const tokenContract = getContract(tokenAddress, ERC_20_ABI, library);
      const name = await tokenContract.name();
      const symbol = await tokenContract.symbol();
      const decimals = await tokenContract.decimals();
      const data = new Token(chainId, tokenAddress, decimals, symbol, name);
      setToken(data);
      setLoading(false);
    } catch (error) {
      setError("Couldn't get token data");
      setLoading(false);
      console.error(error);
    }
  };
  const handleTokenAddressChange = (e) => {
    const value = e.target.value;
    if (isAddress(value)) {
      getTokenData(value);
      setError('');
    } else {
      setToken(null);
      setError('Invalid token address');
    }
  };
  const changeInput = () => {
    setParsedData([]);
    setState(``);
    setInsertManually(!insertManually);
  };
  const showTextExample = () => {
    if (insertManually) {
      setState(
        `0xe84fFbECe328C6AdFa2336CF48E20A5aB0310522,1\n0x3f8EcD0a5214Eb5228394C94eaA55a7dB385211b,3\n0x508e0be69f49D32335bC37d5Fb84579077da9e4d,5`,
      );
    }
  };
  useEffect(() => {
    if (parsedData.length && !insertManually) {
      setInsertManually(true);
    } else {
      if (textAreaRef.current && parsedData.length > 0) {
      }
    }
  }, [parsedData, textAreaRef, insertManually]);
  const handleErrorButtonClick = async (type) => {
    const data = await parseStateData(state, token?.address);
    let { nState, nData } = FilterData(data.parsedData, type);
    setState(nState);
    setParsedData(nData);
  };
  const handleFormSubmit = async (values, { resetForm }) => {
    try {
      const data = await parseStateData(state, token?.address);
      setState(data.state);
      setParsedData(data.parsedData);
      setPendingTx(true);
      const distribution = await claimerContract.totalDistributions();
      if (!data.hasErrors && !error) {
        const { root, mappedData } = generateMerkleTree(
          data.parsedData,
          distribution,
          token,
        );
        const s = data.parsedData.reduce(
          (sum, obj) => Number(sum) + Number(obj.pair[1]),
          0,
        );
        const sum = toTokenAmount(token, s).toString();
        if (sum && claimerContract && token?.address && tokenContract) {
          const ipfsHash = await ipfs.add(JSON.stringify(mappedData));
          const estimatedGas = await claimerContract.estimateGas.sendTokens(
            token?.address,
            ipfsHash,
            root,
            values.claims.map((claim) => moment(claim.unlockTime).utc().unix()),
            values.claims.map((claim) =>
              parseUnits(claim.percentage.toString(), 6),
            ),
            sum,
          );
          const transfertx = await tokenContract.transfer(
            claimerContract.address,
            sum,
          );
          const tx = await claimerContract.sendTokens(
            token?.address,
            ipfsHash,
            root,
            values.claims.map((claim) => moment(claim.unlockTime).utc().unix()),
            values.claims.map((claim) =>
              parseUnits(claim.percentage.toString(), 6),
            ),
            sum,

            {
              gasLimit: calculateGasMargin(estimatedGas),
            },
          );
          addTransaction(tx, {
            summary: 'Added Claimer Distribution ',
          });
          await tx.wait();
          resetForm({});
          setState(``);
          setParsedData([]);
        }
      }

      setPendingTx(false);
    } catch (error) {
      setPendingTx(false);
      console.error(error);
    }
  };
  const updateState = (value) => setState(value);
  const handleDropOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isValidFile(e.dataTransfer.files[0].name)) {
      parseDataFromFile(
        e.dataTransfer.files[0],
        updateState,
        setParsedData,
        token?.address,
      );
    }
  };
  const handleFileInputChange = (e) => {
    e.preventDefault();
    if (isValidFile(e.target.files[0].name)) {
      parseDataFromFile(
        e.target.files[0],
        updateState,
        setParsedData,
        token?.address,
      );
      e.target.value = null;
    }
  };
  const initialValues = {
    claims: [
      {
        unlockTime: null,
        percentage: null,
      },
      {
        unlockTime: null,
        percentage: null,
      },
    ],
    token: null,
  };
  const claimAlreadyExists = false;
  const hasInvalidAddress = parsedData.some(
    (obj) =>
      obj.hasError &&
      (obj.errorType === 'invalidAddress' || obj.errorType === 'addressExists'),
  );
  const hasDublication = parsedData.some(
    (obj) => obj.hasError && obj.errorType === 'dublicateAddress',
  );
  const hasErrors = parsedData.some((obj) => obj.hasError) || error;

  return (
    <>
      <Head>
        <title>Configure Claimer</title>
        <meta key="description" name="description" content="configure" />
      </Head>
      <Container
        id="configure-claimer-page"
        className="grid h-full grid-cols-1 py-4 mx-auto md:py-8 lg:py-12 gap-9"
        maxWidth="5xl"
      >
        <Formik
          validationSchema={ClaimerSchema}
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validateOnMount={true}
          validateOnBlur={true}
        >
          {({
            isSubmitting,
            handleSubmit,
            handleChange,
            values,
            errors,
            setValues,
            validateForm,
            setErrors,
            submitForm,
          }) => (
            <form noValidate onSubmit={handleSubmit}>
              <div className="section-text">
                <Typography
                  className=" section-title"
                  style={{ fontSize: '1rem' }}
                >
                  Claim Info
                </Typography>
              </div>
              <Box className="col-md-12" sx={{ mt: 2 }}>
                <Grid container columnSpacing={4}>
                  <Grid item md={5} xs={12}>
                    <InputLabel>Token Address</InputLabel>
                    <div className="flex">
                      <TextField
                        sx={{ mt: 1 }}
                        size="small"
                        name="token"
                        onChange={(e) => {
                          handleTokenAddressChange(e);
                          handleChange(e);
                        }}
                        value={values.token}
                        fullWidth
                      />
                    </div>
                    <Error name="token" />
                  </Grid>
                  <Grid item md={2.5} xs={12}>
                    <InputLabel>Token Name</InputLabel>
                    <TextField
                      sx={{ mt: 1 }}
                      size="small"
                      name="tokenName"
                      value={token?.name || ''}
                      fullWidth
                      disabled={true}
                    />
                  </Grid>
                  <Grid item md={2.5} xs={12}>
                    <InputLabel>Token Symbol</InputLabel>
                    <TextField
                      sx={{ mt: 1 }}
                      size="small"
                      name="tokenSymbol"
                      value={token?.symbol || ''}
                      fullWidth
                      disabled={true}
                    />
                  </Grid>
                  <Grid item md={2} xs={12}>
                    <InputLabel>Token Decimals</InputLabel>
                    <TextField
                      sx={{ mt: 1 }}
                      size="small"
                      name="tokenDecimals"
                      value={token?.decimals || ''}
                      fullWidth
                      disabled={true}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box mt={1}>
                {error && (
                  <Typography className="text-danger">{error}</Typography>
                )}
              </Box>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                <FieldArray
                  name="claims"
                  render={(arrayHelpers) => (
                    <Box>
                      {values.claims.map((claim, index) => {
                        return (
                          <Box key={index} mt={2}>
                            {index == 0 && (
                              <div className="section-text">
                                <Typography
                                  className=" section-title"
                                  style={{ fontSize: '1rem' }}
                                >
                                  TGE Info
                                </Typography>
                              </div>
                            )}
                            {index == 1 && (
                              <div className="section-text">
                                <Typography
                                  className=" section-title"
                                  style={{ fontSize: '1rem' }}
                                >
                                  Vesting Info
                                </Typography>
                              </div>
                            )}
                            <Grid container sx={{ mt: 2 }} columnSpacing={4}>
                              <Grid item md={5} xs={12}>
                                <Box>
                                  <InputLabel>Percentage</InputLabel>
                                  <Field
                                    disabled={claimAlreadyExists}
                                    component={TextField}
                                    placeholder="Ex : 10"
                                    sx={{ mt: 1 }}
                                    size="small"
                                    type="number"
                                    name={`claims.${index}.percentage`}
                                    onChange={(e) =>
                                      handleChange({
                                        target: {
                                          name: `claims.${index}.percentage`,
                                          value: e.target.value,
                                        },
                                      })
                                    }
                                    value={values.claims[index].percentage}
                                    fullWidth
                                  />
                                </Box>
                              </Grid>
                              <Grid item md={5} xs={12}>
                                <InputLabel>Claim Time</InputLabel>
                                <DateTimePicker
                                  ampm={false}
                                  value={values.claims[index].unlockTime}
                                  disabled={pendingTx || claimAlreadyExists}
                                  onChange={(value) =>
                                    handleChange({
                                      target: {
                                        name: `claims.${index}.unlockTime`,
                                        value: moment(value).isValid()
                                          ? moment.utc(
                                              value.format(
                                                'YYYY-MM-DD HH:mm:ss',
                                              ),
                                            )
                                          : value,
                                      },
                                    })
                                  }
                                  renderInput={(params) => (
                                    <TextField
                                      size="small"
                                      sx={{
                                        mt: 1,
                                        borderRadius: 2,
                                      }}
                                      {...params}
                                      fullWidth
                                    />
                                  )}
                                />
                                <Error name={`claims.${index}.unlockTime`} />
                              </Grid>
                              {index >= 1 && (
                                <Grid
                                  item
                                  md={2}
                                  xs={12}
                                  sx={{ minHeight: '100%' }}
                                >
                                  <InputLabel sx={{ visibility: 'hidden' }}>
                                    ..
                                  </InputLabel>
                                  {!claimAlreadyExists && (
                                    <Box
                                      display="flex"
                                      alignItems="center"
                                      sx={{ minHeight: '100%' }}
                                    >
                                      <Button
                                        onClick={() =>
                                          arrayHelpers.remove(index)
                                        }
                                      >
                                        Remove
                                      </Button>
                                    </Box>
                                  )}
                                </Grid>
                              )}
                            </Grid>
                          </Box>
                        );
                      })}
                      <Box display="flex" justifyContent={'flex-end'}>
                        <Grid
                          container
                          justifyContent={'flex-end'}
                          columnSpacing={4}
                        >
                          {!claimAlreadyExists &&
                            values.claims.reduce(
                              (sum, claim) =>
                                Number(sum) + Number(claim.percentage || 0),
                              0,
                            ) != 100 && (
                              <Grid item md={2} xs={12}>
                                <Button
                                  sx={{ mt: 2 }}
                                  variant="contained"
                                  onClick={() =>
                                    arrayHelpers.push({
                                      unlockTime: null,
                                      percentage: null,
                                    })
                                  }
                                >
                                  Add Vesting
                                </Button>
                              </Grid>
                            )}
                        </Grid>
                      </Box>
                    </Box>
                  )}
                />
              </LocalizationProvider>
              <Box mt={2}>
                <StyledLabel>
                  <StyledTextDiv>
                    <StyledText>Addresses with Amounts</StyledText>
                    <StyledChangeTypeButton onClick={changeInput}>
                      {!insertManually ? 'Insert Manually' : 'Upload File'}
                    </StyledChangeTypeButton>
                  </StyledTextDiv>
                </StyledLabel>
                <HideAble show={!insertManually}>
                  <Editor
                    value={state}
                    onChange={(value) => setState(value)}
                    parsedData={parsedData}
                  />
                </HideAble>
                <HideAble show={insertManually}>
                  <StyledLabel htmlFor="inputfile">
                    <DragSection
                      onDrop={handleDrop}
                      onDragOver={handleDropOver}
                    >
                      <FontAwesomeIcon
                        icon={faUpload}
                        size="lg"
                        style={{ marginBottom: '20px' }}
                      />
                      Drop your files here or click to upload
                    </DragSection>
                  </StyledLabel>
                  <input
                    onChange={handleFileInputChange}
                    style={{
                      visibility: 'hidden',
                      height: '0px',
                      width: '0px',
                    }}
                    type="file"
                    id="inputfile"
                    accept=".txt, .csv, .xls, .xlsx, .xlsb, .xlsm, .ods, .xml, .fods, .uos, .sylk, .dif, .dbf, .prn, .qpw, .123"
                    multiple={true}
                  ></input>
                </HideAble>
                <StyledTextDiv>
                  <StyledText secondary>Accepted: CSV / Excel / Txt</StyledText>
                  <ExamplesButton onClick={showTextExample}>
                    Show Examples
                    {!insertManually && (
                      <ExamplesDropDown>
                        <ExamplesDropDownItem
                          href={'/examples/example.xlsx'}
                          download
                        >
                          <FontAwesomeIcon
                            icon={faFileExcel}
                            className="icon"
                          />
                          Excel
                        </ExamplesDropDownItem>
                        <ExamplesDropDownItem
                          href={'/examples/example.csv'}
                          download
                        >
                          <FontAwesomeIcon icon={faFileCsv} className="icon" />
                          CSV
                        </ExamplesDropDownItem>
                        <ExamplesDropDownItem
                          href={'/examples/example.txt'}
                          download
                        >
                          <FontAwesomeIcon icon={faFileAlt} className="icon" />
                          Text
                        </ExamplesDropDownItem>
                      </ExamplesDropDown>
                    )}
                  </ExamplesButton>
                </StyledTextDiv>
              </Box>
              <Box mt={2}>
                {hasErrors && parsedData.some((obj) => obj.hasError) && (
                  <StyledErrorSection>
                    <ErrorButtonsContainer>
                      {hasInvalidAddress ? (
                        <>
                          <ErrorStatment>
                            The below addresses cannot be processed
                          </ErrorStatment>
                          <ErrorButton
                            onClick={() => handleErrorButtonClick('delete')}
                          >
                            Delete them
                          </ErrorButton>
                        </>
                      ) : hasDublication ? (
                        <>
                          <ErrorStatment>
                            Duplicated wallet addresses
                          </ErrorStatment>
                          <div>
                            <ErrorButton
                              onClick={() =>
                                handleErrorButtonClick('keepfirst')
                              }
                            >
                              Keep the first one
                            </ErrorButton>
                            |
                            <ErrorButton
                              onClick={() => handleErrorButtonClick('combine')}
                            >
                              Combine balances
                            </ErrorButton>
                          </div>
                        </>
                      ) : null}
                    </ErrorButtonsContainer>
                    <ErrorContainer>
                      {parsedData.map((obj, index) =>
                        obj.hasError ? (
                          <ErrorComponent
                            className="text-danger"
                            key={obj.value + index}
                          >
                            Line{index + 1}: {obj.error.toString()}
                          </ErrorComponent>
                        ) : null,
                      )}
                    </ErrorContainer>
                  </StyledErrorSection>
                )}
              </Box>
              <Box
                display="flex"
                alignItems={'center'}
                flexDirection="column"
                justifyContent={'center'}
                mb={4}
              >
                {!claimAlreadyExists && (
                  <Button
                    type="submit"
                    sx={{ mt: 2 }}
                    variant="contained"
                    disabled={
                      pendingTx ||
                      isSubmitting ||
                      values.claims.reduce(
                        (sum, claim) =>
                          Number(sum) + Number(claim.percentage || 0),
                        0,
                      ) != 100
                    }
                  >
                    {pendingTx ? (
                      <Dots>Adding Distribution</Dots>
                    ) : (
                      'Add Distribution'
                    )}
                  </Button>
                )}

                {!claimAlreadyExists &&
                  values.claims.reduce(
                    (sum, claim) => Number(sum) + Number(claim.percentage || 0),
                    0,
                  ) != 100 && (
                    <Typography sx={{ mt: 2 }} className="text-danger">
                      Sum of Percentage must be 100
                    </Typography>
                  )}
              </Box>
            </form>
          )}
        </Formik>
      </Container>
    </>
  );
}

const HideAble = ({ show, children }) => {
  return (
    <Box
      sx={{
        width: '100%',
        ...(show
          ? {
              height: 0,
              overflow: 'hidden',
              visibility: 'hidden',
            }
          : {}),
      }}
    >
      {children}
    </Box>
  );
};
AddClaimer.Provider = AdminProvider;
