import React from 'react'

class ContactsLabels extends React.Component {
  render() {
    return  (
      <div className="contacts__labels__bg">
        <div className="container">
          <div className="contacts__labels__image">
            <img src={require("../../img/contact_labels.png")} alt="" className="contacts__labels__pic"/>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactsLabels