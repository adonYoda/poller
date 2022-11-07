import {
  AppBar,
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Item from "./Item";
import { putAnswers } from "./Slices/pollerSlice";
import { IPollerResponse, IItem, IAnswer } from "./Types";

interface Props {
  data: IPollerResponse;
}

const Question: React.FC<Props> = ({ data }) => {
  const questions = data.questions;
  
  const [page, setPage] = useState<number>(0);

  



  return (
    <Container
      sx={{
        height: "content",
        backgroundColor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        marginTop: "20px",
        marginBottom: "20px",
        borderRadius: "10px",
      }}
    >
      <Box>
        <AppBar
          position="sticky"
          color="transparent"
          sx={{ marginTop: "20px", bottom: "auto" }}
        >
          <Toolbar>
            <Typography>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              delectus porro deserunt, dolore officia illo eius placeat maxime
              dolorum asperiores molestias repellat reprehenderit veniam quis
              nulla possimus voluptatum ratione iste.
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Item dataItem={questions[page]} index={page} />

      {/* {questions.map((dataItem: IItem, index: number) => (
        <Item
          key={index}
          dataItem={dataItem}
          handlerState={handlerState}
          
        />
      ))} */}
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">
          В какой ситуации возникают трудности?
        </FormLabel>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          defaultValue="напишите что-то..."
        />
      </FormControl>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          onClick={() => {
            if (page > 0) setPage((prev) => prev - 1);
          }}
          variant="contained"
        >
          Назад
        </Button>
        <Button
          onClick={() => {
            if (page < questions.length - 1) setPage((prev) => prev + 1);
          }}
          variant="contained"
        >
          Вперед
        </Button>
      </Box>

      <Button
        sx={{ width: "100%", display: "flex", margin: "20px auto" }}
        variant="contained"
      >
        Отправить
      </Button>
    </Container>
  );
};

export default Question;
