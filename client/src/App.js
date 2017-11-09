import React from 'react';
import ReactDom from 'react-dom';
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'font-awesome/css/font-awesome.css';


class AppWrapper extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="container">
            <Routes/>
          </div>
        </div>
      </BrowserRouter>

    );
  }
}

ReactDom.render(
  <AppWrapper/>, document.getElementById('react-app'));
