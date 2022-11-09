import styled from "@emotion/styled";
import { Box, CircularProgress, Container } from "@mui/material";
import { useState } from "react";
import { Route, Routes, useParams, useSearchParams } from "react-router-dom";
import { useGetPollerQuery } from "./app/API/pollerApi";
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
  //const params = useParams();
  //const useSearchParams  = ReactRouterDOM.useSearchParams;
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("id"));
  //console.log(params.id);

  const [id, setId] = useState();
  const { data = [], isLoading } = useGetPollerQuery(searchParams.get("id"));
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
