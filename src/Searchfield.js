import React, { Component } from 'react';
import './Searchfield.css'



class Searchfield extends Component {
  
  add(event)
  {
    event.preventDefault();
    console.log(event.target.gif.value);

    if(event.target.gif.value !== ''){
    fetch("https://api.giphy.com/v1/gifs/search?q="+event.target.gif.value+"&api_key=vxkSbg5S9kDqRaM2RqXtACQUlggmLUQ6")
    .then(res => res.json())
    .then(result => {this.props.add(result)})
    
  }
  else
  {
    alert("There is nothing in Search!")
  }
  }

  
render() {


return (

  <form onSubmit={(e)=>this.add(e)}>
    <div className="Searchfield">
        <header className="App-header">
        <h1>GIPHY</h1>
        </header>  
      </div>    
  <input id="textbox" type="text" name="gif"/>
  <br></br>
  <button id="submit" >Submit</button>
  </form>
)
}
}

  export default Searchfield
            