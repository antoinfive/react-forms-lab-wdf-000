const React = require('react');

class LoginForm extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: '',
      password: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
 }
  
  handleNameChange(event){
    this.setState({
      username: event.target.value
    }) 
  }

  handlePasswordChange(event){
    this.setState({
      password: event.target.value
    }) 
  }

  handleSubmit(event) {
    event.preventDefault()
    if(this.state.username && this.state.password){
      this.props.onSubmit(this.state.username, this.state.password)
    } 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            {this.state.username}
            <input id="test-username" type="text" onChange={this.handleNameChange} value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            {this.state.password}
            <input id="test-password" type="password" onChange={this.handlePasswordChange} value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

module.exports = LoginForm;
