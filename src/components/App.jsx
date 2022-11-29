import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {Home} from "../Pages/Home/Home";
import {Login} from "../Pages/Login/Login";
import {Registration} from "../Pages/Registration/Registration";
import {SuccessLogin} from "../Pages/SuccesLogin/SuccessLogin";




function App () {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/registration' element={<Registration/>} />
                <Route path='/afterlogin' element={<SuccessLogin/>} />
            </Routes>
        </Router>
    )
}
export default App
