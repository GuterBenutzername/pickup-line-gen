import Stack from "@mui/material/Stack";
import React from "react";
import ActionColumn from "./ActionColumn/ActionColumn";
import InputHell from "./InputHell/InputHell";

type Props = {};

const Generator = (_props: Props) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      spacing={4}
    >
      <InputHell />
      <ActionColumn />
    </Stack>
  );
};

export default Generator;
