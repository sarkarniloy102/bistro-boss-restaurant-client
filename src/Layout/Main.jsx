import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";


const Main = () => {
    const location = useLocation();
    const path = location.pathname.includes('/login');
    return (
        <div>
            {
                path || <NavBar></NavBar>
            }

            <Outlet></Outlet>
            {
                path || <Footer></Footer>
            }

        </div>
    );
};

export default Main;