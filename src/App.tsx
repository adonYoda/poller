
import styled from "@emotion/styled";
import { Container} from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import { firstPage } from "./app/constants";
import FirstPage from "./app/MainPage";

const MyApp = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  min-width: 100%;
  position: relative;
  background-color: #F0F0F0
`

function App() {
  return (
    <MyApp maxWidth="sm" >
     <Routes>
      <Route path={firstPage} element={<FirstPage/>}/>
     </Routes>
    </MyApp>
  );
}

export default App;
