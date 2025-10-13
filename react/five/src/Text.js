import { useState, useEffect } from "react";

function Text(){
    let [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => setVisible(false), 2000)
    }, [])

    return (
        <div>
            {visible && <p style={{background: "yellow"}}>Hello</p>}
        </div>
    )
}

export default Text;