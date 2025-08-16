import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        id: 4,
        location: "Default",
      },
    };
  }
  //api call in class component:
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sashank-ab4");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { name, id, location } = this.state.userInfo;
    return (
      <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
        <h2 className="text-xl font-bold text-cyan-900 mb-2">
          {" "}
          Name: <span className="font-medium text-gray-700">{name}</span>
        </h2>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {" "}
          ID: <span className="font-medium text-gray-600">{id}</span>
        </h3>
        <h4 className="text-md text-gray-700">
          {" "}
          Location: <span className="text-gray-600">{location}</span>
        </h4>
      </div>
    );
  }
}

export default UserClass;
