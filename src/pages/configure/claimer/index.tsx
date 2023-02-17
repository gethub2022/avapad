import Head from 'next/head';
import Container from '@/components/Container';
import AdminProvider, { useAdmin } from '@/components/Admin/Context';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Claimer() {
  const { admin } = useAdmin();
  const router = useRouter();
  useEffect(() => {
    if (!admin) {
      router.push('/');
    }
  }, []);
  return (
    <>
      <Head>
        <title>Configure Claimer</title>
        <meta key="description" name="description" content="configure" />
      </Head>
      <Container
        id="configure-claimer-page"
        className="grid h-full grid-cols-1 py-4 mx-auto md:py-8 lg:py-12 gap-9"
        maxWidth="7xl"
      >
        <div className="flex items-center justify-center w-90">
          <div>
            <Link href="/configure/claimer/add">
              <button className="btn btn-primary btn-sm">
                Add Distribution
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}

Claimer.Provider = AdminProvider;
