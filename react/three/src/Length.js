import React from "react";

class Length extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         length: 10
    //     }
    // }

    state = {
        length: 10
    }

    add = () => {
        this.setState({ length: this.state.length + 3 })
    }

    // reset = () => {
    //     this.setState({length: 10})
    // }

    render() {
        return (
            <div>
                <button onClick={this.add}>Add length</button>
                <button onClick={() => this.setState({ length: 10 })}>Reset</button>
                <div><input size={this.state.length} /></div>
            </div>
        )
    }
}

export default Length;