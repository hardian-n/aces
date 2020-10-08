import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormEditProject = ({ model, command, submitHandler }) => {
  const inputClass = "bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
  const labelClass = "block text-gray-700 text-right mb-1 pr-2"
  const buttonClass = "block w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-4 rounded"
  const formAdd = [
    { id: 'fullname', label: 'Full Name' },
    { id: 'username', label: 'Username' },
    { id: 'email', label: 'Email' },
  ]
  const formEdit = [
    { id: 'fullname', label: 'Full Name' },
    { id: 'gender', label: 'Gender' },
    { id: 'birth', label: 'Birth' },
    { id: 'phone', label: 'Phone' },
    { id: 'disabled', label: 'Disabled' },
    { id: 'nip', label: 'N I P' },
    { id: 'position', label: 'Position' },
    { id: 'currentLevel', label: 'Current Level' },
    { id: 'targetLevel', label: 'Target Level' },
  ]
  

  return (
    <Formik
    initialValues = {{
      fullname: model?.fullname ? model?.fullname : '',
      username: model?.username ? model?.username : '',
      email: model?.email ? model?.email : '',
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
            <div className="w-full text-center">
              <h2 className="dashboard-heading">{ command == 'add' ? 'Add Persona' : 'Edit Persona'}</h2>
            </div>
          </div>
          { command == 'add' ?
          formAdd.map((add, index) => (
            <div className="flex items-center mb-3" key={index}>
              <div className="w-1/3">
                <label className={labelClass} htmlFor={add.id}>{add.label}</label>
              </div>
              <div className="w-2/3">
                <Field className={inputClass} name={add.id} placeholder="" />
                <span><ErrorMessage name={add.id} /></span>
              </div>
            </div>
          ))
          :
          formEdit.map((edit, index) => (
            <div className="flex items-center mb-3" key={index}>
              <div className="w-1/3">
                <label className={labelClass} htmlFor={edit.id}>{edit.label}</label>
              </div>
              <div className="w-2/3">
                <Field className={inputClass} name={edit.id} placeholder="" />
                <span><ErrorMessage name={edit.id} /></span>
              </div>
            </div>
          ))
          }
          <div className="flex items-center mb-3">
            <div className="w-1/3">{` `}</div>
            <div className="w-2/3">
              <button type="submit" className={buttonClass}>Submit</button>
            </div>
          </div>
        </div>
        <div className="h-5"></div>
      </Form>
    </Formik>
  )
}

export default FormEditProject
