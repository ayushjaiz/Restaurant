import { Outlet } from "react-router-dom"
import Profile from "./Profile"

const About = () => {
    return (
        <>
            <Outlet />
            {/* <Profile /> */}
            <h4>This is About</h4>
        </>
    )
}

export default About