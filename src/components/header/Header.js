import React from 'react';
import Link from '../link/Link';
import strings from '../../static/strings';

const Header = () => (
  <header>
    <nav className="navbar navbar-light ui-bg-white">
      <div className="ui-fs-125 ui-fw-700">{strings.header.year}<span role="img" aria-label="tada">🎉</span> | <Link className="ui-c-dark" href={strings.global.href} text={strings.global.url} /></div>
      <div className="ui-fs-125 ui-fw-700 ui-c-dark">Created with JavaScript, lot of <span role="img" aria-label="heart">❤️</span> and a few <span role="img" aria-label="beer">🍺</span></div>
    </nav>
  </header>
);

export default Header;
