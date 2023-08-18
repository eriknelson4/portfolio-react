import { useState, useEffect } from 'react';
import { Modal } from '../../Components/Modals/Modal';
import Standard from '../../Templates/Standard';
import PortfolioItem from './PortfolioItem';
import Website from './Website';
import PortfolioModal from '../../Components/PortfolioModal/PortfolioModal';
import portfolioItems from './portfolioItems.json';
import websites from './websites.json';

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

            {
              websites.map((item) => {
                console.log(item.imgUrl);
                return (
                  <Website
                    key={ item.id }
                    imgUrl={ item.imgUrl }
                    title={ item.title }
                    subtitle={ item.subtitle }
                    link={ item.link }
                  />
                )
              })
            }

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