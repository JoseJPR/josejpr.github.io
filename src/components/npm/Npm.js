import React from 'react';
import strings from '../../static/strings';
import Link from '../link/Link';
import './Npm.scss';

function Npm (props) {

  const [first, ...rest] = props.content;

  return (
    <section className="npm container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3 className="ui-fw-700 ui-c-dark mb-4"><span className="h1" role="img" aria-label="gift">🎁</span> NPM Packages</h3>
        </div>
      </div>
      <div className="row">
        {first && 
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ui-bg-dark p-5 text-center">
                <i className="npm__repositories-icon fab fa-npm ui-c-npm"></i>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 ui-bg-white p-5 ui-shadow">
                <Link className="h4 ui-c-dark" href={first.html_url} text={first.name} target="_blank" />
                <div className="pt-2">{first.description}</div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-5">
                <Link className="ui-button-green" href={strings.global.links.npm} text="VIEW MY PACKAGES IN NPM " icon="fas fa-arrow-right" target="_blank" />
              </div>
            </div>
          </div>
        }
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 github__list mb-5 pt-5 pl-5 pr-5 ui-shadow">
          <ul className="list-unstyled">
            {rest && rest.map(function(pack, index){
              return (
                <li key={index} className="mb-5">
                  <Link className="h4 ui-c-dark" href={pack.html_url} text={pack.name} target="_blank" />
                  <div className="pt-2">{pack.description}</div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div className="clearfix mt-5 mb-5"></div>
    </section>
  );
};

export default Npm;
