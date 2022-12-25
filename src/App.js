import Register from './Register';
import Login from './Login';
import { Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
<Routes>
<Route path='/'element={<Login/>} />
<Route path='Register.js' element={<Register/>} />
<Route path='Login.js' element={<Login/>} />
</Routes>

    </div>
  );
}

export default App;
