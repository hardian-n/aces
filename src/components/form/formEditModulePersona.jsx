import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'
import { render } from "react-dom"
  
const checkClass = "text-gray-700 text-left pr-2"

export const FormEditModulePersona = ({ persona, projectModules, submitSetTest, username }) => (
  <>
    <Formik
    initialValues = {{ modulname: persona, username: username }}
    enableReinitialize = {true}
    >
    {({ values }) => (
      <table><tbody><tr>
        <FieldArray
          name="modulname"
        >
          {arrayHelpers => (
            <>
              {projectModules.map(category => (
                category.method == "selftest" && category.enabled == true &&
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
              <td className="col-span-1"></td>
              {projectModules.map(category => (
                category.method == "simulation" && category.enabled == true &&
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
        </FieldArray>
      </tr></tbody></table>
    )}
    </Formik>
  </>
)

export default FormEditModulePersona