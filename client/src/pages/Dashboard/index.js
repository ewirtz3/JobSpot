import React, { useEffect } from "react";
import { Container, Header, Segment, Divider } from "semantic-ui-react";
import JobsCounter from "../../components/JobsCounter";
import { useUserContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import "semantic-ui-css/semantic.min.css";
import "../../styles.css";

export default function Dashboard() {
  const [state, _] = useUserContext();

  const filteredJobs = state.jobs.filter(
    (job) => job.currentStatus !== "Closed"
  );

  return (
    <>
      <Container>
        <Segment raised centered="true" padded="very">
          <Header
            as="h1"
            color="orange"
            textAlign="center"
            id="greeting-header"
          >
            Hello, {state.name}
          </Header>
        </Segment>
        <Segment raised id="jobs-header">
          <Header as="h3" color="orange" textAlign="center">
            You have {filteredJobs.length > 0 ? filteredJobs.length : 0} open
            jobs, click below to filter by status
          </Header>
          <Divider />
          <JobsCounter />
        </Segment>
      </Container>
    </>
  );
}
