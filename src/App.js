import './App.css';
import {Provider} from 'react-redux';
import ContactsContainer from './components/contact/ContactsContainer';
import store from './store/contactStore';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <ContactsContainer/>
      </div>
    </Provider>
    
  );
}

export default App;
