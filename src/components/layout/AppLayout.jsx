import { Outlet } from "react-router-dom";
import Header from "../header/Header"

const AppLayout = () => {
    return (
    <>
        <div >
            <Header />
            <Outlet />
            </div>
            
    </>
)};

export default AppLayout;
