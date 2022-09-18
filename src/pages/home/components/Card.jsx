import { Link } from "react-router-dom";
import {
  CAvatar,
  CCard,
  CCardBody,
  CCardTitle,
  CHeaderBrand,
} from "@coreui/react";

const Card = ({ picture, first, last, id }) => {
  return (
    <Link
      to={`/info/${id}`}
      style={{
        textDecoration: "none",
        color: "rgba(44, 56, 74, 0.95)",
      }}
    >
      <CCard style={{ minWidth: "18rem", margin: "10px", cursor: "pointer" }}>
        <CCardBody>
          <CCardTitle>
            {" "}
            <CAvatar src={picture} size="lg" />
            <CHeaderBrand className="mx-4">{`${first} ${last}`}</CHeaderBrand>
          </CCardTitle>
        </CCardBody>
      </CCard>
    </Link>
  );
};
export default Card;
