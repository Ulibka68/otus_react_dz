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
import MaskedInput, { MaskedInputProps } from "react-text-mask";

type textFieldVariant = "filled" | "outlined" | "standard";

interface MYInputMaskAddProps {
  mask: string; // маска ввода от MaskedInput
  variant?: textFieldVariant;
  label?: string;
  name: string;
  field: FieldInputProps<any>;
  meta: FieldMetaProps<any>;
}

/*
const MYInput = ({
  name,
  mask,
  variant,
  label,
  field,
  meta,
  ...props
}: MYInputMaskAddProps) => (
  <Field
    name={name}
    render={({ field }: FieldAttributes<HTMLInputElement>) => {
      return (
        <MaskedInput {...field} mask={mask}>
          {(innerProps: TextFieldProps) => (
            <TextField
              {...props}
              variant={variant ? variant : "filled"}
              label={label ? label : ""}
              field={field}
              meta={meta}
            />
          )}
        </MaskedInput>
      );
    }}
  />
);

 */

/*

const MYInput2 = ({ name: string, ...props }) => (
  <Field
    name={name}
    render={({ field }: FieldAttributes<HTMLInputElement>) => {
      return <input type="text" />;
    }}
  />
);

 */
interface FormObject {
  errors: { [x: string]: string };
  getFieldMeta: (...args: any) => any;
  touched: { [x: string]: boolean };
  values: any;
}

interface custFieldComponentProps {
  field: FieldInputProps<string>;
  form: FormObject;
  meta: any;
}

interface Values {
  name: string;
  phone: string;
  lastName: string;
  children: string;
}

const custFieldComponent = ({
  field,
  form,
  meta,
  ...props
}: custFieldComponentProps) => {
  console.log("field", field);
  console.log("meta", meta);
  console.log("form", form);
  console.log("props", props);
  return (
    <div>
      <input type="text" {...field} placeholder="Phone" />
      {meta && meta.touched && meta.error && meta.error}
    </div>
  );
};

function childrenFuncHOC(placeholder: string) {
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

export default function FormMaterialUI() {
  return (
    <Formik
      initialValues={{
        phone: "",
        name: "",
        lastName: "",
        children: "",
      }}
      validate={(values) => {
        const errors: Partial<Values> = {};
        if (!values.name) {
          errors.name = "Required";
        }
        if (!values.phone) {
          errors.phone = "Required phone";
        }
        if (!values.lastName) {
          errors.lastName = "Required last name";
        }
        if (!values.children) {
          errors.children = "Required children";
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
          <Field name="lastName" label="Last name">
            {(fldProp: custFieldComponentProps) => (
              <div>
                <input type="text" placeholder="Last name" {...fldProp.field} />
                {fldProp.meta.touched && fldProp.meta.error && (
                  <div className="error">{fldProp.meta.error}</div>
                )}
              </div>
            )}
          </Field>
          <br />
          <Field name="phone" component={custFieldComponent} />;
          <br />
          <Field name="children" label="Children">
            {childrenFuncHOC("ququ")}
          </Field>
          {/*<MYInput name="phone" label="Phone" mask="(999) 999-99-99" />;*/}
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
