const React = require('react');

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '' 
    }

    this.handleContentChange = this.handleContentChange.bind(this)
  }

  handleContentChange(event){
    this.setState({
      content: event.target.value
    })
    
  }

  // This poem is not written in the right structure!

  checkPoemValidity(content){
   console.log(content.split(" ")) 
  }

  hasThreeWords(content){
    if(content.split("\n").count == 3){
      return ('This poem does not have 3 lines, try again')
    }
  }

  hasFiveWords(line){
  
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.handleContentChange} value={this.state.content} />
        <div id="poem-validation-error" style={{color: 'red'}}>{this.checkPoemValidity(this.state.content)}</div>
      </div>
    );
  }
}

module.exports = PoemWriter;
