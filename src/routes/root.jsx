import { useState } from "react";
import { Outlet } from "react-router-dom";

import { DEFAULT_USER } from "../constants";
import { Navbar } from "../components";

const Root = () => {
  const [user, setUser] = useState(DEFAULT_USER);

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Outlet context={{ setUser }} />
    </>
  );
};

export default Root;
