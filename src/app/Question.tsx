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
import React, { useState } from "react";
import Item from "./Item";
import { IPollerResponse, IItem, IAnswer } from "./Types";

interface Props {
  data: IPollerResponse;
}

const Question: React.FC<Props> = ({ data }) => {
  const questions = data.questions;
  const [answers, setAnswers] = useState<IAnswer[]>([]);

  const handlerSetAnswers = (
    idItem: number,
    optionPayload: number | string
  ) => {
    typeof optionPayload === "string" &&
      setAnswers([{ questionId: idItem, text: optionPayload }]);
    typeof optionPayload === "number" &&
      setAnswers([{ questionId: idItem, options: [optionPayload] }]);
    console.log(answers);
  };

  //   const handlerSetAnswers = (idItem: number, optionId: number | string ) => {
  //     const index = answers.findIndex((el) => el.questionId === idItem)
  //     if(index<0){
  //      typeof optionId ===  "number" && setAnswers([{questionId: idItem, options:[optionId]}])
  //      typeof optionId ===  "string" && setAnswers([{questionId: idItem, text: optionId}])
  //      console.log(answers);
  //     }
  //     setAnswers()
  // const indexOptions = (answers[index].options!).find((el) => el === optionId)
  // if(indexOptions!<0){
  // const optionsNew = [answers[index].options!.push(optionId as number)]
  // answers[index] = { ...answers[index], options: [...optionsNew ] }
  // console.log(answers);
  // }

  // const optionsNew = [answers[index].options!.push(optionId as number)]
  // answers[index] = { ...answers[index], options: [...optionsNew ] }
  // const handleVisible = useCallback((index: number) => {
  //     titles[index] = { ...titles[index], visible: !titles[index].visible };
  //     setTitles(prev => [...prev]);
  // }, [headers])

  // }

  return (
    <Container
      sx={{
        height: "content",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <AppBar
          position="sticky"
          color="transparent"
          sx={{ top: 0, bottom: "auto" }}
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
      {questions.map((dataItem: IItem, index: number) => (
        <Item
          key={index}
          dataItem={dataItem}
          handlerSetAnswers={handlerSetAnswers}
        />
      ))}
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

      {/* <Box sx={{ width: "100%", display: "flex", flexDirection: "row", justifyContent:"space-between"}} >
          <Button variant="contained">Назад</Button>
          <Button variant="outlined">Вперед</Button>
        </Box>
         */}
      <Button variant="contained">Отправить</Button>
    </Container>
  );
};

export default Question;
