import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";

import InfoCard from "./components/InfoCard";
import { getUserById } from "../../db-services/getUserById";
import { toast } from "react-toastify";
import { notifySettings } from "../../utils/config";

const Info = () => {
  const { userId } = useParams();

  const [userInfo, setUserInfo] = useState(null);
  const getUserInfo = useCallback(async () => {
    try {
      const res = await getUserById(userId);
      const userData = res.data.data;
      if (userData) setUserInfo(userData);
      else setUserInfo(null);
    } catch (error) {
      toast.error("somethig went wrong while fetching user!", notifySettings);
    }
  }, [userId]);

  useEffect(() => {
    getUserInfo();
  }, [getUserInfo]);

  return (
    <div className="m-2 d-flex justify-content-center">
      <div className="d-box d-flex flex-column justify-content-center">
        {userInfo && <InfoCard userInfo={userInfo} />}
      </div>
    </div>
  );
};
export default Info;
