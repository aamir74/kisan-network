import moment from "moment";
import {
  CAvatar,
  CCard,
  CCardBody,
  CCardTitle,
  CHeaderBrand,
} from "@coreui/react";

const MessageCard = ({ name, otp, date, picture }) => {
  return (
    <>
      <CCard style={{ minWidth: "18rem", margin: "10px" }}>
        <CCardBody>
          <CCardTitle>
            {" "}
            <CAvatar src={picture} size="lg" />
            <CHeaderBrand className="mx-4">{`${name}`}</CHeaderBrand>
          </CCardTitle>
          <p className="h7">
            Otp -{" "}
            <CHeaderBrand className="p-1 border bolder"> {otp}</CHeaderBrand>
            <small className="text-muted mt-2">
              {moment(date).format("MMMM Do YYYY, h:mm:ss a")}
            </small>
            <span></span>
          </p>
        </CCardBody>
      </CCard>
    </>
  );
};
export default MessageCard;
