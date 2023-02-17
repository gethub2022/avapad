export default function Partners() {
  return (
    <>
      <div className="pp-home-advisors pp-section py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-12">
              <div className="section-head">
                <h2
                  className="title title-xl"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  title="DISTRUBE TOKEN"
                >
                  About Distrube/Airdrop Your Token
                </h2>
              </div>
            </div>
            <div className="col-lg-12 mb-5">
              <div className="pp-card-legal-partner">
                <div className="mb-4">
                  <img
                    width={130}
                    className="dark-show mx-auto"
                    src="/images/avax-logo-d.png"
                    alt=""
                  />
                  <img
                    width={130}
                    className="light-show mx-auto"
                    src="/images/avax-logo.png"
                    alt=""
                  />
                </div>
                <p className="mb-0">
                  "You can distribute or airdrop your token in the AVAX network with the specified vesting dates. After clicking the button above and making your application, we will have a detailed interview with you."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Advisor />
    </>
  );
}

const Advisor = () => {
  return (
    <div className="pp-home-advisors pp-section py-3" id="advisor">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-12">
            <div className="section-head">
              <h2
                className="title title-xl"
                data-aos="fade-up"
                data-aos-delay={100}
                title="PARTNER"
              >
                INCUBATOR AND INVESTMENT PARTNER
              </h2>
            </div>
          </div>
          <div className="col-lg-12 mb-5 mt-4">
            <div className="pp-card-legal-partner">
              <div className="mb-4">
                <img
                  width={230}
                  className="dark-show mx-auto"
                  src="/images/bluzilla_logo.png"
                  alt=""
                />
                <img
                  width={230}
                  className="light-show mx-auto"
                  src="/images/bluzilla_logo-df.png"
                  alt=""
                />
              </div>
              <div>
                <p>
                  We specialize in taking your innovative and new idea from
                  concept to completion through our market leading advisory,
                  investment, development, influencer marketing and legal
                  support services.
                </p>
                <p>
                </p>
                <p>
                  We help by not only bringing capital and partners, but every
                  aspect of your project from tokenomics to post launch marking.
                </p>
                <div className="pt-3">
                  <a
                    href="https://1facapital.com/"
                    target="_blank"
                    className="btn btn-outline-primary"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="pp-home-advisors-content pp-section-body">
        <div className="container">
          <div className="mt-5">
            <div className="col-lg-12">
              <div className="section-head">
                <h2
                  className="title title-xl text-center"
                  data-aos="fade-up"
                  data-aos-delay={100}
                  title="PARTNER"
                  style={{ textTransform: 'uppercase' }}
                >
                  Legal Partner
                </h2>
              </div>
            </div>
            <div className="text-center mb-5">
              <div className="row justify-content-center mt-4">
                <div className="pb-5 col-lg-12">
                  <div className="pp-card-legal-partner">
                    <img
                      className="mx-auto"
                      src="images/SilkLegal_main_horizontal.png"
                      alt="Silk Legal"
                      width={300}
                    />
                    <div className="mt-4">
                      Silk Legal is a boutique law firm specializing in FinTech
                      and Cryptocurrency. We combine a deep understanding of
                      blockchain technology with an expert knowledge of
                      international regulations to analyze issues, risks and
                      opportunities. Silk Legal is a proud member of Global
                      Digital Finance, the leading global association of digital
                      asset companies advocating for and accelerating the
                      adoption of best practices for digital assets.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
