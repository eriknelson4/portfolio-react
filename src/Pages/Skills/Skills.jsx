import  { useEffect } from 'react';
import Standard from '../../Templates/Standard';
import './Skills.scss';
import skills from './skills.json';

const handleMouseMove = (e) => {
  const { currentTarget: target } = e;
  const rect = target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
}

const Skills = () => {

  useEffect(() => {
    const skills = document.querySelectorAll('#skills .skill');
    for (const skill of skills) {
      skill.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      for (const skill of skills) {
        skill.removeEventListener('mousemove', handleMouseMove);
      }
    }
  }, [])

  return (
    <Standard>
      <article id="skills">
        <h2>Skills</h2>
        <section className="skill-wrap">
          {
            skills.map((skill, i) => {
              return (
                <div key={ `skill-${ i }` } className="skill">
                  <div className="skill-content">
                    <h3>{ skill.title }</h3>
                    <p>{ skill.copy }</p>
                  </div>
                </div>
              )
            })
          }
        </section>
      </article>
    </Standard>
  );
}

export default Skills;