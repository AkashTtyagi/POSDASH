import './App.css';
import SideBar from './Components/SideNavBar/SideBar/SideBar';
import RightParent from './Components/RightParent/RightParent';

function App() {
  return (
    <div className="app">
      <RightParent />
      <SideBar />
    </div>
  );
}

export default App;
