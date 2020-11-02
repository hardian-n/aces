import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import { render } from "react-dom"
  
const checkClass = "text-gray-700 text-left pr-2"

export const FormEditModulePersona = ({ persona, projectModules, submitSetTest, username }) => (
  <>
    <Formik
    initialValues = {{ modulname: persona, username: username }}
    enableReinitialize = {true}
    render={({ values }) => (
      <table><tbody><tr>
        <FieldArray
          name="modulname"
          render={arrayHelpers => (
            <>
              {projectModules.map(category => (
                <td key={category.ref} className="text-center px-5 bg-gray-100 w-32">
                  <label>
                    <input
                      name="modulname"
                      type="checkbox"
                      value={module.name}
                      checked={values.modulname.includes(category.slug)}
                      onChange={e => {
                        submitSetTest(values, category.slug);
                      }}
                    />{" "}
                  </label>
                </td>
              ))}
            </>
          )}
        />
        <td>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </td>
      </tr></tbody></table>
    )}
    />
  </>
)

export default FormEditModulePersona