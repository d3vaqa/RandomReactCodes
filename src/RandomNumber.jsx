import React, {Component} from "react";

class RandomNumber extends Component{
    constructor(props){
        super(props)
        this.state = {number: 0}
    }

    handleClick = e =>{
        const rand = Math.floor(Math.random() * 8 )
        this.setState({number: rand})
    }

    render(){
        return(
            <div>
            {
                this.state.number !== 7 && (
                    <button onClick={this.handleClick}>Random Number</button>
                )                
            }
            {
                this.state.number === 7 && (
                    <h2>game is over</h2>
    
                )
            }

                <h4>{this.state.number}</h4>
            </div>
        )
    }
}

export default RandomNumber