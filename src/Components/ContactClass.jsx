import React from "react"
import UserClass from "./UserClass"
class ContactClass extends React.Component {
  render() {
    return (
      <div className="userCard">
<UserClass name={'Sashank'} role={'Developer'} mail={'sashankakkabattula@gmail.com'}/>
      </div>
    )
  }
}

export default ContactClass