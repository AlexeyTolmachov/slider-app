import React, { Component } from "react";
import "./slider.css";
import data from "./data";

class Carusel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowImg: 0,
      arr: data,
      playPause: false,
      speed: 0,
      maxScrean: false,
    };
  }
  fullScrean = () => {
    const { maxScrean } = this.state;
    this.setState({
      maxScrean: !maxScrean,
    });
  };
  forward = () => {
    let { nowImg } = this.state;
    const { arr } = this.state;
    if (nowImg === arr.length - 1) {
      this.setState({ nowImg: 0 });
    } else {
      this.setState({ nowImg: nowImg + 1 });
    }
  };
  back = () => {
    let { nowImg } = this.state;
    const { arr } = this.state;
    if (nowImg === 0) {
      this.setState({ nowImg: arr.length - 1 });
    } else {
      this.setState({ nowImg: nowImg - 1 });
    }
  };

  speedVolplus = () => {
    const { speed } = this.state;
    if (speed <= 5000) {
      this.setState({ speed: speed + 200 });
    } else {
      this.setState({ speed: speed });
    }
  };

  speedVolmin = () => {
    const { speed } = this.state;
    if (speed === 0) {
      this.setState({ speed: speed });
    } else {
      this.setState({ speed: speed - 200 });
    }
  };

  run = () => {
    const { speed } = this.state;
    const { playPause } = this.state;
    const qwe = setInterval(() => {
      this.forward();
    }, speed);
    if (playPause) {
      clearInterval(qwe);
    } else {
      return;
    }
  };

  playState = () => {
    const { playPause } = this.state;
    this.setState({
      playPause: !playPause,
    });
  };

  render() {
    const { speed } = this.state;
    console.log(speed);
    const { nowImg } = this.state;
    const { maxScrean } = this.state;
    let size;
    if (maxScrean) {
      size = (
        <img onClick={this.fullScrean} className="imgSliderRaz" alt="slider" src={data[nowImg].src} />
      );
    } else {
      size = <img className="imgSlider" alt="slider" src={data[nowImg].src} />;
    }

    return (
      <div className="sliderTitle">
        <div className="wrapper">
        {size}
        <div>
          <button onClick={this.back} className="btn">
            &#9664;
          </button>
          <button onClick={this.forward} className="btn">
            &#9654;{nowImg}
          </button>

          <button onClick={this.run} className="btn">Run
          </button>
          <button onClick={this.speedVolmin} className="btn">
            -{" "}
          </button>
          <button onClick={this.speedVolplus} className="btn">
            +
          </button>
          <button onClick={this.fullScrean} className="btn">
             &#10696;
          </button>
          <button onClick={this.playState} className="btn">
         {speed} ms
          </button>
        </div>
        <div className="sliderInfo">
          <h2>The Cosmic Reef: NGC 2014 and NGC 2020</h2>
          <p>
            {" "}
            Hubble reveals a colorful landscape of iridescent gases, streamers
            of dust, and brilliant, newborn stars in the giant red nebula NGC
            2014. The blue ring of glowing oxygen at left is the neighboring
            nebula NGC 2020, formed by a torrential gaseous outflow from a lone,
            massive, super-hot star at its center
          </p>
          <a href="/contents/news-releases/2020/news-2020-16">Learn More</a>
        </div>
        </div>
      </div>
    );
  }
}

export default Carusel;
