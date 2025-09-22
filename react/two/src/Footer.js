import React from "react";

class Footer extends React.Component{
    render(){
        let {text} = this.props;
        return(
            <footer style={{background: "#0088FF", padding: "20px 0", fontSize: "20px", color: "#FFF"}}>
                <p>{text}</p>
            </footer>
        )
    }
}

export default Footer;