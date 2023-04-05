import Standard from '../../Templates/Standard';
import './Skills.scss';

const Skills = () => {
  return (
    <Standard>
      <div id="skills">

        <h2>Skills</h2>

        <div className="skill-wrap hidden">
          <div className="skill">
            <h3>HTML</h3>
            <p>HTML is usually the easy part of any project, especially when we're using frameworks to build it dynanically. I have extensive experience in building HTML both with frameworks like React and the old-fashioned way.</p>
          </div>

          <div className="skill">
            <h3>CSS</h3>
            <p>I build responsive, accessible websites from prototypes in design software like Adobe Photoshop and Adobe
              XD, using the latest CSS with broad browser support on both desktop and mobile platforms.</p>
          </div>

          <div className="skill">
            <h3>React</h3>
            <p>I've come to really love the flexibility and speed that come from working in React. For small- to medium-sized projects there's really no better way to get a site built and deployed quickly. </p>
          </div>

          <div className="skill">
            <h3>Git/GitHub</h3>
            <p>I'm experienced with code version control, branch management, and collaborative workflows in Git and
              GitHub. I created and manage a large repository for HTML content on multiple websites using both shared,
              custom JavaScript and CSS assets.</p>
          </div>

          <div className="skill">
            <h3>JavaScript</h3>
            <p>I've built a number of front-end interactive elements, animations, and interfaces with back-end APIs
              using JavaScript from sliders to modals to fully interactive product configurators. I've got some experience with modern JavaScript frameworks like React as well.</p>
          </div>

          <div className="skill">
            <h3>Typescript</h3>
            <p>While Typescript is not currently part of the build process in my current work, I've used it occasionally
              in side-projects and am familiary with its benefits and drawbacks.</p>
          </div>

          <div className="skill">
            <h3>WCAG/A11y</h3>
            <p>Part of my work has been taking responsibilty for updating our websites to adhere as closely as possible
              to WCAG accessibility guidelines, including coding JavaScript widgets allowing for keyboard navigation,
              etc., as required.</p>
          </div>

          <div className="skill">
            <h3>Node.js</h3>
            <p>I've used Node to build serverless APIs for several projects, most notably a hummingbird
              migration map that interfaces with several APIs, including Firebase, Google Maps, and Magento.</p>
          </div>

          <div className="skill">
            <h3>Google Firebase/Cloud Functions</h3>
            <p>I've made use of Google Cloud Services for several projects, including the hummingbird migration map
              mentioned above. This has included NOSQL databases, form processing, cloud functions, and cloud storage.</p>
          </div>

          <div className="skill">
            <h3>Microsoft Power Automate</h3>
            <p>I've automated processes by using PowerAutomate, including forms which feed to
              various Excel sheets, databases, etc., and interfacing with desktop software like Microsoft Teams for approval functionality for image submission, etc.</p>
          </div>

          <div className="skill">
            <h3>Magento</h3>
            <p>While I am not a Magento developer, I've become very familiar and comfortable with the Magento admin and
              the opportunities and limits to creating content for Magento from within the admin.</p>
          </div>

        </div>
      </div>


    </Standard>
  );
}

export default Skills;