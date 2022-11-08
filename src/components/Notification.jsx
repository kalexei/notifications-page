import "./Notification.css";

const Notification = ({ user, avatarUrl, type, content, read, time }) => {
  function getConvertedTime() {
    let newTime = time;
    let measurement = "seconds";

    if (newTime % 60 === 0) {
      newTime /= 60;
      measurement = "minutes";
    }

    if (newTime % 60 === 0) {
      newTime /= 60;
      measurement = "hours";
    }

    if (newTime % 24 === 0) {
      newTime /= 24;
      measurement = "days";
    }

    if (newTime % 7 === 0) {
      newTime /= 7;
      measurement = "weeks";
    }

    return `${newTime} ${measurement}`;
  }

  return (
    <div className={`notification ${type} ${read ? "" : "unread"}`}>
      <div className="avatar">
        <img src={avatarUrl} />
      </div>
      <div className="information">
        {type === "react" ? (
          <p>
            <span className="username">{user}</span>{" "}
            <span>reacted to your recent post</span>{" "}
            <span className="content">{content}</span>
          </p>
        ) : type === "follow" ? (
          <p>
            <span className="username">{user}</span> <span>followed you</span>
          </p>
        ) : type === "join-group" ? (
          <p>
            <span className="username">{user}</span>{" "}
            <span>has joined your group</span>{" "}
            <span className="content">
              <a className="link">{content}</a>
            </span>
          </p>
        ) : type === "leave-group" ? (
          <p>
            <span className="username">{user}</span> <span>left the group</span>{" "}
            <span className="content">
              <a className="link">{content}</a>
            </span>
          </p>
        ) : type === "message" ? (
          <div>
            <p>
              <span className="username">{user}</span>{" "}
              <span>sent you a private message</span>
            </p>
            <p className="time">{getConvertedTime()} ago</p>
          </div>
        ) : type === "comment" ? (
          <div>
            <p>
              <span className="username">{user}</span>{" "}
              <span>commented on your picture</span>
            </p>
            {/* <img className="image-content" src={content} alt="Picture" /> */}
            <p className="time">{getConvertedTime()} ago</p>
          </div>
        ) : null}
        {!read ? <div className="unread-indicator"></div> : null}
        {type === "message" ? (
          <p>{content}</p>
        ) : type === "comment" ? (
          <img className="image-content" src={content} alt="Picture" />
        ) : (
          <p className="time">{getConvertedTime()} ago</p>
        )}
      </div>
    </div>
  );
};

export default Notification;
