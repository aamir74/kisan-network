import { CHeaderBrand } from "@coreui/react";
import Card from "./Card";

const List = ({ users }) => {
  return (
    <>
      <CHeaderBrand className="m-2">Users list</CHeaderBrand>
      {users?.length
        ? users.map((user, index) => (
            <Card
              key={user.id}
              id={user.id}
              picture={user.picture}
              first={user.first}
              last={user.last}
              gender={user.gender}
              country={user.country}
              description={user.description}
              index={index}
            />
          ))
        : "No Data found"}
    </>
  );
};
export default List;
