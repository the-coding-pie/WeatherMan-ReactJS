import React from 'react';
import Search from './components/Search';
import Data from './components/Data';
import Weather from './components/Weather';
import clear from './img/clear_sky.jpg';
import clouds from './img/clouds.jpg';
import drizzle from './img/drizzle.jpg';
import mist from './img/mist.jpg';
import rain from './img/rain.jpg';
import snow from './img/snow.jpg';
import thunderstorm from './img/thunderstorm.jpg';
import def from './img/default.jpg';

const key = "your_key";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      data: <p>Search for you city... :)</p>,
      loading: false,
      bg: def
    }; 

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      city: event.target.value
    });
  }

  handleSubmit() {
    //api req
    this.setState({loading: true});
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city.toLowerCase()}&appid=${key}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({loading: false});
      if (data.cod === "404") {
        console.log("404");
        this.setState({data: <p>{data.message} :(</p> });
      } else if (data.cod === 200) {
        const id = data.weather[0].id;
        if (id > 800) {
          this.setState({bg: clouds});
        } else if (id === 800) {
          this.setState({bg: clear});
        } else if (id >= 700) {
          this.setState({bg: mist});
        } else if (id >= 600) {
          this.setState({bg: snow});
        } else if (id >= 500) {
          this.setState({bg: rain});
        } else if (id >= 300) {
          this.setState({bg: drizzle});
        } else if (id >= 200) {
          this.setState({bg: thunderstorm});
        } else {
          this.setState({bg: def});
        }
        this.setState({data: <Weather data={data} />});
      }
      this.setState({
        city: ""
      });
    })
    .catch(error => console.log(error));
  }

  render() {
   return (
    <div id="background" style={{
      backgroundImage: `url(${this.state.bg})`
    }}>
      <Search city={this.state.city} onChange={this.handleChange} onSubmit={this.handleSubmit} />
      <Data data={this.state.loading === false ? this.state.data : <p>Loading...</p>} />
    </div>
   );  
  }
}

export default App;