import {useState} from 'react';
import './Modal.css';

function Modal(){
    let [open, setOpen] = useState(false);

    let image = "https://i.pinimg.com/736x/4e/63/fd/4e63fd02100d3d22db2d70c268410a79.jpg";

    return(
        <div>
            <img src={image} className='small' alt="" onClick={() => setOpen(true)} style={{ display: open ? "none" : "block" }} />

            {open && (<div>
                <div>
                    <img src={image} className='big' alt="" onClick={() => setOpen(false)} />
                </div>
            </div>)}            

        </div>
    )
}

export default Modal;