import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormEditProject = ({ command, model, modules, submitSetTest }) => {
  const inputClass = "bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
  const labelClass = "block text-gray-700 text-right mb-1 pr-2"
  const buttonClass = "block w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-4 rounded" 
  const checkClass = "text-gray-700 text-left pr-2"
  const labelleftClass = "text-gray-700 text-right pl-4"

  return (
    <Formik
    initialValues = {{
      tests: model?.tests ? model?.tests : [],
    }}
    enableReinitialize = {true}
    validationSchema = {Yup.object({

    })}
    onSubmit = {submitSetTest}
    >
      <Form>
        <div className="w-full max-w-xl mx-auto text-sm">
          <div className="flex items-center mb-3">
            <div className="w-full text-center">
              <h2 className="dashboard-heading">Edit Set Test</h2>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-1/3 align-top">
              <label className={labelClass} htmlFor='tests'>{` `}</label>
            </div>
            <div className="w-2/3">
          {modules.map((module, index) => (
            <div key={index}>
              <Field className={checkClass} name='tests' component="input" type="checkbox" value={module.slug}/>
              <label className={labelleftClass} htmlFor='tests'>{module.slug}</label>
            </div>
          ))
          }
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-1/3">{` `}</div>
            <div className="w-2/3">
              <button type="submit" className={buttonClass}>Submit Set Test</button>
            </div>
          </div>
        </div>
        <div className="h-5"></div>
      </Form>
    </Formik>
  )
}

export default FormEditProject
