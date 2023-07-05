import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./SignUpForm.css";

const SignUpForm = () => {
  // Formik + Yup for client-side form validation
  return (
    <aside>
      <h2>Get Started Today</h2>
      <Formik
        initialValues={{ indv_name: "", c_email: "" }}
        validationSchema={Yup.object({
          indv_name: Yup.string().max(25, "Must be 25 characters or less").required("Required"),
          c_email: Yup.string().email("Invalid email address").required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
            // TODO: a real form would submit to the server and then get some response back and
            // display a message to the user but this whole project is just a template demo and
            // this is a Formik validation demo
          }, 400);
        }}
      >
        {({ errors }) => (
          <Form>
            <div className='field-row field-row_hidden-row'>
              <input type='hidden' name='l_newreport' value='1' />
              <input type='hidden' name='step' value='2' />
            </div>

            <div className='field-row'>
              <label htmlFor='indv_name'>
                Your Name<em>*</em>
              </label>
              <Field
                name='indv_name'
                type='text'
                placeholder='Enter your full name'
                className={errors.indv_name ? "field-error" : null}
              />
              <ErrorMessage name='indv_name' component='div' className='error-message' />
            </div>

            <div className='field-row'>
              <label htmlFor='c_email'>
                Your Email<em>*</em>
              </label>
              <Field
                name='c_email'
                type='email'
                placeholder='Enter your email address'
                className={errors.c_email ? "field-error" : null}
              />
              <ErrorMessage name='c_email' component='div' className='error-message' />
            </div>

            <div className='field-row field-row_no-padding'>
              <button type='submit' name='submit' className='button btn-lg pull-right nomargin'>
                Sign Up — It's Free!
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className='field-row field-row_no-padding center'>
        Toll Free :{" "}
        <a className='form-tel' href='tel:1887273368'>
          (888) 727-3368
        </a>
      </div>
    </aside>
  );
};
export default SignUpForm;
