import React from 'react';
import strings from '../../static/strings';
import Link from '../link/Link';
import './Phonegapspain.scss';

function Phonegapspain (props) {

  const [first, ...rest] = props.content;

  return (
    <section className="phonegapspain container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3 className="ui-fw-700 ui-c-dark mb-4"><span className="h1" role="img" aria-label="book">📖</span> More about Cordova/PhoneGap</h3>
        </div>
      </div>
      <div className="row">
        {first && 
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ui-bg-dark p-5">
                <i className="phonegapspain__tutorial-icon fab fa-adobe ui-c-adobe"></i>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ui-bg-white p-5 ui-shadow">
                <Link className="h4 ui-c-dark" href={first.post_url} text={first.post_title} target="_blank" />
                <div className="pt-2">{first.post_excerpt}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-5">
                <Link className="ui-button-green" href={strings.global.links.phonegapspain + "/users/ceroyuno/"} text="VIEW MY TUTORIALS IN PHONEGAP SPAIN " icon="fas fa-arrow-right" target="_blank" />
              </div>
            </div>
          </div>
        }
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 phonegapspain__list mb-5 pt-5 pl-5 pr-5 ui-shadow">
          <ul className="list-unstyled">
            {rest && rest.map(function(tutorial, index){
              return (
                <li key={index} className="mb-5">
                  <Link className="h4 ui-c-dark" href={tutorial.post_url} text={tutorial.post_title} target="_blank" />
                  <div className="pt-2">{tutorial.post_excerpt}</div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="clearfix mt-5 mb-5"></div>
    </section>
  )
};

export default Phonegapspain;
