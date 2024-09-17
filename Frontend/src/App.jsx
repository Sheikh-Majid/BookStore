
import Books from './Books/Books';
import Home from './Home/Home';
import { Route , Routes , BrowserRouter as Router, Navigate } from 'react-router-dom';
import SignUp from './signup/SignUp';
import Contact from './Contact/Contact';
import { useAuth } from './context/AuthProvider';
import AboutUs from './AboutUs/about';




function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log("user ki information", authUser);

  return (
    <>
      <div className=" dark:bg-slate-600 dark:text-white">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/books"
              element={authUser ? <Books /> : <Navigate to="/signup" />}
            />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App
