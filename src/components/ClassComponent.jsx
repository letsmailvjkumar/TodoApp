import { Component } from "react";

class ClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log(`Component has mounted. Initial count: ${this.state.count}`);
    }

    componentDidUpdate(prevState) {
        if (prevState.count !== this.state.count) {
            console.log(`Count has changed to ${this.state.count}`);
        }
    }

    componentWillUnmount() {
        console.log(`Component will unmount. Final count: ${this.state.count}`);
    }
    
    increment = () => {
        this.setState(prevState => ({ count : prevState.count + 1}))
    }

    decrement = () => {
        this.setState(prevState => ({ count : prevState.count - 1}))
    }
    render(){
        console.log(this.state.count)
        return(
            <div>
                <h1>Class Component</h1>
                <p>Count : {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
            
        ) 
    }  
}
export default ClassComponent
