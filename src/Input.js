import React, { Component } from 'react';

class NameForm extends React.Component {
state={
    name:''
}    
handleChange=(e)=>{
    this.setState({
        name:e.target.value
    })
}
render(){
    return(
        <form>
            <input placeholder="name"
            value={this.state.name}
            onChange={this.handleChange}/>
        <div>{this.state.name}</div>
        <button type="submit">check age</button>
        </form>
    )
}
}
  
