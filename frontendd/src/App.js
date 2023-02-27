import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddPhone from "./components/AddPhone";
import PhoneList from "./components/PhoneList";
import EditPhone from "./components/EditPhone";

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path="/" element={<PhoneList/>}/>
          <Route path="/add" element={<AddPhone/>}/>
          <Route path="/edit/:id" element={<EditPhone/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
