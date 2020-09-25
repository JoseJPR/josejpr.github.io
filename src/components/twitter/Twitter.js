import React from 'react';
import strings from '../../static/strings';
import Link from '../link/Link';
import './Twitter.scss';

function Twitter (props) {

  const [first, second] = props.content;

  return (
    <section className="twitter container pt-10">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3 className="ui-fw-700 ui-c-dark mb-4"><span className="h1" role="img" aria-label="coffee">☕️</span> Last tweets</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ui-bg-white ui-shadow p-0">
          {first &&
            <div>
              {first.entities.media ? (
                <div>
                  <div className="twitter__bg-image" style={ {backgroundImage:'url(' + first.entities.media[0].media_url_https + ')' }}></div>
                  <div className="p-5">
                    <Link className="ui-c-dark" href={strings.global.links.twitter + '/status/' + first.id_str} text={first.text} target='_black' />
                  </div>
                </div>
              ) : (
                  <div className="p-5">
                    <Link className="h4 ui-c-dark" href={strings.global.links.twitter + '/status/' + first.id_str} text={first.text} target='_black' />
                  </div>
              )}
            </div>
          }
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
          <i className="twitter__icon fab fa-twitter mb-5"></i>
          <Link className="ui-button-green" href={strings.global.links.twitter} text="VIEW MY TWITTER " icon="fas fa-arrow-right" target="_blank" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ui-bg-white ui-shadow p-0">
          {second && 
            <div>
              {second.entities.media ? (
                <div>
                  <div className="twitter__bg-image" style={ {backgroundImage:'url(' + second.entities.media[0].media_url_https + ')' }}></div>
                  <div className="p-5">
                    <Link className="ui-c-dark" href={strings.global.links.twitter + '/status/' + second.id_str} text={second.text} target='_black' />
                  </div>
                </div>
              ) : (
                  <div className="p-5">
                    <Link className="h4 ui-c-dark" href={strings.global.links.twitter + '/status/' + second.id_str} text={second.text} target='_black' />
                  </div>
              )}
            </div>
          }
        </div>
      </div>
      <div className="clearfix mt-5 mb-5"></div>
    </section>
  );
};

export default Twitter;
