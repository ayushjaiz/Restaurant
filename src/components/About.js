import { Outlet } from "react-router-dom"
import ProfileClass from "./ProfileClass"

const About = () => {
    return (
        <>
            <h4>This is About</h4>

            {/* <Outlet /> */}
            {/* <ProfileFunction message={"Ayush Jaiswal function"} /> */}
            <ProfileClass message={"Ayush Jaiswal class"} />
        </>
    )
}

export default About