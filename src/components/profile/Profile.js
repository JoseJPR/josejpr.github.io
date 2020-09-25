import React from 'react';
import Link from '../link/Link';
import strings from '../../static/strings';
import './Profile.scss';

const Profile = () => (
  <section className="container pt-5">
    <div className="row bg-avatar">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 photo-card"></div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 offset-lg-4 mt-5 mb-5 ui-shadow animated fadeIn">
        <div className="ui-bg-white p-5">
          <h1 className="ui-fw-700 ui-c-dark mb-4">{strings.global.fullname}</h1>
          <h2 className="ui-c-dark mb-4">
            {strings.profile.resume.map(function(text, index){
              if(index===1 || index===3)
                return <span key={index} className="ui-fw-700">{text}</span>
              return text
            })}
          </h2>
          <div className="mb-5">
            {strings.profile.full_resume.map(function(text, index){
              return <p key={index}>{text}</p>
            })}
          </div>
          <div>
            {strings.global.social.map(function(link, index){
              return <div key={index} className="d-inline pr-4"><Link href={link.url} target="_black" className={"ui-c-" + link.icon} icon={"fab fa-" + link.icon + " ui-fs-3"} /></div>
            })}
            {strings.global.socialSVG.map(function(link, index){
              return <div key={index} className="d-inline pr-4"><Link href={link.url} target="_black" icon={"ui-c-" + link.icon} /></div>
            })}
          </div>
          <div>
            {strings.profile.sendto} <Link href={"mailto:" + strings.global.email} text={strings.global.email} className="ui-c-blue ui-fw-700" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Profile;
