import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';

export class HappyBirthday extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bannerClass: 'banner-hide',
      tempBanner: 'banner-show',
      time: 0
    }
  }
  componentDidMount() {
    const date = new Date();
    const getDay = date.getDate();
    if (getDay >= 24) {
      setTimeout(() => {
        this.showBanner();
      }, 5000);
      this.setState({
        tempBanner: 'banner-hide'

      })
    }

  }

  showBanner = () => {
    this.setState({
      bannerClass: 'banner-show',

    })
  }
  render() {
    return (
      <React.Fragment>
        <div className={`particle ${this.state.tempBanner}`}>
          <Particles
            params={{
              particles: {
                number: {
                  value: 100,
                  density: {
                    enable: true,
                    value_area: 500,
                  }
                },
              },
            }}
          />
          <div className={`temp-banner ${this.state.tempBanner}`}>Waiting for a Suprise
        </div>
        </div>

        <div className="App">
          <header className={`App-header ${this.state.bannerClass}`}>
            Happy Birthday Senorita
        </header>
        </div>
      </React.Fragment>
    );
  }
}

