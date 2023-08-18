const Website = ({title, subtitle, link, imgUrl}) => {
  console.log(imgUrl);
  return (
    <div className="item">
      <a href={ link } target="_blank">
        <img src={ imgUrl } alt={ title } />
        <div role="tooltip">
          <span className="project-title">{ title }</span>
          <span className="tech">{ subtitle }</span>
        </div>
      </a>
    </div>
  );
}

export default Website;