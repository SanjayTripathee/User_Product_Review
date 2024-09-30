import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateUser from "../User/CreateUser";
import ReadAllUser from "../User/ReadAllUser";
import UserDetails from "../User/UserDetails";
import UpdateUser from "../User/UpdateUser";
import PageNotFound from "../../PageNotFound";

const UserRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/create" element={<CreateUser />}></Route>
        <Route path="/" element={<ReadAllUser />}></Route>
        <Route path="/:id" element={<UserDetails />}></Route>
        <Route path="/update/:id" element={<UpdateUser />}></Route>
        <Route path="/:id/*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
};

export default UserRouter;       


