import React from 'react'
import Mark from './svg/mark'

class LastMap extends React.Component {
  state = {
    isMapOpen: false
  };
  componentDidMount() {
    this.mapLoad();
  }
  render() {
    return (
      <div className="last_bg">
        <div className="last_liter">
          <div className="map__container">
            <div id="map" className={this.getMapClass()} style={{width: 70 + "%", height: 40 + 'rem'}}>
              <div className={this.getMapCloseClass()} onClick={this.mapToggle}></div>
            </div>
            <div className="map__toggle">
              <a className="map__toggle__link" onClick={this.mapToggle}>
                <Mark/>
                <p className="map__toggle__text">open map</p>
                <span className="map__toggle__line"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  mapToggle = ()=> this.state.isMapOpen == false ? this.setState({isMapOpen: true}) : this.setState({isMapOpen: false});
  getMapClass = () => this.state.isMapOpen == false ? "map__hide" : "map__hide map__show";
  getMapCloseClass = ()=> this.state.isMapOpen == false ? "map__close" : "map__close map__close__show";



  mapLoad = () => {
    ymaps.ready(init);   //код яндес карт
    function init(){
      let myMap = new ymaps.Map("map", {
        center: [59.938631, 30.323055],
        zoom: 15,
        controls: []
      });
      let myPlacemark = new ymaps.Placemark([59.938631, 30.323055],
        {
          hintContent: 'Hello',
          balloonContent: 'We are here'
        });
      myMap.geoObjects.add(myPlacemark);
      myMap.behaviors.disable('scrollZoom');
    }
  }
}

export default LastMap