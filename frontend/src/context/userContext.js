import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [myUser, setMyUser] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const toogleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user);
    } else {
      setMyUser(null);
    }
  }, [isAuthenticated]);
  return (
    <UserContext.Provider
      value={{
        loginWithRedirect,
        logout,
        myUser,
        toogleSidebar,
        isSidebarOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
