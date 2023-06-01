import { Outlet } from "react-router-dom";
import Header from "../header/Header"
import Footer from "../footer/Footer";

const AppLayout = () => {
    return (
    <>
        <div className="">
            <Header />
            <div className="">
            <Outlet />
            </div>
            <Footer />
            
        </div>
            
    </>
)};

export default AppLayout;
