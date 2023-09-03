import Standard from '../../Templates/Standard';
import './Home.scss';
import tools from './tools.json';

const About = () => {
  return (
    <Standard id="about">
      <div className="main-content column-wrap">
        <div className="about-copy">
          <h2>I build websites.</h2>
          <p>I'm a front-end developer located in central Pennsylvania. For over seven years I've worked on content and other projects for a consumer goods company with multiple eCommerce websites using the Magento platform. My work has focused on using JavaScript for front-end UI components as well as interfacing with back-end APIs. I've worked on larger projects requiring the building of custom APIs using Google Cloud Services, Firebase and cloud functions. I've also been responsible for implementing WCAG recommendations for website accessibility.</p>
          <p>For the last several years I've been expanding into React and Node and other technologies for building full-stack, serverless projects. I enjoy learning new frameworks and technologies and finding the right mix of solutions to bring a project to life. </p>
        </div>

        <div className="tools">
          <div className="tools-wrap">
            {
              tools.map((tool, i) => {
                return (
                  <div key={ `tool-${ i }` } className="tool">
                    <img src={ '/skills/' + tool.imgurl } alt={ tool.title } title={ tool.title } width="300" height="300"/>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </Standard>
  )
}

export default About;