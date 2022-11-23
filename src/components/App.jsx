import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {Home} from "./Home/Home";
import {Login} from "./Login/Login";
import {Registration} from "./Registration/Registration";



function App () {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/registration' element={<Registration/>} />
            </Routes>
        </Router>
    )
}
export default App
