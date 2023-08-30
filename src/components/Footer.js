import { useContext } from "react"
import UserContext from "../utils/UserContext"

const Footer = () => {
    const { user } = useContext(UserContext);

    return (
        <>
            <h4>Footer</h4>
            <h1>This site is developed by {user.name}</h1>
        </>

    )
}

export default Footer