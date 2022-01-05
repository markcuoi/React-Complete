import React from "react";
import useResources from "./userResources";

export const User = () => {
  const users = useResources("users");
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
