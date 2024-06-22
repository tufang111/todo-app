import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import crossIcon from "../../images/closeicon.svg";
import creatIcon from "../../images/creat.svg"

function CreateModuale() {
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
                <span> <img src={creatIcon} alt="Shape" /></span>
                Create module
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
                    <p>Module name</p>
                    <form className='create-module-form' action="/action_page.php">
                        <input type='text' />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    {/* Close button in the footer */}
                    <Button variant="secondary" onClick={handleClose} className='cancelbtn'>
                        Cancel
                    </Button>
                    <Button variant="primary" className='create-btn'>
                        create
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreateModuale;
