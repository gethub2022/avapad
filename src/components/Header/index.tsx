import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import NavLink from '../NavLink';
import { Popover } from '@headlessui/react';
import Web3Status from '../Web3Status';
import { useActiveWeb3React } from '../../hooks/useActiveWeb3React';
import { useETHBalances } from '../../state/wallet/hooks';
import { useWalletModalToggle } from '@/state/application/hooks';
import moment from 'moment-timezone';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useRouter } from 'next/router';
import AdminProvider, { useAdmin } from '../Admin/Context';

// import { ExternalLink, NavLink } from "./Link";
// import { ReactComponent as Burger } from "../assets/images/burger.svg";

function AppBar(): JSX.Element {
  const { admin } = useAdmin();
  const [open, setOpen] = useState(false);
  const [currentUTCDate, setCurrentUTCDate] = useState('');
  const { account, chainId, library } = useActiveWeb3React();
  const interval = useRef(null);
  const router = useRouter();
  const userEthBalance = useETHBalances(account ? [account] : [])?.[
    account ?? ''
  ];
  const toggleWalletModal = useWalletModalToggle();
  useEffect(() => {
    setCurrentUTCDate(moment().utc().format('DD MMM, HH:mm:ss'));
    interval.current = setInterval(() => {
      setCurrentUTCDate(moment().utc().format('DD MMM, HH:mm:ss'));
    }, 1000);
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    // <nav
    //   id="PPNavbar"
    //   className="w-full bg-white navbar navbar-expand-md navbar-light"
    // >
    <Navbar collapseOnSelect expand="md" className="w-full">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>
            <img
              src="/logo.png"
              height={65}
              width={230}
              alt="Avapad"
              className="me-2"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav
            className="mb-2 navbar-nav ms-auto mb-md-0"
            activeKey={router.pathname}
          >
            <Link href={admin ? '/configure' : '/projects'} passHref>
              <Nav.Link className="pt-1 d-flex align-items-start">
                Projects
              </Nav.Link>
            </Link>
            <div>
              <Link href="/staking" passHref>
                <Nav.Link className="pt-1 d-flex align-items-start">
                  Staking
                </Nav.Link>
              </Link>
            </div>
            <div>
              <Link href="/claimer" passHref>
                <Nav.Link className="pt-1 d-flex align-items-start">
                  Claimer
                </Nav.Link>
              </Link>
            </div>
            <div>
              <Web3Status />
            </div>
            {/* <div>
              <span className="text-xs"> {currentUTCDate} UTC</span>
            </div> */}
          </Nav>
        </Navbar.Collapse>
        {/* <Link href="/">
          <a className="navbar-brand d-flex align-items-center" href="/">
            <img
              src="/logo.png"
              height={65}
              width={230}
              alt="Avapad"
              className="me-2"
            />
          </a>
        </Link> */}
        {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="mb-2 navbar-nav ms-auto mb-md-0">
            <li className="nav-item me-2">
              <Link href="/projects" passHref>
                <a
                  className="btn btn-sm btn-outline-primary btn-projects"
                  aria-current="page"
                >
                  <i className="mdi mdi-fire me-1" />
                  <span>Projects</span>
                </a>
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link passHref href="/staking">
                <a className="btn btn-sm nav-link ">
                  <i className="mdi mdi-blender-software me-1" />
                  <span>Staking</span>
                </a>
              </Link>
            </li>
            <button className="btn btn-sm btn-outline-primary me-2 ">
              {currentUTCDate} UTC
            </button>
            <li className="nav-item ">
              <Web3Status />
            </li>
          </ul>
        </div> */}
      </Container>
    </Navbar>

    // </nav>
    // <section className="header">
    //   <nav className="navbar">
    //     <Link href="/">
    //       <div>
    //         <img src={'/Yeni-Proje.png'} alt="logo"></img>
    //         <span>Avapad</span>
    //       </div>
    //     </Link>
    //     <div className="nav-center">
    //       <ul className={open ? 'nav-links show-nav' : 'nav-links'}>
    //         <li>
    //           <Link href="/">Connect Wallet</Link>
    //         </li>
    //         <li>
    //           <Link href="/projects">Projects</Link>
    //         </li>
    //         <li>
    //           <Link href="/staking">Staking</Link>
    //         </li>
    //         <li>
    //           <Link href="/error">Error</Link>
    //         </li>
    //       </ul>
    //       <ul className="nav-mobile">
    //         <li>
    //           <button
    //             type="button"
    //             className="nav-btn"
    //             onClick={() => setOpen(!open)}
    //           >
    //             {/* <FaAlignJustify className="nav-icon" /> */}
    //           </button>
    //         </li>
    //         {/* {
    //           <li>
    //             {this.state.star ? (
    //               <button
    //                 type="button"
    //                 className="nav-btn"
    //                 onClick={this.handleStar}
    //               >
    //                 <ImStarEmpty className="nav-icon" />
    //               </button>
    //             ) : (
    //               <button
    //                 type="button"
    //                 className="nav-btn"
    //                 onClick={this.handleStar}
    //               >
    //                 <ImStarFull className="nav-icon" />
    //               </button>
    //             )}
    //           </li>
    //         } */}
    //       </ul>
    //     </div>
    //   </nav>
    // </section>

    //     // <header className="flex flex-row justify-between w-screen flex-nowrap">
    // <header className="flex-shrink-0 w-full">
    //   <Popover as="nav" className="z-10 w-full bg-transparent header-border-b">
    //     {({ open }) => (
    //       <>
    //         <div className="px-4 py-4">
    //           <div className="flex items-center justify-between">
    //             <div className="flex items-center">
    //               <Image
    //                 src="/Yeni-Proje.png"
    //                 alt="icon"
    //                 width="90px"
    //                 height="90px"
    //               />
    //               <div className="hidden sm:block sm:ml-4">
    //                 <div className="flex space-x-2">
    //                   {/* <Buy /> */}
    //                   {/* <NavLink href="/swap">
    //                     <a
    //                       id={`swap-nav-link`}
    //                       className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //                     >
    //                       {i18n._(t`Swap`)}
    //                     </a>
    //                   </NavLink> */}
    //                   {/* <NavLink href="/pool">
    //                     <a
    //                       id={`pool-nav-link`}
    //                       className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //                     >
    //                       {i18n._(t`Pool`)}
    //                     </a>
    //                   </NavLink> */}

    //                   <NavLink href={'/launchpad'}>
    //                     <a
    //                       id={`launchpad-nav-link`}
    //                       className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //                     >
    //                       {' '}
    //                       {` Launchpad`}
    //                     </a>
    //                   </NavLink>
    //                   <NavLink href={'/stake'}>
    //                     <a
    //                       id={`stale-nav-link`}
    //                       className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //                     >
    //                       {' '}
    //                       {` Stake`}
    //                     </a>
    //                   </NavLink>
    //                   <NavLink href={'/claim'}>
    //                     <a
    //                       id={`stale-nav-link`}
    //                       className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //                     >
    //                       {' '}
    //                       {` Claim`}
    //                     </a>
    //                   </NavLink>
    //                 </div>
    //               </div>
    //             </div>

    //             <div className="fixed bottom-0 left-0 z-10 flex flex-row items-center justify-center w-full p-4 lg:w-auto bg-dark-1000 lg:relative lg:p-0 lg:bg-transparent">
    //               <div className="flex items-center justify-between w-full space-x-2 sm:justify-end">
    //                 <div className="w-auto flex items-center rounded bg-dark-900 hover:bg-dark-800 p-0.5 whitespace-nowrap text-sm font-bold cursor-pointer select-none pointer-events-auto">
    //                   {account && chainId && userEthBalance && (
    //                     <>
    //                       <div className="px-3 py-2 text-white text-bold">
    //                         {userEthBalance.toSignificant(6)} ETH
    //                       </div>
    //                     </>
    //                   )}
    //                   <Web3Status />
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="flex -mr-2 sm:hidden">
    //               {/* Mobile menu button */}
    //               <Popover.Button className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-high-emphesis focus:outline-none">
    //                 <span className="sr-only">{`Open main menu`}</span>
    //                 {open ? (
    //                   <svg
    //                     className="block w-6 h-6"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                   >
    //                     <path
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                       strokeWidth="2"
    //                       d="M6 18L18 6M6 6l12 12"
    //                     />
    //                   </svg>
    //                 ) : (
    //                   // <X title="Close" className="block w-6 h-6" aria-hidden="true" />
    //                   <svg
    //                     className="block w-6 h-6"
    //                     aria-hidden="true"
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     stroke="currentColor"
    //                   >
    //                     <path
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                       strokeWidth={2}
    //                       d="M4 6h16M4 12h16M4 18h16"
    //                     />
    //                   </svg>
    //                   // <Burger title="Burger" className="block w-6 h-6" aria-hidden="true" />
    //                 )}
    //               </Popover.Button>
    //             </div>
    //           </div>
    //         </div>

    //         <Popover.Panel className="sm:hidden">
    //           <div className="flex flex-col px-4 pt-2 pb-3 space-y-1">
    //             {/* <Link href={'/swap'}>
    //               <a
    //                 id={`swap-nav-link`}
    //                 className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //               >
    //                 {`Swap`}
    //               </a>
    //             </Link>
    //             <Link href={'/pool'}>
    //               <a
    //                 id={`pool-nav-link`}
    //                 className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //               >
    //                 {`Pool`}
    //               </a>
    //             </Link> */}

    //             <Link href={'/launchpad'}>
    //               <a
    //                 id={`launchpad-nav-link`}
    //                 className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //               >
    //                 {' '}
    //                 {`Launchpad`}
    //               </a>
    //             </Link>
    //             <Link href={'/stake'}>
    //               <a
    //                 id={`Stake-nav-link`}
    //                 className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //               >
    //                 {' '}
    //                 {`Stake`}
    //               </a>
    //             </Link>
    //             <Link href={'/claim'}>
    //               <a
    //                 id={`Claim-nav-link`}
    //                 className="p-2 text-baseline text-primary hover:text-high-emphesis focus:text-high-emphesis md:p-3 whitespace-nowrap"
    //               >
    //                 {' '}
    //                 {`Claim`}
    //               </a>
    //             </Link>
    //           </div>
    //         </Popover.Panel>
    //       </>
    //     )}
    //   </Popover>
    // </header>
  );
}

export default AppBar;
AppBar.Provider = AdminProvider;
