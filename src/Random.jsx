import React, {Component} from "react";

class Random extends Component{
    constructor(props){
        super(props)
        this.state = {
            num : 0,
        };
        this.makeTimer()
    }


    makeTimer(){
        setInterval(()=>{
            let rand = Math.floor(Math.random() * this.props.maxNum)
            this.setState({num: rand})
        }, 10000)
    }

    render(){
        return <div> {this.state.num}</div>
    }
}



export default Random