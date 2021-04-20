import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
//import "./helper.css";
//import { MoreResources, DisplayFormikState } from "./helper";

//import React from "react";
//import { render } from "react-dom";
import { withFormik } from "formik";
import * as Yup from "yup";
const MyInnerForm = (props) => {
  const {
    values,
    touched,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      {/* NAME */}

      <label htmlFor="name" style={{ display: "block" }}>
        Name
      </label>
      <input
        id="name"
        placeholder="Enter your name"
        type="text"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.name && touched.name ? "text-input error" : "text-input"
        }
      />
      {errors.name && touched.name && (
        <div className="input-feedback">{errors.name}</div>
      )}

      {/* EMAIL */}
      <label htmlFor="email" style={{ display: "block" }}>
        Email
      </label>
      <input
        id="email"
        placeholder="Enter your email"
        type="text"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.email && touched.email ? "text-input error" : "text-input"
        }
      />
      {errors.email && touched.email && (
        <div className="input-feedback">{errors.email}</div>
      )}

      {/* <button className="outline" onClick={handleReset} disabled={!dirty || isSubmitting}>
        Reset
      </button> */}
      <button disabled={isSubmitting}>Submit</button>
    </form>
  );
};
const EnhancedForm = withFormik({
  mapPropsToValues: () => ({ email: "" }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!")
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: "BasicForm" // helps with React DevTools
})(MyInnerForm);

const App = () => (
  <div className="app">
    <h1>Sign Up</h1>
    <EnhancedForm />
  </div>
);

//render(<App />, document.getElementById("root"));

// const Basic = () => (
//   <div>
//     <h1>Sign Up</h1>
//     <Formik
//       initialValues={{
//         firstName: '',
//         lastName: '',
//         email: '',
//       }}
//       onSubmit={async (values) => {
//         await new Promise((r) => setTimeout(r, 500));
//         alert(JSON.stringify(values, null, 2));
//       }}
//     >
//       <Form>
//         <label htmlFor="firstName">First Name</label>
//         <Field id="firstName" name="firstName" placeholder="Jane" />

//         <label htmlFor="lastName">Last Name</label>
//         <Field id="lastName" name="lastName" placeholder="Doe" />

//         <label htmlFor="email">Email</label>
//         <Field
//           id="email"
//           name="email"
//           placeholder="jane@acme.com"
//           type="email"
//         />
//         <button type="submit">Submit</button>
//       </Form>
//     </Formik>
//   </div>
// );

ReactDOM.render(<App />, document.getElementById("root"));
