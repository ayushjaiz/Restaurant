import { useContext } from "react"
import UserContext from "../utils/UserContext"

const Footer = () => {
    const { user } = useContext(UserContext);

    return (
        <>
            <h1>This site is developed by {user.name} @{user.email}</h1>
        </>

    )
}

export default Footer