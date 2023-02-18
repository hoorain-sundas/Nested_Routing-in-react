import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import SignUp from '../Screens/signup';
import Login from '../Screens/login';
import Home from '../Screens/home';
import MainHome from '../Screens/MainHome';
import Dashboardone from '../Screens/DashboardItems/Dashboardone';

function AppRouter(){
    return(
        <>
        <BrowserRouter>
        <nav>
        <div className="text-center mt-4" >
            <ul className="list-style-none">
                {/* <li className='d-inline m-5 fs-5 p-2'><Link to="/">Home</Link></li>
                <li className='d-inline m-5 fs-5 p-2'><Link to="login">Login</Link></li> */}
                <li className='d-inline m-5 fs-5 p-2'><Link to="Dashboardone">Dashboard</Link></li>
            </ul>
        </div>    
        </nav>
        <Routes>
            
            <Route path="/" element={<MainHome />} />
            {/* <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} /> */}
            <Route path="Dashboardone/*" element={<Dashboardone />} />
            </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;