import { useEffect, useState } from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import Users from "./components/Users/Users";
import Team from "./components/Teams/Team";

function App() {
  const [users, setUsers] = useState([]);
  const [team, setTeam] = useState([]);
  // useEffect(() => {
  //   fetch("https://randomuser.me/api/?results=100")
  //     .then(response => response.json())
  //     .then(data => setUsers(data.results));
  //   console.log(users);
  // }, []);
  useEffect(async () => {
    try {
      const res = await fetch("https://randomuser.me/api/?results=100");
      const response = await res.json();
      setUsers(response.results);
    } catch (e) {
      console.log('error message:',e.message);
    }

    // console.log(users);
  }, []);

  const addTeamMember = user => {
    if (team.length > 0 && team.find(t => user.id === t.id)) {
      alert("User Already Added");
    } else {
      const newTeamMember = [...team, user];
      setTeam(newTeamMember);
    }
  };

  return (
    <Container>
      <h1>Selected Team Members:{team.length}</h1>
      <Row>
        {team.map(team => (
          <Col md="3">
            <Team team={team}></Team>
          </Col>
        ))}
      </Row>
      <hr />
      <Container>
        <h2>Total Members:{users.length}</h2>
        <Row>
          {users.map(user => (
            <Col md="3">
              <Users user={user} addTeamMember={addTeamMember}></Users>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default App;
