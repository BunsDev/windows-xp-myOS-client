import { useState } from "react";
import axios from "axios";
import Login from "./Login";
import Friends from "./Friends";

const AIM = (props) => {
  const { setShowAim } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  if (props.showAim) {
    return !isLoggedIn ? (
      <Login
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setShowAim={setShowAim}
        users={users}
        setUsers={setUsers}
        setUser={setUser}
      />
    ) : (
      <Friends
        setIsLoggedIn={setIsLoggedIn}
        setShowAim={setShowAim}
        user={user}
      />
    );
  }
};

export default AIM;
