import React from 'react';
import Link from '../link/Link';
import strings from '../../static/strings';
import './Footer.scss';

const Footer = () => (
  <>
  <footer className="pt-5 pb-5 ui-bg-dark">
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          {strings.global.social.map(function(link, index){
            return <div key={index} className="d-inline pr-4"><Link href={link.url} target="_black" className={"ui-c-" + link.icon} icon={"fab fa-" + link.icon + " ui-fs-3"} /></div>
          })}
          {strings.global.socialSVG.map(function(link, index){
            return <div key={index} className="d-inline pr-4"><Link href={link.url} target="_black" className={"ui-c-" + link.icon} icon={"fab fa-" + link.icon + " ui-fs-3"} /></div>
          })}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="ui-c-white">
            © 2020 — Web app designed and coded by Jose J. Pérez Rivas using JavaScript with Node + React, lot of <span role="img" aria-label="heart">❤️</span> and a few <span role="img" aria-label="beer">🍺</span>
          </div>
        </div>
      </div>
    </div>
    
  </footer>
  <div className="fixed-bottom ui-bg-gradient-blue-green pt-2"></div>
  </>
);

export default Footer;
