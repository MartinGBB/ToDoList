import { Navigate } from "react-router-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import TaskDetails from "./pages/TaskDetails";
import ToDoList from './pages/ToDoList';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigate to="/tasks" /> } />
          <Route path="tasks" element={<ToDoList />} />
          <Route path="/tasks/:taskId" element={<TaskDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
