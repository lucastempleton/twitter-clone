import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  function changeUser(user){setCurrentUser(user)}
  function changeAuth(){setIsAuthenticated(!isAuthenticated)}
  useEffect(() => {
    fetch("api/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log(user)
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);
  return (
    <Routes>
      {/* <Route exact path="/" element={<HomePage user={currentUser} />} /> */}
      <Route exact path="/" element={isAuthenticated ? <HomePage user={currentUser} /> : <LoginPage setCurrentUser={changeUser} setIsAuthenticated={changeAuth} />} />
    </Routes>
  );
}

export default App;
