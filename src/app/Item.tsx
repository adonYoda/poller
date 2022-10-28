import styled from "@emotion/styled";
import {
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { IItem } from "./Types";

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

interface Props {
  dataItem: IItem;
  handlerSetAnswers: (idItem: number, optionId: number| string)=> void;
}

const Item: React.FC<Props> = ({ dataItem, handlerSetAnswers }) => {
   const [question, setQuestion] = useState({})



  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <FormControl sx={{ m: 3, width: "60%"}} component="fieldset" variant="standard">
        <FormLabel component="legend">
          {dataItem.position + 1}. {dataItem.text}
        
        </FormLabel>
        {dataItem.type === "image" && <div><img src={dataItem.url} /></div>}
        {dataItem.options &&
          dataItem.type === "checkbox" &&
          dataItem.options.map((option, i) => (
            <MyButton >
              <Typography sx={{ m: 1 }} variant="body1">
                {option.text}
              </Typography>
              <Checkbox onChange = { (e)=>
               handlerSetAnswers(dataItem.id, option.id)
              } />
            </MyButton>
          ))}
        {dataItem.options &&
          dataItem.type === "radio" &&
          dataItem.options.map((option, i) => (
            <MyButton>
              <Typography sx={{ m: 1 }} variant="body1">
                {option.text}
              </Typography>
             <input type="radio" name="radio" value={option.text} onChange = { ()=>
                handlerSetAnswers(dataItem.id, option.id)
              } />
            </MyButton>
          ))}
           {dataItem.options &&
          dataItem.type === "open" &&
          dataItem.options.map((option, i) => (
            <FormControl sx={{ m: 3, width: "100%" }} component="fieldset" variant="standard">
            <FormLabel component="legend">
            {option.text}
            </FormLabel>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              defaultValue="напишите что-то..."
              onChange = { (e)=>
                handlerSetAnswers(dataItem.id, e.target.value)
              }
            />
          </FormControl>
          ))}
          {dataItem.options &&
          dataItem.type === "image" &&
          dataItem.options.map((option, i) => (
            <>
              <Typography sx={{ m: 1 }} variant="body1">
                {option.text}
              </Typography>
             <input type="radio" name="radio" value={option.text}  onChange = { ()=>
                handlerSetAnswers(dataItem.id, option.id)
              } />
             </>
          ))}
      </FormControl>
    </Box>
  );
};

export default Item;
