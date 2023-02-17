import ProjectCard from '@/components/ProjectCard';
import { useLaunchpads } from '@/hooks/useLaunchpadPools';
import moment from 'moment-timezone';
import { Nav, Tab } from 'react-bootstrap';

import { useState } from 'react';
export default function Projects() {
  const [key, setKey] = useState('upcoming');
  const pools = useLaunchpads();
  const livePools = pools.filter(
    (pool) =>
      pool.startTime.isBefore(moment().utc()) &&
      pool.endTime.isAfter(moment().utc()),
  );
  const endedPools = pools.filter((pool) =>
    pool.endTime.isBefore(moment().utc()),
  );
  const upcomingPools = pools.filter((pool) =>
    pool.startTime.isAfter(moment.utc()),
  );

  function changeTab(key) {
    setKey(key);
  }
  return (
    <div className="w-full pt-3 mt-5 pp-projects-page">
      <div className="container text-center">
        <div className="p-content-tabs">
          <Tab.Container
            id="project-tabs"
            activeKey={key}
            onSelect={(key) => changeTab(key)}
          >
            <div className="row align-items-start">
              <div className="col-xl-12">
                <Nav variant="tabs">
                  <Nav.Item>
                    <Nav.Link eventKey="upcoming">Upcoming</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="active">Active</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="ended">Ended</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="upcoming">
                <div
                  className="pp-investment "
                  style={{ backgroundImage: 'none', paddingTop: '40px' }}
                >
                  <div className="container text-center">
                    <div className="investment-section-items">
                      <div className="row d-flex">
                        {upcomingPools.map((pool) => (
                          <ProjectCard pool={pool} key={pool.address} />
                        ))}
                        {upcomingPools.length <= 0 && (
                          <div>
                            <span>No projects currently available</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="active">
                <div
                  className="pp-investment pp-open"
                  style={{ paddingTop: '40px' }}
                >
                  <div className="container text-center">
                    <div className="investment-section-items">
                      <div className="row d-flex ">
                        {livePools.map((pool) => (
                          <ProjectCard pool={pool} key={pool.address} />
                        ))}
                        {livePools.length <= 0 && (
                          <div>
                            <span>No projects currently open</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="ended">
                <div
                  className="pp-investment pp-close"
                  style={{ paddingTop: '40px' }}
                >
                  <div className="container text-center">
                    <div className="investment-section-items">
                      <div className="row d-flex ">
                        {endedPools.map((pool) => (
                          <ProjectCard pool={pool} key={pool.address} />
                        ))}
                        {endedPools.length <= 0 && (
                          <div>
                            <span>No projects currently closed</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>

      {/* <div className="pp-investment pp-open">
        <div className="container text-center">
          <div className="row d-flex">
            <div className="text-center col-lg-12">
              <div className="section-text">
                <h2 className="section-title">Projects Open Now</h2>
                <p className="section-description" />
              </div>
            </div>
          </div>
          <div className="investment-section-items">
            <div className="row d-flex ">
              {livePools.map((pool) => (
                <ProjectCard pool={pool} key={pool.address} />
              ))}
              {livePools.length <= 0 && (
                <div>
                  <span>No projects currently open</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-0 pp-investment" style={{ backgroundImage: 'none' }}>
        <div className="container text-center">
          <div className="row d-flex justify-content-center">
            <div className="text-center col-lg-12">
              <div className="section-text">
                <h2 className="section-title">Projects Coming soon</h2>
                <p className="section-description" />
              </div>
            </div>
          </div>
          <div className="investment-section-items">
            <div className="row d-flex">
              {upcomingPools.map((pool) => (
                <ProjectCard pool={pool} key={pool.address} />
              ))}
              {upcomingPools.length <= 0 && (
                <div>
                  <span>No projects currently open</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="pp-investment pp-close">
        <div className="container text-center">
          <div className="row d-flex justify-content-center">
            <div className="text-center col-lg-12">
              <div className="section-text">
                <h2 className="section-title">Projects Closed</h2>
                <p className="section-description" />
              </div>
            </div>
          </div>
          <div className="investment-section-items">
            <div className="row d-flex ">
              {endedPools.map((pool) => (
                <ProjectCard pool={pool} key={pool.address} />
              ))}
              {endedPools.length <= 0 && (
                <div>
                  <span>No projects currently closed</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
