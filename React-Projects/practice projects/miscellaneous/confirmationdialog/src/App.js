import logo from './logo.svg';
import './App.css';
import ConfirmationDialog from './components/ConfirmationDialog';
import Button from './components/Button';
import Alert from './components/Alert';

function DeleteBtn(){
  return <Button backgroundColor= "red">Delete</Button>
}

function App() {
  return (
    // <div className="App">
    //   <ConfirmationDialog />
    // </div>
    <div className='App'>
      <header>Little Leamon Restaurant</header>
      <Alert>
      <h4 className='dialog-title'>Delete Account!</h4>
      <p className='dialog-message'>
        Are you sure, you want to proceed? You will miss all your delicious recipes!
      </p>
      <DeleteBtn />
      </Alert>
    </div>
  );
}

export default App;
