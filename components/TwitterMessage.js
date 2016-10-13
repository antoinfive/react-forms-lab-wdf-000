const React = require('react');

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      characters: props.maxChars,
      value: ''
    };
    this.handleOnInputChange = this.handleOnInputChange.bind(this)
  }

  handleOnInputChange(event){
    this.setState({
      characters: this.state.characters -= 1,
      value: event.target.value 
    })
  }
  render() {
    return (
      <div>
        <strong>Your message: {this.state.characters}</strong>
        <input type="text" onChange={this.handleOnInputChange} value={this.state.value}/>
      </div>
    );
  }
}

module.exports = TwitterMessage;
