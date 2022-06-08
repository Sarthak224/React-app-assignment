import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import AppBody from './Components/AppBody';
function App() {
  return (
    <div style={{display:'flex'}} >
      <Sidebar/>
      <AppBody/>
    </div>
  );
}

export default App;
