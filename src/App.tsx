import styled from "@emotion/styled";
import { Box, CircularProgress, Container } from "@mui/material";
import { useState } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";
import { useGetPollerQuery } from "./app/API/pollerApi";
import { firstPage } from "./app/constants";
import LinearDeterminate from "./app/LinearDeterminate";
import Question from "./app/Question";
import { data } from "./app/TEMP/TEMP";

const MyApp = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  background-color: #4781899d;
  border-radius: 15px;
`;

function App() {
  const [id, setId] = useState(1);
  const { data = [], isLoading } = useGetPollerQuery(id);
  const hardData = data;

  return isLoading ? (
    //<LinearDeterminate/>
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  ) : (
    <MyApp maxWidth="sm">
      <Question data={hardData} />
    </MyApp>
  );
}

export default App;
