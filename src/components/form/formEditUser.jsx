import { Formik, Form, Field, ErrorMessage, Switch } from 'formik'
import * as Yup from 'yup'

const FormEditProject = ({ command, model, submitHandler }) => {
  const inputClass = "bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
  const labelClass = "block text-gray-700 text-right mb-1 pr-2"
  const labelleftClass = "text-gray-700 text-right mb-1 pl-4"
  const checkClass = "text-gray-700 text-left mb-1 pr-2"
  const buttonClass = "block w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-4 rounded"
  const selectClass = "block bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight   hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-purple-500"

  return (
    <Formik
    initialValues = {{
      disabled: model?.disabled ? model?.disabled : '',
    }}
    enableReinitialize = {true}
    validationSchema = {Yup.object({

    })}
    onSubmit = {submitHandler}
    >
      {props => {
        const {
          values,
          dirty,
          isSubmitting,
          handleChange,
          handleSubmit,
          handleReset,
          setFieldValue
        } = props;
        return (
        <Form>
          <div className="w-full max-w-xl mx-auto text-sm">
            <div className="text-center text-red-500 my-4 border rounded border-orange-400 bg-yellow-200 p-4">
              Form ini hanya boleh aktif untuk user dengan role tertentu.
            </div>
            <div className="w-full max-w-xl mx-auto text-sm">
              {command ?
              <>
              <div className="flex items-center mb-3">
                <div className="w-1/3">
                  <label className={labelClass} htmlFor="title">Name</label>
                </div>
                <div className="w-2/3">
                  <Field className={inputClass} name="name" placeholder="" />
                  <span><ErrorMessage name="name" /></span>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-1/3">
                  <label className={labelClass} htmlFor="title">Username</label>
                </div>
                <div className="w-2/3">
                  <Field className={inputClass} name="username" placeholder="" />
                  <span><ErrorMessage name="username" /></span>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-1/3">
                  <label className={labelClass} htmlFor="title">Email</label>
                </div>
                <div className="w-2/3">
                  <Field className={inputClass} name="email" placeholder="" />
                  <span><ErrorMessage name="email" /></span>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-1/3">
                  <label className={labelClass} htmlFor="title">Gander</label>
                </div>
                <div className="w-2/3">
                  <Field className={inputClass} name="gender" placeholder="" />
                  <span><ErrorMessage name="gender" /></span>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-1/3">
                  <label className={labelClass} htmlFor="title">Phone</label>
                </div>
                <div className="w-2/3">
                  <Field className={inputClass} name="phone" placeholder="" />
                  <span><ErrorMessage name="phone" /></span>
                </div>
              </div>
              <div className="flex items-center mb-3">
                <div className="w-1/3">
                  <label className={labelClass} htmlFor="title">Password</label>
                </div>
                <div className="w-2/3">
                  <Field className={inputClass} name="password" placeholder="" />
                  <span><ErrorMessage name="password" /></span>
                </div>
              </div>

              </>
              : '' }
              <div className="flex items-center mb-3">
                <div className="w-1/3">
                  <label className={labelClass} htmlFor="disabled">Disabled</label>
                </div>
                <div className="w-2/3">
                  <Field className={checkClass} name="disabled" component="input" type="checkbox" checked={props.values.disabled} />
                  <label className={labelleftClass} htmlFor="disabled">Check this box to disable the user</label>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-3">
              <div className="w-1/3">{` `}</div>
              <div className="w-2/3">
                <button type="submit" className={buttonClass}>Submit</button>
              </div>
            </div>
          </div>
          <div className="h-64"></div>
        </Form>
        );
      }}
    </Formik>
  )
}

export default FormEditProject
