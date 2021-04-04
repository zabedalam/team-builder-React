import React, { useState } from "react";
import "./Users.css";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";

const Users = props => {
  console.log("users", props.user);
  const { name, picture, email, phone, cell } = props.user;
  const addTeamMember = props.addTeamMember;
  const fullName = `${name.title} ${name.first} ${name.last}`;
  const [cellNo, setCell] = useState("");
  const showCell = () => setCell(cell);
  console.log("pic", fullName);
  return (
    <>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src={picture.large} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">{fullName}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Email:{email}
            </CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Phone:{phone}
            </CardSubtitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Cell:{cellNo}
            </CardSubtitle>
            <Button onClick={showCell}>See My Cell Number</Button>
            <Button onClick={() => addTeamMember(props.user)}>Add Me</Button>
          </CardBody>
        </Card>
      </CardDeck>
    </>
  );
};

export default Users;
