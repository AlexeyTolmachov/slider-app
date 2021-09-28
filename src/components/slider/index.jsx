import React, { Component } from 'react';
import"./slider.css"
import data from './data';


class Carusel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nowImg : 0
    }
  }
  
  imgrender(){
    const{nowImg} = this.state
    this.setState = {
      nowImg : nowImg +1
    }
  }

  render() {
    const {imgrender} =this.imgrender

    return (
      <div className="sliderTitle">
        <img className="imgSlider" alt="slider" src={data[3].src}/>
        <button onClick={imgrender} className="btn">left </button>
      <button className="btn-left">right </button>
      <div className="sliderInfo">
      <h2>The Cosmic Reef: NGC 2014 and NGC 2020</h2>
      <p> Hubble reveals a colorful landscape of iridescent gases, streamers of dust, and brilliant, newborn stars in the giant red nebula NGC 2014. The blue ring of glowing oxygen at left is the neighboring nebula NGC 2020, formed by a torrential gaseous outflow from a lone, massive, super-hot star at its center</p>
      <a href="/contents/news-releases/2020/news-2020-16">Learn More</a>
      </div>
      </div>
     
    );
  }
}

export default Carusel;
