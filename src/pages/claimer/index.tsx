import Head from 'next/head';
import Container from '@/components/Container';
import { useDistribution } from '@/hooks/useDistributions';
import DistributionCard from '@/components/DistributionCard';
export default function Claimer() {
  const distributions = useDistribution();
  return (
    <>
      <Head>
        <title> Claimer</title>
        <meta key="description" name="description" content="Claimer" />
      </Head>
      <Container
        id="configure-claimer-page"
        className="grid h-full grid-cols-1 py-4 mx-auto md:py-8 lg:py-12 gap-9"
        maxWidth="5xl"
      >
        <div>
          <div
            className="pp-investment "
            style={{ backgroundImage: 'none', paddingTop: '40px' }}
          >
            <div className="container text-center">
              <div className="investment-section-items">
                <div className="row d-flex">
                  {distributions.map((distribution, index) => (
                    <DistributionCard
                      index={index}
                      distribution={distribution}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
