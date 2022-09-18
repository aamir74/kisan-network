import { CHeaderBrand } from "@coreui/react";
import MessageCard from "./MessageCard";

const List = ({ message }) => {
  return (
    <>
      <CHeaderBrand className="m-2">Messages list</CHeaderBrand>
      {message?.length
        ? message.map((item, index) => (
            <MessageCard
              key={item.name + index}
              name={item.name}
              otp={item.otp}
              date={item.date}
              picture={item.picture}
            />
          ))
        : "No Data found"}
    </>
  );
};
export default List;
