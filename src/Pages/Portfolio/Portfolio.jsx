import { useState, useEffect } from 'react';
import { Modal } from '../../Components/Modals/Modal';
import { useUI } from '../../Context/UIContext';
import Standard from '../../Templates/Standard';
import PortfolioItem from './PortfolioItem';
import PortfolioModal from '../../Components/PortfolioModal/PortfolioModal';
import portfolioItems from './portfolioItems.json';

import './Portfolio.scss';

const Portfolio = () => {
  const [ currentModal, setCurrentModal ] = useState('');
  const [ isModalOpen, setIsModalOpen ] = useState(null);

  useEffect((val) => {
    setIsModalOpen(val);
  }, [isModalOpen])

  const openPortfolioModal = (id) => {
    setCurrentModal({ ...portfolioItems[id] });
    setIsModalOpen(true);
  }

  return (
    <>
      <Standard>

        <section id="portfolio" role="tabpanel">

          <h2>Portfolio</h2>

          <div className="wrap main-items">

            {
              portfolioItems.map((item) => {
                return (
                  <PortfolioItem
                    key={ item.id }
                    id={ item.id }
                    openPortfolioModal={ openPortfolioModal }
                    title={ item.title }
                    imgUrl={ item.imgUrl }
                    tech={ item.tech }
                  />
                )
              })
            }

          </div>

          <h2>Websites</h2>

          <div className="website-wrap">
            <div className="item">
              <a href="https://www.dynatrap.com/" target="_blank">
                <img src="/sites/dynatrap.jpg" alt="DynaTrap" width="500" height="244"/>
                <div role="tooltip">
                  <span className="project-title">DynaTrap</span>
                  <span className="tech">www.dynatrap.com</span>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="https://www.perkypet.com/" target="_blank">
                <img src="/sites/perkypet.jpg" alt="Perky-Pet" width="500" height="245"/>
                <div role="tooltip">
                  <span className="project-title">Perky-Pet</span>
                  <span className="tech">www.perkypet.com</span>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="https://www.victorpest.com/" target="_blank">
                <img src="/sites/victorpest.jpg" alt="Victor Pest" width="500" height="245"/>
                <div role="tooltip">
                  <span className="project-title">Victor</span>
                  <span className="tech">www.victorpest.com</span>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="https://www.saferbrand.com/" target="_blank">
                <img src="/sites/safer.jpg" alt="Safer" width="500" height="240"/>
                <div role="tooltip">
                  <span className="project-title">Safer</span>
                  <span className="tech">www.saferbrand.com</span>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="https://www.zarebasystems.com/" target="_blank">
                <img src="/sites/zareba.jpg" alt="Zareba Systems" width="500" height="244"/>
                <div role="tooltip">
                  <span className="project-title">Zareba Systems</span>
                  <span className="tech">www.zarebasystems.com</span>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="https://www.mosquitomagnet.com/" target="_blank">
                <img src="/sites/mosquitomagnet.jpg" alt="Mosquito Magnet" width="500" height="245"/>
                <div role="tooltip">
                  <span className="project-title">Mosquito Magnet</span>
                  <span className="tech">www.mosquitomagnet.com</span>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="https://www.havahart.com/" target="_blank">
                <img src="/sites/havahart.jpg" alt="Havahart" width="500" height="244"/>
                <div role="tooltip">
                  <span className="project-title">Havahart</span>
                  <span className="tech">www.havahart.com</span>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="https://www.terro.com/" target="_blank">
                <img src="/sites/terro.jpg" alt="TERRO" width="500" height="244"/>
                <div role="tooltip">
                  <span className="project-title">TERRO</span>
                  <span className="tech">www.terro.com</span>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="https://vlink.victorpest.com/" target="_blank">
                <img src="/sites/vlink.jpg" alt="VLINK" width="500" height="245"/>
                <div role="tooltip">
                  <span className="project-title">VLINK</span>
                  <span className="tech">vlink.victorpest.com</span>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="https://www.woodstreambrands.ca/" target="_blank">
                <img src="/sites/woodstreambrands.jpg" alt="Woodstream Brands Canada" width="500" height="232"/>
                <div role="tooltip">
                  <span className="project-title">Woodstream Brands Canada</span>
                  <span className="tech">www.woodstreambrands.ca</span>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="https://www.woodstream.com/" target="_blank">
                <img src="/sites/woodstream.jpg" alt="Woodstream Corporate" width="500" height="244"/>
                <div role="tooltip">
                  <span className="project-title">Woodstream Corporate</span>
                  <span className="tech">www.woodstream.com</span>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="https://www.woodstreampartnerportal.com/" target="_blank">
                <img src="/sites/woodstream-partner-portal.jpg" alt="Woodstream Partner Portal" width="500" height="244"/>
                <div role="tooltip">
                  <span className="project-title">Partner Portal</span>
                  <span className="tech">woodstreampartnerportal.com</span>
                </div>
              </a>
            </div>
          </div>

        </section>

      </Standard>

      <Modal isOpen={ isModalOpen } setModalOpen={ setIsModalOpen } id="portfolio-modal">
        <PortfolioModal currentModal={ currentModal }/>
      </Modal>

    </>
  );
}

export default Portfolio;