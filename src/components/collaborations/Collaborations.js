import React from 'react';
import Link from '../link/Link';
import './Collaborations.scss';

function Collaborations(props) {
  const [first, second] = props.content;
  return (
    <section className="collaborations container pt-5 pb-5">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3 className="ui-fw-700 ui-c-dark mb-4"><span className="h1" role="img" aria-label="video">✍️</span> More Collaborations</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ui-bg-white ui-shadow p-0">
          {first && 
            <div>
              <div>
                <div className="collaborations__bg-image" style={ {backgroundImage:'url(' + first.image + ')' }}></div>
                <div className="p-5">
                  <Link className="ui-c-dark" href={first.url} text={first.title} target='_black' />
                </div>
              </div>
            </div>
          }
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
          <i className="collaborations__icon fas fa-feather-alt mb-5"></i>
          <div><h4 className="ui-c-feather">I also collaborate with some companies writing content.</h4></div>
          {/* <Link className="ui-button-green" href={strings.global.links.youtube} text="VIEW MY CHANNEL " icon="fas fa-arrow-right" target="_blank" /> */}
        </div>
        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 ui-bg-white ui-shadow p-0">
          {second &&
            <div>
              <div>
                <div className="collaborations__bg-image" style={ {backgroundImage:'url(' + second.image + ')' }}></div>
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

export default Collaborations;
