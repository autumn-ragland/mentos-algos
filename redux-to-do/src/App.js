import './App.css';
import { AddTask } from './components/AddTask';
import { TaskContainer } from './components/TaskContainer';

function App() {
  return (
    <div className="App">
      <h4>Redux Practice</h4>
      <AddTask/>
      <TaskContainer/>
    </div>
  );
}

export default App;
