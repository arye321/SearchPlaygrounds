import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Form } from "reactstrap";

export const Mainform = (props) => {
  const options1 = props.data ? props.data.links : "loading";
  const [values, setValue] = React.useState();
  const [searchValue, setSearchValue] = React.useState("None");

  const clicked = (e) => {
    e.preventDefault();
    //console.log(props.data)
    let sites = "";
    values.map((d, i) => {
      sites = sites + d;
      if (i !== values.length - 1) {
        sites = sites + " OR ";
      }
    });
    //console.log(props.data.length);

    const search = sites + " " + searchValue;
    //window.open("https://www.google.com/search?q=" + search).focus();
    console.log(search);
  };
  if (options1 === "loading") {
    return "loading sandbox list...";
  }

  if (!values) {
    setValue(options1);
  }

  return (
    <>
      <Stack spacing={3} sx={{ width: 500 }}>
        <Autocomplete
          multiple
          id="tags-outlined"
          options={options1}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          getOptionLabel={(option) => option}
          defaultValue={options1}
          filterSelectedOptions
          renderInput={(params) => (
            <div id="renderinput">
              <TextField
                {...params}
                label="Choose Playground"
                placeholder="Add..."
              />
            </div>
          )}
        />
      </Stack>
      <br />
      <Form onSubmit={clicked}>
        <Stack id="stackSearch" style={{ width: "50%" }}>
          <TextField
            id="searchbox"
            label="Search..."
            variant="outlined"
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
          <br />
          <Button variant="contained" onClick={clicked}>
            Google
          </Button>
        </Stack>
      </Form>
    </>
  );
};
