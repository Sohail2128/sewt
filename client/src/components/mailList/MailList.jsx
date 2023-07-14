import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Contact Us for Queries</h1>
      <h2 className="mailTitle">Save time, save money!</h2>
      <span className="mailDesc">Sign up and we'll send the best deals to you</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Your Email" />
        <input type="tel" placeholder="Your Mobile Number" />
        <input type="text" placeholder="Your Address" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList