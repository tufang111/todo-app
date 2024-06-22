import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import crossIcon from "../../images/closeicon.svg";
import linkIcon from "../../images/link.svg"

function AddALink() {
    // State to control the visibility of the modal
    const [show, setShow] = useState(false);

    // Function to close the modal
    const handleClose = () => setShow(false);

    // Function to show the modal
    const handleShow = () => setShow(true);

    return (
        <>
            {/* Button to trigger the modal display */}
            <Button variant="primary" onClick={handleShow} className='drp-btn'>
                <span> <img src={linkIcon} alt="Shape" /></span>
                Add a link
            </Button>

            {/* Modal component */}
            <Modal show={show} onHide={handleClose} className='create-modual'>
                <Modal.Header>
                    <Modal.Title>Create new module</Modal.Title>
                    <Button variant="secondary" className='closebtn' onClick={handleClose}>
                        <img src={crossIcon} alt="Shape" />
                    </Button>
                </Modal.Header>
                <Modal.Body>
                    <form className='create-module-form' action="/action_page.php">
                        <label>URL</label>
                        <input type='url' placeholder='Link name' />
                        <label>Display name</label>
                        <input type='text' placeholder='Display name' />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    {/* Close button in the footer */}
                    <Button variant="secondary" onClick={handleClose} className='cancelbtn'>
                        Cancel
                    </Button>
                    <Button variant="primary" className='create-btn'>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddALink;
