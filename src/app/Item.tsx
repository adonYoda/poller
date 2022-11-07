import styled from "@emotion/styled";
import {
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { putAnswers } from "./Slices/pollerSlice";
import { IAnswer, IItem } from "./Types";

const MyButton = styled.div`
  width: 100%;
  border: 1px solid;
  margin: 2px;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const MyImage = styled.img`
  border: 1px black solid;
  border-radius: 10px;
  max-width: 100%;
  margin: 20px;
  padding: 10px;
  background-color: #45b2ff68;
`;
const MyDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

interface Props {
  dataItem: IItem;
  index: number;
  //handlerState: (questionId: number, optionId: number | string) => void;
}

const Item: React.FC<Props> = ({ dataItem, index }) => {
  const dispatch = useDispatch();

  const [answer, setAnswer] = useState<IAnswer>({
    questionId: 0,
    optionsId: [],
    text: "",
  });
  const [options, setOptions] = useState<number[]>([]);

  const handlerChangeAnswer = (
    questionId: number,
    value: number | string,
    type?: string
  ) => {
    // if (typeof value === "string")
    //   setAnswer({ questionId: questionId, text: value });
    // if (typeof value === "number" && type === "radio")
    //   setAnswer({ questionId: questionId, optionsId: [value] });
    // if (typeof value === "number" && type === "checkbox") {
    //   const index = answer.optionsId!.indexOf(value);
    //   if (index >= 0) {
    //     setAnswer({
    //       questionId: questionId,
    //       optionsId: answer.optionsId!.splice(index, 1),
    //     });
    //   } else {
    //     // setAnswer((prev)=> {...prev, {
    //     //   questionId: questionId,
    //     //   optionsId: (answer.optionsId as number[])!.push(value)}
    //     // });
    //   }
    // }
  };

  useEffect(() => {
    return () => {
      dispatch(putAnswers(answer));
    };
  }, []);

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <FormControl
        sx={{ m: 3, maxwidth: "60%", minWidth: "100%" }}
        component="fieldset"
        variant="standard"
      >
        <FormLabel component="legend" color="primary" focused={false} >
          {dataItem.position + 1}. {dataItem.text_ru}
        </FormLabel>
        {dataItem.question_type === "image" && <MyImage src={dataItem.url} />}
        {dataItem.options &&
          dataItem.question_type === "checkbox" &&
          dataItem.options.map((option, i) => (
            <MyButton>
              <Typography sx={{ m: 1 }} variant="body1">
                {option.text_ru}
              </Typography>
              <Checkbox
                onChange={(e) => {
                  handlerChangeAnswer(dataItem.id, option.id, "checkbox");
                }}
              />
            </MyButton>
          ))}
        {dataItem.options &&
          dataItem.question_type === "radio" &&
          dataItem.options.map((option, i) => (
            <MyButton>
              <Typography sx={{ m: 1 }} variant="body1">
                {option.text_ru}
              </Typography>
              <input
                type="radio"
                name="radio"
                value={option.text_ru}
                onChange={() => {
                  handlerChangeAnswer(dataItem.id, option.id, "radio");
                }}
              />
            </MyButton>
          ))}
        {dataItem.options &&
          dataItem.question_type === "open" &&
          //dataItem.options.map((option, i) => (
            <FormControl
              sx={{ margin: "0 auto", width: "100%"}}
              component="fieldset"
              variant="standard"
            >
              
              <TextField
                sx={{ m: "0 auto", width: "100%"}}
                multiline
                rows={4}
                defaultValue= "Напишите что-нибудь..."
                onChange={(e) => {
                  handlerChangeAnswer(dataItem.id, e.target.value, "input");
                }}
              />
            </FormControl>
          // )
          // )
          }
        {dataItem.options &&
          dataItem.question_type === "image" &&
          dataItem.options.map((option, i) => (
            <MyDiv>
              <Typography sx={{ m: 1 }} variant="body1">
                {option.text_ru}
              </Typography>
              <input
                style={{ margin: "0" }}
                type="radio"
                name="radio"
                value={option.text_ru}
                onChange={() => {
                  handlerChangeAnswer(dataItem.id, option.id, "radio");
                }}
              />
            </MyDiv>
          ))}
      </FormControl>
    </Box>
  );
};

export default Item;
