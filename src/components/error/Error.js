import React from 'react';
import Link from '../common/link/Link';
import strings from '../../../static/strings';
import './Error.scss';

const Error = () => (
  <section className="error container pt-5">
    <div className="row error__bg-avatar">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 error__photo-card"></div>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 offset-lg-4 mt-5 mb-5 ui-shadow animated fadeIn">
        <div className="ui-bg-white p-5">
          <h1 className="ui-fw-700 ui-c-dark mb-4">{strings.error.title}</h1>
          <div className="mb-5">
            {strings.error.text}
          </div>
          <div className="mb-5">
            {strings.error.cat} <span role="img" aria-label="joy cat">😹</span>
          </div>
          <div className="mb-5">
            <Link className="ui-button-green" href={strings.global.href} text="GO TO HOMEPAGE " icon="fas fa-arrow-right" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Error;