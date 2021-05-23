import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';

export class HappyBirthday extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bannerClass: 'banner-hide',
      tempBanner: 'banner-show',
      displayAbout: 'about-thoughts-hide',
      time: 0
    }
  }
  componentDidMount() {
    const date = new Date();
    const getDay = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    if (getDay >= 24 && year >= 2021 && month >= 4) {
      setTimeout(() => {
        this.showBanner();
      }, 3000);
      this.setState({
        tempBanner: 'banner-hide'

      })
    }

  }

  showBanner = () => {
    this.setState({
      bannerClass: 'banner-show',
      displayAbout: 'about-thoughts-show',

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
          <div className={`temp-banner ${this.state.tempBanner}`}>Waiting for a Surprise
        </div>
        </div>
        <div className="App">
          <header className={`App-header ${this.state.bannerClass}`}>
            Happy Birthday Senorita
        </header>
        </div>
        <div className={`about-heading ${this.state.displayAbout}`}>
          We love you peda
          <p className='about-thoughts'>Happy Birthday my sweet baby senorita. Sada khush raho, aapka jeevan khushio bhara ho. Swast or khush raho <div> - Chotu</div></p>
          <p className='about-thoughts'> <div> - Parmal</div></p>
          <p className='about-thoughts'>Happy Birthday Gannu, puchhi... I wish you all the best on your Big Day and every day, may your life be full of joy, love and prosperity!
          <div> - aman</div></p>
        </div>
      </React.Fragment>
    );
  }
}

