import React from 'react';
import strings from '../../static/strings';
import Link from '../link/Link';
import './Youtube.scss';

function Youtube (props) {

  const [first, second] = props.content;

  return (
    <section className="youtube container pt-5 pb-5">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3 className="ui-fw-700 ui-c-dark mb-4"><span className="h1" role="img" aria-label="video">📹</span> Youtube Videos</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ui-bg-white ui-shadow p-0">
          {first && 
            <div>
              <div>
                <div className="youtube__bg-image" style={ {backgroundImage:'url(' + first.image + ')' }}></div>
                <div className="p-5">
                  <Link className="ui-c-dark" href={first.url} text={first.title} target='_black' />
                </div>
              </div>
            </div>
          }
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
          <i className="youtube__icon fab fa-youtube mb-5"></i>
          <Link className="ui-button-green" href={strings.global.links.youtube} text="VIEW MY CHANNEL " icon="fas fa-arrow-right" target="_blank" />
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ui-bg-white ui-shadow p-0">
          {second &&
            <div>
              <div>
                <div className="youtube__bg-image" style={ {backgroundImage:'url(' + second.image + ')' }}></div>
                <div className="p-5">
                  <Link className="ui-c-dark" href={second.url} text={second.title} target='_black' />
                </div>
              </div>
            </div>
          }
        </div>
      </div>
      <div className="clearfix mt-5 mb-5"></div>
    </section>
  );
};

export default Youtube;
