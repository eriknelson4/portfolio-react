import Standard from '../../Templates/Standard';
import './Home.scss';

const About = () => {

  const skills = [
    { title: 'HTML', imgurl: 'html.png' },
    { title: 'CSS', imgurl: 'css.png' },
    { title: 'JavaScript', imgurl: 'javascript.png' },
    { title: 'TypeScript', imgurl: 'typescript.png' },
    { title: 'React', imgurl: 'react.png' },
    { title: 'SASS', imgurl: 'sass.png' },
    { title: 'Git', imgurl: 'git.png' },
    { title: 'NodeJS', imgurl: 'node-js.png' },
    { title: 'Docker', imgurl: 'docker.png' },
    { title: 'Power Automate', imgurl: 'power-automate.png' },
    { title: 'Google Cloud', imgurl: 'google-cloud.png' },
    { title: 'Adobe Creative Cloud', imgurl: 'creative-cloud.png' },
    { title: 'Magento', imgurl: 'magento.png' }
  ]

  return (
    <Standard id="about">
      <div className="column-wrap">
        <div className="about-copy">
          <h2>About Me</h2>
          <p>I'm a front-end developer living in central Pennsylvania. For seven years I've worked on content and other projects for a consumer goods company with multiple eCommerce websites using the Magento platform. My work has focused on using JavaScript for front-end UI components as well as interfacing with back-end APIs.</p>
          <p>I've worked on larger projects requiring the building of custom APIs using Google Cloud Services, Firebase and cloud functions. I've also been responsible for implementing WCAG recommendations for website accessibility.</p>
          <p>Lately I've been expanding into React and Node and other technologies for building full-stack projects. I enjoy learning new frameworks and technologies and finding the right mix of solutions to bring a project to life. </p>
        </div>

        <div className="tools">
          <div className="tools-wrap">
            {
              skills.map((skill, i) => {
                return (
                  <div key={ i } className="tool">
                    <img src={ '/skills/' + skill.imgurl } alt={ skill.title } title={ skill.title } width="300" height="300"/>
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