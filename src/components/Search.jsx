import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    return <form id="search" onSubmit={this.handleSubmit}>
    <input type="search" name="city" placeholder="Enter your City" onChange={this.handleChange} value={this.props.city} />
    <button type="submit">
      <SearchIcon />
    </button>
  </form>;
  }
}

export default Search;