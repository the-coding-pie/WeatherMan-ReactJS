import React from 'react';

class Data extends React.Component {
  render() {
    return <div id="data">
      {this.props.data}
    </div>;
  }
}

export default Data;