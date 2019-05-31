import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import "../styles/AdminPage.css";
const AdminPage = props => {
  const { isLogged, handleLogin } = props;
  return (
    <Fragment>
      {isLogged ? (
        <div className="adminPage">
          <h1>Welcome on your site!</h1>
          <h2>Admin page</h2>
          <h2>Admin panel</h2>
          <button onClick={handleLogin}>Logout</button>
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </Fragment>
  );
};
export default AdminPage;
