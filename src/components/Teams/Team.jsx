import React from "react";
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
const Team = props => {
  const { name, picture, phone, email } = props.team;
  const fullName = `${name.title} ${name.first} ${name.last}`;
//   const team = props.team;
//   console.log("helo", team);
  return (
    <div>
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
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Team;
