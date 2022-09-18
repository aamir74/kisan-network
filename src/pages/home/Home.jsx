import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { getUsers } from "../../db-services/getUsers";
import { notifySettings } from "../../utils/config";
import List from "./components/List";

const Home = () => {
  const [users, setUsers] = useState([]);

  const getUsersList = useCallback(async () => {
    try {
      const res = await getUsers();
      const userData = res.data.data;
      if (userData.length) setUsers(userData);
      else setUsers([]);
    } catch (error) {
      toast.error("somethig went wrong while fetching users!", notifySettings);
    }
  }, []);

  useEffect(() => {
    getUsersList();
  }, [getUsersList]);

  return (
    <div className="m-2 d-flex justify-content-center">
      <div className="d-box d-flex flex-column justify-content-center">
        {users?.length ? <List users={users} /> : null}
      </div>
    </div>
  );
};
export default Home;
