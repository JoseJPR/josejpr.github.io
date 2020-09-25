import React from 'react';
import strings from '../../static/strings';
import Link from '../link/Link';
import './PWAExperts.scss';

function PWAExperts (props) {

  const [first, ...rest] = props.content;

  return (
    <section className="pwaexperts container pt-5">
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h3 className="ui-fw-700 ui-c-dark mb-4"><span className="h1" role="img" aria-label="rocket">🚀</span> Talking about PWA</h3>
        </div>
      </div>
      <div className="row">
        {first && 
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
            <div className="row">
              <div className="col-12 shadow">
                <div className="row">
                  <div className="pwaexperts__bg-image" style={ {backgroundImage:'url(https://panel.pwaexperts.io' + first.image.url + ')' }}></div>
                  <div className="p-5">
                    <Link className="h4 ui-c-dark" href={strings.global.links.pwaexperts + first.url} text={first.title} target='_black' />
                    <div className="pt-2">{first.excerpt}</div>
                    {first.keywords &&
                      <div className="mt-2">
                        {first.keywords.split(', ').map(function(keyword, index){
                          return <span key={index} className="h5 pwaexperts__tag pl-4 pr-4 pt-2 pb-2 mr-3">{keyword}</span>
                        })}
                      </div>
                    }
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-5">
                <Link className="ui-button-green" href={strings.global.links.pwaexperts + "/profile/JoseJPR"} text="VIEW MORE IN PWA EXPERTS I/O " icon="fas fa-arrow-right" target="_blank" />
              </div>
            </div>
          </div>
        }
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 pwaexperts__list mb-5 pt-5 pl-5 pr-5 ui-shadow">
          <ul className="list-unstyled">
            {rest && rest.map(function(publication, index){
              return (
                <li key={index} className="mb-5">
                  <Link className="h4 ui-c-dark" href={"https://pwaexperts.io" + publication.url} text={publication.title} target="_blank" />
                  <div className="pt-2">{publication.excerpt}</div>
                  {publication.keywords &&
                    <div className="mt-2">
                      {publication.keywords.split(', ').map(function(keyword, index){
                        return <span key={index} className="h5 pwaexperts__tag pl-4 pr-4 pt-2 pb-2 mr-3">{keyword}</span>
                      })}
                    </div>
                  }
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

export default PWAExperts;
