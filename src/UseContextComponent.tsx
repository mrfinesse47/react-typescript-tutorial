import Reat, { useState, useContext } from "react";

//at 15:30 in https://www.youtube.com/watch?v=zM_ZiSl2n2E

import UserContext, { UserState } from "./store";

function ConsumerComponent() {
  const user = useContext<UserState>(UserContext); //is normally inferred but you can even go user:UserState
  return (
    <div>
      <div>{user.first}</div>
      <div>{user.last}</div>
    </div>
  );
}

export default function UseContextComponent() {
  const [user, setUser] = useState<UserState>({ first: "Rex", last: "mason " });
  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
    </UserContext.Provider>
  );
}
