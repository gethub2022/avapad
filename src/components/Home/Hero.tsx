import Link from 'next/link';

export default function Hero() {
  return (
    <div className="pp-home-banner">
      <div className="container">
        <h1
          className="text-center text-uppercase"
          data-aos="fade-up"
          data-aos-delay={100}
        >
          {' '}
          THE FIRST DUAL TOKEN MECHANISM LAUNCHPAD ON CRYPTO-UNIVERSE
        </h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p data-aos="fade-up" data-aos-delay={200}>
              AVAPAD is a community-driven launchpad built to provide equal opportunities for all investors.
            </p>
          </div>
        </div>
        <div className="mt-4">
          <a
            data-aos="fade-up"
            data-aos-delay={400}
            className=" btn btn-outline-info btn-lg"
            href="https://forms.gle/kAmPW7vey2yfYC2Z8"
            target="_blank"
          >
            <span>Apply for IDO</span>
          </a>
        </div>

        <div className="mt-4">
          <Link href="/projects" passHref>
            <a
              data-aos="fade-up"
              data-aos-delay={300}
              className="btn btn-outline-primary btn-lg "
              href="/projects"
            >
              <span>View all Projects</span>
            </a>
          </Link>
        </div>
        <div className="mt-4">
          <a
            data-aos="fade-up"
            data-aos-delay={400}
            className=" btn btn-outline-info btn-lg"
            href="https://forms.gle/NRhq7xRX7xWfbU439"
            target="_blank"
          >
            <span>Apply to distrube/airdrop your token</span>
          </a>
        </div>
        {/* <div className="mt-5 text-center">
          <a
            className="btn btn-outline-primary"
            href="https://t.me/Avapad"
            target="_blank"
          >
            <i className="fas fa-paper-plane me-1" />
            <span>Join us on Telegram</span>
          </a>
          <a
            className="mx-3 btn btn-outline-primary"
            href="https://medium.com/@avapad"
            target="_blank"
          >
            <i className="fab fa-medium-m me-1" />
            <span>Follow our Medium</span>
          </a>
          <a
            className="btn btn-outline-primary"
            href="https://twitter.com/Avapadofficial"
            target="_blank"
          >
            <i className="fab fa-twitter me-1" />
            <span>Follow our Twitter</span>
          </a>
        </div> */}
      </div>
    </div>
  );
}
