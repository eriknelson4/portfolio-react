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

        </section>

      </Standard>

      <Modal isOpen={ isModalOpen } setModalOpen={ setIsModalOpen } id="portfolio-modal">
        <PortfolioModal currentModal={ currentModal }/>
      </Modal>

    </>
  );
}

export default Portfolio;