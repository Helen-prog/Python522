import React from "react";

class Form extends React.Component{
    state = {
        firstName: "",
        email: ""
    }

    update = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    // update2 = (event) => {
    //     this.setState({email: event.target.value})
    // }

    render(){
        let {firstName, email} = this.state;
        return (
            <>
                <hr />
                <form>
                    <input value={firstName} name="firstName" onChange={this.update} />
                    <input value={email} name="email" onChange={this.update} />
                </form>
                <hr />
                <p>{firstName}</p>
                <p>{email}</p>
            </>
        )
    }
}

export default Form;