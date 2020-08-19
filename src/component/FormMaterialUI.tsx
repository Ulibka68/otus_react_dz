import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Button,
  LinearProgress,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";
import { TextField } from "formik-material-ui";
import MaskedInput from "react-text-mask";

interface Values {
  email: string;
  password: string;
  phone: string;
}

interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}

function TextMaskCustom(props: TextMaskCustomProps) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

interface State {
  textmask: string;
}

export function FormattedInputs() {
  const [values, setValues] = React.useState<State>({
    textmask: "(1 )    -    ",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <FormControl>
      <InputLabel htmlFor="formatted-text-mask-input">
        react-text-mask
      </InputLabel>
      <Input
        value={values.textmask}
        onChange={handleChange}
        name="textmask"
        id="formatted-text-mask-input"
        inputComponent={TextMaskCustom as any}
      />
    </FormControl>
  );
}

export default function FormMaterialUI() {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        phone: "",
      }}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Field
            component={TextField}
            name="email"
            type="email"
            label="Email"
          />
          <br />
          <Field
            component={TextField}
            type="password"
            label="Password"
            name="password"
          />
          {/*<Field
            component={TextField}
            type="tel"
            label="Телефон"
            name="phone"
            variant="outlined"
          />*/}
          <FormattedInputs />
          {isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={isSubmitting}
            onClick={submitForm}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}
