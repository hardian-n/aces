import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormEditLicense = ({ model, submitHandler }) => {
  const inputClass = "bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
  const labelClass = "block text-gray-700 text-right mb-1 pr-2"
  const buttonClass = "block w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-4 rounded"

  return (
    <Formik
    initialValues = {{
      licenseName: model?.licenseName ? model?.licenseName : '',
      contactName: model?.contactName ? model?.contactName : '',
      contactEmail: model?.contactEmail ? model?.contactEmail : '',
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
              <label className={labelClass} htmlFor="licenseName">License Name</label>
            </div>
            <div className="w-2/3">
              <Field className={inputClass} name="licenseName" placeholder="" />
              <span><ErrorMessage name="licenseName" /></span>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-1/3">
              <label className={labelClass} htmlFor="contactName">Contact Name</label>
            </div>
            <div className="w-2/3">
              <Field className={inputClass} name="contactName" placeholder="" />
              <span><ErrorMessage name="contactName" /></span>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-1/3">
              <label className={labelClass} htmlFor="contactEmail">Contact Email</label>
            </div>
            <div className="w-2/3">
              <Field className={inputClass} name="contactEmail" placeholder="" />
              <span><ErrorMessage name="contactEmail" /></span>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-1/3">{` `}</div>
            <div className="w-2/3">
              <button type="submit" className={buttonClass}>Submit</button>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  )
}

export default FormEditLicense
