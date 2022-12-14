import React from 'react'
import './Cform.css'

function Cform() {
  return (
    <div className="container">
    <form action="action_page.php">
      <label htmlFor="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.." />
      <label htmlFor="lname">Last Name</label>
      <input
        type="text"
        id="lname"
        name="lastname"
        placeholder="Your last name.."
      />
      <label htmlFor="country">Country</label>
      <select id="country" name="country">
        <option value="australia">Goa</option>
        <option value="canada">Delhi</option>
        <option value="usa">Rajasthan</option>
      </select>
      <label htmlFor="subject">Subject</label>
      <textarea
        id="subject"
        name="subject"
        placeholder="Write something.."
        style={{ height: 200 }}
        defaultValue={""}
      />
      <input type="submit" defaultValue="Submit" />
    </form>
  </div>
  
  );
}

export default Cform;