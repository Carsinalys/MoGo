import React from 'react'
import WorkText from './workText'
import ContactsPeople from './contactsPeople'
import ContactsLabels from './contactsLabels'

class Contacts extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <WorkText title="Ho we are" about="Meet our team"/>
        <div className="contacts__about">
          <p className="contacts__about__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet, aperiam aspernatur assumenda autem eos esse exercitationem explicabo facere id iure magni maxime minus molestiae nulla pariatur, perferendis placeat quas rem repellendus sed similique vel velit veniam voluptas voluptatem voluptatibus?</p>
        </div>
        <ContactsPeople/>
        <ContactsLabels/>
      </div>
    )
  }
}

export default Contacts