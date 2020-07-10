import React, { useEffect } from "react";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Col,
  Button,
} from "reactstrap";

const Stats = (props) => {
  const { stats, setStats } = props;

  useEffect(() => {
    fetch("http://localhost:4000/stats")
      .then((res) => res.json())
      .then((response) => {
        setStats(response);
      });
  }, [setStats]);

  const handleDelete = (id) => {
    fetch("http://localhost:4000/stats/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.deletedCount === 1) {
          const newStats = stats.filter((stat) => stat._id !== id);
          setStats(newStats);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Col xs="12" md="6" className="container-col">
      <h2>Stats</h2>
      <ListGroup>
        {stats.length > 0 ? (
          stats.map((stat) => (
            <ListGroupItem key={stat._id} className="justify-content-between">
              <ListGroupItemHeading>{stat.name}</ListGroupItemHeading>
              <ListGroupItemText>{stat.description}</ListGroupItemText>
              <Button color="primary" onClick={() => handleDelete(stat._id)}>
                Delete
              </Button>
            </ListGroupItem>
          ))
        ) : (
          <ListGroupItem>
            <ListGroupItemHeading>No Stats to show!</ListGroupItemHeading>
          </ListGroupItem>
        )}
      </ListGroup>
    </Col>
  );
};

export default Stats;
