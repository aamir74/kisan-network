import { useState } from "react";
import {
  CAvatar,
  CButton,
  CCard,
  CCardBody,
  CCardText,
  CCardTitle,
  CHeaderBrand,
} from "@coreui/react";

import { MessageForm } from "./MessageForm";

const InfoCard = ({ userInfo }) => {
  const [visible, setVisible] = useState(false);
  const { first, last, picture, phoneNo } = userInfo;

  return (
    <>
      <MessageForm
        visible={visible}
        setVisible={setVisible}
        phoneNo={phoneNo}
        name={`${first} ${last}`}
        picture={picture}
      />
      <CHeaderBrand className="m-2">User Info</CHeaderBrand>
      <CCard style={{ minWidth: "18rem", margin: "10px", cursor: "pointer" }}>
        <CCardBody>
          <CCardTitle>
            {" "}
            <CAvatar src={picture} size="lg" />
            <CHeaderBrand className="mx-4">{`${first} ${last}`}</CHeaderBrand>
          </CCardTitle>
          <CCardText className="bolder my-1">{`${phoneNo}`} </CCardText>
          <div className="d-flex justify-content-end">
            {" "}
            <CButton color="dark" size="sm" onClick={() => setVisible(true)}>
              Send message
            </CButton>
          </div>
        </CCardBody>
      </CCard>
    </>
  );
};
export default InfoCard;
