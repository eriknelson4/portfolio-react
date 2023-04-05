const PortfolioItem = ({ id, imgUrl, title, tech, openPortfolioModal }) => {
  return (
    <button onClick={ () => { openPortfolioModal(id) } } className="item modal-control">
      <img loading="lazy" src={ imgUrl } alt={ title } width="300" height="208"></img>
      <div role="tooltip">
        <span className="project-title">{ title }</span>
        <span className="tech">{ tech }</span>
      </div>
    </button>
  )
}

export default PortfolioItem;