import React, { useState } from "react";
import JobsDisplay from "../../components/JobsDisplay";
import JobsFilter from "../../components/JobsFilter";
import Wrapper from "../../components/Wrapper";

export default function JobsView() {
  const [activeFilter, setActiveFilter] = useState({});

  return (
    <Wrapper>
      <JobsFilter />
      <JobsDisplay />
    </Wrapper>
  );
}
