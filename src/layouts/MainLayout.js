import { Outlet } from "react-router-dom"
import "./MainLayout.css"

const MainLayout = () => {
    return <div className="layout-container"> 
        <Outlet/>
    </div>
}

export default MainLayout