import React, { ChangeEvent, useState } from "react";
import TextField from "@mui/material/textfield";
import FieldData from "./FieldData";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import produce from "immer";
import { useSelector, useDispatch } from "react-redux";
import { handleInputHellChange } from "../../redux/inputHell";
import { RootState } from "../../redux/store";

type Props = {};

const InputHell = (_props: Props) => {
  const InputHellState = useSelector((state: RootState) => state.inputHell);
  const dispatch = useDispatch();
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    toModify: string
  ) => {
    dispatch(handleInputHellChange({ [toModify]: event.target.value }));
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
      spacing={2}
    >
      <Stack
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
        spacing={1}
      >
        <Typography variant="h5" component="h3">
          Required:
        </Typography>
        {FieldData.map(
          (data: Record<string, string | boolean>, index: number) => {
            if (!data.optional) {
              return (
                <TextField
                  margin="normal"
                  name={data.name as string}
                  placeholder={data.placeholder as string}
                  label={data.label}
                  // @ts-ignore: ts(7053)
                  value={InputHellState[data.name as string]}
                  onChange={(e) => {
                    handleInputChange(e, data.name as string);
                  }}
                  key={index}
                />
              );
            } else {
              return;
            }
          }
        )}
      </Stack>
      <Stack
        direction="column"
        justifyContent="space-evenly"
        alignItems="flex-start"
        spacing={1}
      >
        <Typography variant="h5" component="h3">
          Optional:
        </Typography>
        {FieldData.map(
          (data: Record<string, string | boolean>, index: number) => {
            if (data.optional) {
              return (
                <TextField
                  margin="normal"
                  name={data.name as string}
                  placeholder={data.placeholder as string}
                  // @ts-ignore: ts(7053)
                  value={InputHellState[data.name as string]}
                  onChange={(e) => {
                    handleInputChange(e, data.name as string);
                  }}
                  label={data.label}
                  key={index}
                />
              );
            } else {
              return;
            }
          }
        )}
      </Stack>
    </Stack>
  );
};

export default InputHell;
