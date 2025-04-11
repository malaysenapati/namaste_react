import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default"
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/malaysenapati");
        const json = await data?.json();
        console.log(json);
        this.setState({
            userInfo: json
        })
    }

    render() {
        const {name, location} = this.state.userInfo;
        return (
            <div className="user-card">
                <h2>Name: {this.state.userInfo.login}</h2>
                <h3>Location: {location}</h3>
            </div>
        )
    }
}

export default UserClass;