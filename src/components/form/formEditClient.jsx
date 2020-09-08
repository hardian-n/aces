/**
 * FormEditProject.jsx
 * ===================
 *
 */
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormEditProject = ({ model, submitHandler }) => {
  const inputClass = "bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
  const labelClass = "block text-gray-700 text-right mb-1 pr-2"
  const buttonClass = "block w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-4 rounded"

  return (
    <Formik
    initialValues = {{
      name: model?.name ? model?.name : '',
      address: model?.address ? model?.address : '',
    }}
    enableReinitialize = {true}
    validationSchema = {Yup.object({

    })}
    onSubmit = {submitHandler}
    >
      <Form>
        <div className="w-full max-w-xl mx-auto text-sm">
          <div className="text-center text-red-500 my-4 border rounded border-orange-400 bg-yellow-200 p-4">
            Form ini hanya boleh aktif untuk user dengan role tertentu.
          </div>
          <div className="flex items-center mb-3">
            <div className="w-1/3">
              <label className={labelClass} htmlFor="name">Name</label>
            </div>
            <div className="w-2/3">
              <Field className={inputClass} name="name" placeholder="" />
              <span><ErrorMessage name="name" /></span>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-1/3">
              <label className={labelClass} htmlFor="address">Address</label>
            </div>
            <div className="w-2/3">
              <Field className={inputClass} name="address" placeholder="" />
              <span><ErrorMessage name="address" /></span>
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
    </Formik>
  )
}

export default FormEditProject
