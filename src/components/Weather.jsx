import React from 'react';

class Weather extends React.Component {

  render() {
    const {data} = this.props;
    return (
      <div id="weather">
        <h1>{this.props.data.name}</h1>
        <p>{this.props.data.main.temp} °C</p>
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={this.props.data.weather[0].description} />
        <p className="description">{this.props.data.weather[0].description}</p>
      </div>
    );
  }
}

export default Weather;