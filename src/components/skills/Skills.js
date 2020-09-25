import React from 'react';
import strings from '../../static/strings';
import './Skills.scss';

const Skills = () => (
  <section className="container pt-10">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h3 className="ui-fw-700 ui-c-dark mb-4"><span className="h1" role="img" aria-label="mortar board">🎓</span>Skills</h3>
      </div>
    </div>
    <div className="row">
      {strings.skills.map(function(skill, index){
        return ( 
          <div key={ index } className="col-xs-12 col-sm-12 col-md-6 col-lg-4 p-0 mb-5 skill-card ui-bg-white ui-shadow animated fadeIn">
            <div className="p-5 ui-c-black">
              <h4 className="ui-fw-700 ui-c-dark mb-4">{skill.title}</h4>
              {skill.technologies.map(function(technology, index){
                return <div key={index}>{technology.title}</div>
              })}
            </div>
          </div>
        )
      })}
    </div>
    <div className="clearfix mt-5 mb-5"></div>
  </section>
);

export default Skills;
