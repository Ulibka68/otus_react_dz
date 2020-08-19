import React from "react";
import {
  Formik,
  Form,
  Field,
  FieldInputProps,
  FieldMetaProps,
  FormikProps,
} from "formik";
import { Button, LinearProgress } from "@material-ui/core";
import { TextField } from "formik-material-ui";
// https://github.com/text-mask/text-mask
import MaskedInput, { maskArray, MaskedInputProps } from "react-text-mask";

type textFieldVariant = "filled" | "outlined" | "standard";

interface custFieldComponentProps {
  /** string - Value of the field */
  field: FieldInputProps<string>;

  /* тип, передаваемый в FormikProps равен Form values */
  // form: FormikProps<FormValues>;
  form: any;
  meta: FieldMetaProps<FormValues>;
}

interface FormValues {
  name: string;
  phone: string;
  custinput: string;
}

function childrenFuncHOCInput(placeholder: string) {
  function childrenFunc(fldProp: custFieldComponentProps) {
    return (
      <div>
        <input type="text" placeholder={placeholder} {...fldProp.field} />
        {fldProp.meta.touched && fldProp.meta.error && (
          <div className="error">{fldProp.meta.error}</div>
        )}
      </div>
    );
  }
  return childrenFunc;
}

const maskParm: maskArray = [
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
];

/*
function childrenFuncHOC(
  placeholder: string,
  mask: maskArray,
  variant?: textFieldVariant,
  label?: string
) {
  function childrenFunc(fldProp: custFieldComponentProps) {
    return (
      <div>
        <MaskedInput
          {...fldProp.field}
          mask={mask}
          placeholderChar={"\u2000"}
          showMask
        >
          {() => (
            <TextField
              variant={variant ? variant : "filled"}
              label={label ? label : ""}
              field={fldProp.field}
              meta={fldProp.meta}
              form={fldProp.form}
            />
          )}
        </MaskedInput>
        {fldProp.meta.touched && fldProp.meta.error && (
          <div className="error">{fldProp.meta.error}</div>
        )}
      </div>
    );
  }
  return childrenFunc;
}

 */

function childrenFuncHOCMaskedInput(
  placeholder: string,
  variant?: textFieldVariant,
  label?: string
) {
  function childrenFunc(fldProp: custFieldComponentProps) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return (
      <div>
        <MaskedInput
          {...fldProp.field}
          mask={maskParm}
          placeholderChar={"\u2000"}
          showMask
          field={fldProp.field}
          meta={fldProp.meta}
          form={fldProp.form}
          render={(ref, props) => <input ref={ref} {...props} />}
        />
        {fldProp.meta.touched && fldProp.meta.error && (
          <div className="error">{fldProp.meta.error}</div>
        )}
      </div>
    );
  }
  return childrenFunc;
}

type childrenFuncHOCMaskedInput2Props = {
  placeholder: string;
  variant?: textFieldVariant;
  label?: string;
  fldProp: custFieldComponentProps;
};

function childrenFuncHOCMaskedInput2({
  placeholder,
  variant,
  label,
  fldProp
}: childrenFuncHOCMaskedInput2Props) {
  return (
    <div>
      <MaskedInput
        {...fldProp.field}
        mask={maskParm}
        placeholderChar={"\u2000"}
        showMask
        field={fldProp.field}
        meta={fldProp.meta}
        form={fldProp.form}
        {/*{...propsother}*/}
        render={(ref, props) => <input ref={ref} {...props} />}
      />
      {fldProp.meta.touched && fldProp.meta.error && (
        <div className="error">{fldProp.meta.error}</div>
      )}
    </div>
  );
}

export default function FormMaterialUI() {
  return (
    <Formik
      initialValues={{
        phone: "",
        name: "",
        custinput: "",
      }}
      validate={(values) => {
        const errors: Partial<FormValues> = {};
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.phone || values.phone === "  ") {
          errors.phone = "Required phone";
        }
        console.log("values.phone|", values.phone, "|");
        if (!values.custinput) {
          errors.custinput = "Required custinput";
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
      {/*{({ submitForm, isSubmitting }) => (*/}
      {(props: FormikProps<any>) => (
        <Form>
          <Field
            component={TextField}
            name="name"
            type="input"
            label="First name"
          />
          <br />
          <Field name="custinput" label="Custinput">
            {childrenFuncHOCInput("custinput")}
          </Field>

          <Field name="phone" label="Phone">
            {childrenFuncHOCMaskedInput("", "standard", "Phone label")}
          </Field>

            <Field name="phone2" label="Phone2">
            {childrenFuncHOCMaskedInput2("", "standard", "Phone label2")}
          </Field>

          {/* SUBMIT */}
          {props.isSubmitting && <LinearProgress />}
          <br />
          <Button
            variant="contained"
            color="primary"
            disabled={props.isSubmitting}
            onClick={props.submitForm}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

/*
<MaskedInput
  mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
  placeholder="Enter a phone number"
  id="my-input-id"
  render={(ref, props) => (
    <MyStyledInput innerRef={ref} {...props} />
  )}
/>

const MyStyledInput = styled.input`
  background: papayawhip;
`;
 */
