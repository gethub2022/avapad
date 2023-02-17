export default function About() {
  return (
    <>
      <div className="py-5 pp-home-about pp-section" id="about">
        <div className="container">
          <div className="text-center row justify-content-center">
            <div className="col-lg-12 px-lg-0">
              <div className="section-head">
                <h2
                  className="title title-xl title-xl-40"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  title="TRUST"
                >
                  The world's fastest growing network combined with a new generation launchpad in a dual token structure.
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mt-4 pp-home-about-content pp-section-body">
          <div className="container text-center">
            <div className="mb-3">
              <img
                className="mx-auto light-show img-280-mb"
                src="/images/avax-logo.png"
                width={350}
                alt="Avax"
              />
              <img
                className="mx-auto dark-show img-280-mb"
                src="/images/banner.png"
                width={350}
                alt="Avax"
              />
            </div>
            <p className="font-24 px-md-5">
              Avapad combines the proven track record of Avapad’s launchpad
              solutions with the global reach and efficiency of Avax’s
              blockchain technology to deliver a cutting edge IDO experience.
            </p>
          </div>
        </div> */}
      </div>
      <div className="pp-home-about pp-section" id="about">
        <div className="container">
          <div className="text-center row justify-content-center">
            <div className="col-lg-6">
              <div className="section-head">
                <h2
                  className="title title-xl"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  title="What and Why"
                >
                  ABOUT US
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 pp-home-about-content pp-section-body">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6" data-aos="fade-up" data-aos-delay={200}>
                <h6>WHAT IS AVAPAD?</h6>
                <h2>
                  Avapad is a community oriented decentralized launchpad that empower high potential projects running on Avalanche Network.
                </h2>
                <p className="lead-s2">
                  
    
                </p>
                <h6 className="mt-4">WHY CHOOSE US?</h6>
                <h2>
                  Avapad is built up for need of community trust and togetherness. Wide range tier system and two token mechanism have been established to cover all investors and community members. Avapad provides a fair and decentralized IDO participation process, and while ensuring this, it aims to achieve a balance of gains for both the investor and the entrepreneur. When choosing projects, it pays attention to the following criteria:
                </h2>
                <p>
                    - Project owners resumes and qualifications<br/>
                    - Project stakeholders' and investors' references<br/>
                    - Roadmap of the project<br/>
                    - Project documents and outputs<br/>
                    - Tokenomics<br/>
                    - Activity of social media pages and website quality<br/>
                    - Adequacy to provide the required liquidity 
                </p>
                <p>
                  Avapad will only support projects that meet these criteria throughout their roadmaps.
                  At the same time, Avapad charges low fees on all transactions through the Avalanche Network. In this way, it provides convenience to investors in terms of transaction mobility.
                </p>
              </div>
              <div className="col-md-6">
                <div
                  className="text-center nk-block-img nk-block-ca"
                  data-aos="fade-up"
                  data-aos-delay={200}
                  style={{ position: 'relative' }}
                >
                  <div className="nk-circle-animation nk-df-center fast" />
                  <img
                    className="mx-auto rounded "
                    src="/images/poster.png"
                    alt=""
                    style={{ width: '50%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
