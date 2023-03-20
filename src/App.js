import './App.css';
import Form from './components/forms/Form';

function App() {

  return (
    <div className="App">
      <h1>Test</h1>
      <Form user={
        {name: '',
        email: '',
        bio: '',
        select: ''
      }}/>
    </div>
  );
}

export default App;
