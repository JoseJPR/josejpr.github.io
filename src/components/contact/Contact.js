import React from 'react';
import Link from '../link/Link';
import strings from '../../static/strings';

const Contact = () => (
  <section className="container-fluid ui-bg-blue mt-10 pt-10 text-center">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <h3 className="ui-fw-700 ui-c-white mb-4">{strings.contact.title.es}</h3>
        <h3 className="ui-fw-700 ui-c-white mb-4">{strings.contact.title.en}</h3>
        <div>
          <Link className="ui-button-green" href={"mailto:" + strings.global.email} text="Send email to: me@josejpr.com " icon="far fa-envelope" target="_blank" />
        </div>
      </div>
    </div>
    <div className="clearfix pt-5 pb-5"></div>
  </section>
);

export default Contact;
