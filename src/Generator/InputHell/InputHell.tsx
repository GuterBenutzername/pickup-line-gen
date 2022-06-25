import React from "react";
import TextField from "@mui/material/textfield";
import FieldData from "./FieldData";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

type Props = {};

const InputHell = (props: Props) => {
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
