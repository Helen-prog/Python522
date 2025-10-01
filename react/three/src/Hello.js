import React from 'react';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Привет"
        }
    }

    changeText = () => {
        this.setState({text: !this.state.text});
    }

    // resetText = () => {
    //     this.setState({text: "Привет"});
    // }

    render() {
        return (
            <div>
                <button onClick={this.changeText}>Заменить</button>
                {/* <button onClick={this.resetText}>Сбросить</button> */}
                <p>{this.state.text ? "Hello" : "Привет"}</p>
            </div>
        )
    }
}

export default Hello;