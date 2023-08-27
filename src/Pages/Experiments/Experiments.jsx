import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Standard from '../../Templates/Standard';
import './Experiments.scss';

const Experiments = () => {

  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  useEffect(() => {
    const skills = document.querySelectorAll('#experiments .experiment');
    for (const skill of skills) {
      skill.onmousemove = (e) => handleOnMouseMove(e);
    }
  }, [])

  return (
    <>
      <Standard>
        <article id="experiments">
          <h2>Experiments</h2>

          <section className="experiment-wrap">
            <div className="experiment">
              <NavLink className="experiment-link" to="/guitar">Guitar</NavLink>
              <div className="experiment-content">
                <h3>Guitar</h3>
                <p>Tool for finding scales and modes visually on the guitar and other stringed instruments.</p>
              </div>
            </div>
            <div className="experiment">
              <NavLink className="experiment-link" to="/word-thing">Guitar</NavLink>
              <div className="experiment-content">
                <h3>Word-Thing</h3>
                <p>A clone of that game, with the guessing of the word. You know what I'm talking about.</p>
              </div>
            </div>
          </section>
        </article>
      </Standard>
    </>
  )

}

export default Experiments;