import { Outlet } from "react-router";
import Footer from '../Pages/Shared/Footer'

const Main = () => {
    return (
        <div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;