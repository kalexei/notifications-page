import { useEffect, useState } from "react";
import Notification from "./components/Notification";
import "./App.css";

const notifications = [
  {
    user: "Mark Webber",
    avatarUrl: "/images/avatar-mark-webber.webp",
    type: "react",
    content: "My first tournament today!",
    read: false,
    time: 60,
  },
  {
    user: "Angela Gray",
    avatarUrl: "/images/avatar-angela-gray.webp",
    type: "follow",
    content: "",
    read: false,
    time: 300,
  },
  {
    user: "Jacob Thompson",
    avatarUrl: "/images/avatar-jacob-thompson.webp",
    type: "join-group",
    content: "Chess Club",
    read: false,
    time: 86400,
  },
  {
    user: "Rizky Hasanuddin",
    avatarUrl: "/images/avatar-rizky-hasanuddin.webp",
    type: "message",
    content:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    read: true,
    time: 432000,
  },
  {
    user: "Kimberly Smith",
    avatarUrl: "/images/avatar-kimberly-smith.webp",
    type: "comment",
    content: "/images/image-chess.webp",
    read: true,
    time: 604800,
  },
  {
    user: "Nathan Peterson",
    avatarUrl: "/images/avatar-nathan-peterson.webp",
    type: "react",
    content: "5 end-game strategies to increase your win rate",
    read: true,
    time: 1209600,
  },
  {
    user: "Anna Kim",
    avatarUrl: "/images/avatar-anna-kim.webp",
    type: "leave-group",
    content: "Chess Club",
    read: true,
    time: 1209600,
  },
];

function fetchNotifications() {
  return notifications;
}

function sortNotifications(notifications) {
  return notifications.sort((a, b) => a.time - b.time);
}

function App() {
  const [notifications, setNotifications] = useState([{}]);

  useEffect(() => {
    setNotifications(sortNotifications(fetchNotifications()));
  }, []);

  return (
    <div className="App">
      <div className="notifications-container">
        <div className="header">
          <div className="title">
            <h2>Notifications</h2>
            {notifications.filter(item => !item.read).length > 0 ? (
              <span className="notification-count">
                {notifications.filter(item => !item.read).length}
              </span>
            ) : null}
          </div>
          <button
            onClick={() => {
              const unreadNotifications = notifications.filter(
                item => !item.read
              );

              const readNotifications = notifications.filter(item => item.read);

              const newlyReadNotifications = unreadNotifications.map(item => ({
                ...item,
                read: !item.read,
              }));

              setNotifications(
                sortNotifications([
                  ...newlyReadNotifications,
                  ...readNotifications,
                ])
              );
            }}
          >
            Mark all as read
          </button>
        </div>
        <div className="notification-list">
          {notifications.map(notification => (
            <Notification {...notification} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
