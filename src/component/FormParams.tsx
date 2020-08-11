import React from "react";
import ReactDOM from "react-dom";
import {
  Formik,
  Form,
  useField,
  FieldHelperProps,
  FieldInputProps,
  FieldMetaProps,
} from "formik";
import styled from "@emotion/styled";
import * as yup from "yup";

// from "formik/dist/types";
import { FieldHookConfig, FieldConfig } from "formik/dist/Field";

/*
const formSchema = Yup.object().shape({
    amount: Yup.number().required('Amount is required'),
    currency: Yup.string().required('Currency is required')
});

type InvoiceLevelTotal = typeof formSchema.[something]
 */

const personSchema = yup
  .object({
    firstName: yup
      .string()
      // Here we use `defined` instead of `required` to more closely align with
      // TypeScript. Both will have the same effect on the resulting type by
      // excluding `undefined`, but `required` will also disallow other values
      // such as empty strings.
      .defined(),
    nickName: yup.string().defined().nullable(),
    gender: yup
      .mixed()
      // Note `as const`: this types the array as `["male", "female", "other"]`
      // instead of `string[]`.
      .oneOf(["male", "female", "other"] as const)
      .defined(),
    email: yup.string().nullable().notRequired().email(),
    birthDate: yup.date().nullable().notRequired().min(new Date(1900, 0, 1)),
  })
  .defined();
// You can derive the TypeScript type as follows:

type Person = yup.InferType<typeof personSchema>;

// interface MyTextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {

type restProps<Val = any> = string | FieldHookConfig<Val>;

interface MyTextInputProps {
  label: string;
  id?: string;
  name: string;
  type: string;
  placeholder: string;
}

function MyTextInput({
  label,
  id,
  name,
  type,
  placeholder,
  ...props
}: MyTextInputProps) {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  //   export declare function useField<Val = any>(propsOrFieldName: string | FieldHookConfig<Val>): [FieldInputProps<Val>, FieldMetaProps<Val>, FieldHelperProps<Val>];
  //   input: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
  const [field, meta] = useField(props as restProps);
  return (
    <>
      <label htmlFor={id || name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
}

type MyCheckboxProps = { children: string; name: string };
const MyCheckbox = ({ children, ...props }: MyCheckboxProps) => {
  // We need to tell useField what type of input this is
  // since React treats radios and checkboxes differently
  // than inputs/select/textarea.
  const [field, meta] = useField({
    ...(props as FieldConfig<any>),
    type: "checkbox",
  });
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
/*

// Styled components ....
const StyledSelect = styled.select`
   /** ... * /
 `;

const StyledErrorMessage = styled.div`
   /** ... * /
 `;

const StyledLabel = styled.label`
  /** ...* /
 `;
 */
// <select>
//     <option>Пункт 1</option>
//     <option>Пункт 2</option>
// </select>
// type MySelectProps = { label: string; name: string; id?: string };
interface MySelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  id?: string;
}

const MySelect = ({ label, name, id, children, ...props }: MySelectProps) => {
  const [field, meta] = useField(props as restProps);
  return (
    <>
      <label htmlFor={id || name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

// And now we can use these
const SignupForm = () => {
  return (
    <>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          acceptedTerms: false, // added for our checkbox
          jobType: "", // added for our select
        }}
        validationSchema={personSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="Jane"
          />
          <MyTextInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <MySelect label="Job Type" name="jobType">
            <option value="">Select a job type</option>
            <option value="designer">Designer</option>
            <option value="development">Developer</option>
            <option value="product">Product Manager</option>
            <option value="other">Other</option>
          </MySelect>
          <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default SignupForm;
