import { Link } from "react-router-dom";
import "./Messages.scss";

export default function Messages() {
  const currentUser = {
    id: 1,
    username: "Samet Aslan",
    isSeller: true,
  };

  const message =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, provident. Cupiditate sapiente aliquam facilis minus illum nihil quasi commodi exercitationem. Animi iure hic consequuntur culpa blanditiis ipsam vitae expedita veniam!";

  return (
    <div className="messages">
      <div className="container">
        <div className="title">
          <h1>Messages</h1>
        </div>
        <table>
          <tr>
            <th>{currentUser?.isSeller ? "Buyer" : "Saler"}</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>{" "}
            </td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>John Doe</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>{" "}
            </td>
            <td>1 hour ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>John Doe</td>
            <td>
              <Link to="/message/123" className="link">
                {message.substring(0, 100)}...
              </Link>{" "}
            </td>
            <td>1 hour ago</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
