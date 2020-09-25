import React from 'react';
import './Link.scss';

const Link = (props) => {
  props = {
    className: props.className || null,
    href: props.href,
    target: props.target || '_self',
    text: props.text || null,
    icon: props.icon || null,
    html: props.html || null
  }
  return(
    <a className={'ui-link animated ' + props.className}
      href={props.href}
      target={props.target}
    >
      { props.text &&
        <span>{props.text}</span>
      }
      { props.icon &&
        <i className={props.icon} />
      }
      { props.html &&
        <span dangerouslySetInnerHTML={{ __html: props.html }} />
      }
    </a>
  )
};

export default Link;
