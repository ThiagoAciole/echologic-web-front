import { Outlet } from "react-router-dom";
import Header from "../header/Header"
import Footer from "../footer/Footer";

const AppLayout = () => {
    return (
    <>
        <div className="space-y-24 ">
            <Header />
            <div className="p-6 ml-2 sm:ml-12 sm:mr-12 md:ml-20 md:mr-20 lg:ml-32 lg:mr-32">
            <Outlet />
            </div>
            <Footer />
            
        </div>
            
    </>
)};

export default AppLayout;
