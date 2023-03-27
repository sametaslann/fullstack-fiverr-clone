import { Link } from "react-router-dom";
import "./Message.scss";

function Message() {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages"> MESSAGES </Link> &gt; John Doe
        </span>

        <div className="messages">
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              nulla natus eveniet ea iure officiis possimus ullam asperiores,
              consequuntur minima nisi dolore architecto dolorem eligendi
              soluta. Ipsum accusamus aut amet.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              nulla natus eveniet ea iure officiis possimus ullam asperiores,
              consequuntur minima nisi dolore architecto dolorem eligendi
              soluta. Ipsum accusamus aut amet.
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              nulla natus eveniet ea iure officiis possimus ullam asperiores,
              consequuntur minima nisi dolore architecto dolorem eligendi
              soluta. Ipsum accusamus aut amet.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              nulla natus eveniet ea iure officiis possimus ullam asperiores,
              consequuntur minima nisi dolore architecto dolorem eligendi
              soluta. Ipsum accusamus aut amet.
            </p>
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              nulla natus eveniet ea iure officiis possimus ullam asperiores,
              consequuntur minima nisi dolore architecto dolorem eligendi
              soluta. Ipsum accusamus aut amet.
            </p>
          </div>
          <div className="item owner">
            <img
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
              nulla natus eveniet ea iure officiis possimus ullam asperiores,
              consequuntur minima nisi dolore architecto dolorem eligendi
              soluta. Ipsum accusamus aut amet.
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea
            name=""
            id=""
            placeholder="write a message"
            cols="30"
            rows="10"
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Message;
