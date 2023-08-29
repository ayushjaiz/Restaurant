import React from "react";

class ProfileClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "People",
                location: "XYZ"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/ayushjaiz");
        const json = await data.json();

        this.setState({ userInfo: json });
    }

    render() {
        return (
            <>
                {/* <h2>Message: {this.props.message}</h2> */}
                <h2>Name: {this.state.userInfo.name}</h2>
                <h2>Location: {this.state.userInfo.location}</h2>
                {console.log(this.state.userInfo)}
            </>
        )
    }
}

export default ProfileClass;