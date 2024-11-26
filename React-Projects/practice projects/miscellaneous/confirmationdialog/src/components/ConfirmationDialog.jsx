import React, {useState} from 'react'

function Dialog(props) {
  return (
    <div className={`modal ${props.show ? 'show' : ''}`}>
      <div className="dialog-content">
        {props.children}
      </div>
    </div>
  )
}

function ConfirmationDialog() {
  const [isDialogVisible, setDialogVisible] = useState(false);

  // Toggle visibility of the dialog
  const toggleDialog = () => {
    setDialogVisible(!isDialogVisible);
  };

  return (
    <>
     <button onClick={toggleDialog}>Show Confirmation</button>
    <Dialog show={isDialogVisible} color = "lightblue">
      <h1 className='dialog-title'>
        Thank You!
      </h1>

      <p className='dialog-message'>
        We're processing your order right now and will get it to you as soon as possible.
      </p>
      <button onClick={toggleDialog}>Close</button>
    </Dialog>

    </>
  )
}

export default ConfirmationDialog;