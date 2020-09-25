import React from 'react';
import strings from '../../static/strings';

class Connection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onLine: true };
  }

  componentDidMount() {
    this.setState({
      onLine: window.navigator.onLine
    });
    window.addEventListener('online',  this.updateIndicator);
    window.addEventListener('offline', this.updateIndicator);
  }

  updateIndicator = () =>{
    this.setState({
      onLine: window.navigator.onLine
    });
  };
  
  render() {
    return (
      <section className="container-fluid">
      {!this.state.onLine &&
        <div className="row ui-bg-blue">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="ui-c-white text-center p-2"><span role="img" aria-label="satellite">📡</span> {strings.connection.title}</div>
          </div>
        </div>
      }
      </section>
    );
  }
}

export default Connection;
