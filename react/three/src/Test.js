import React from "react";

class Test extends React.Component{

    constructor(props){
        console.clear();
        super(props);
        console.log("Constructor");
        this.state = {
            s1: 0
        }
    }

    buttonHandler = () => {
        console.log("Work");
        let val = this.state.s1;
        val++;
        this.setState({s1: val});
    }

    
 
    render(){
        console.log("Render");
        
        return(
            <>
                {
                    console.log("Retern")
                }
                <div>
                    <button onClick={this.buttonHandler}>Push</button>
                </div>
                <div>
                    {
                        this.state.s1
                    }
                </div>
            </>
        )
    }
}

export default Test;