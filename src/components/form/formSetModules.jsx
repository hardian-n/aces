import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik'
import Link from 'next/link'

const checkClass = "text-gray-700 text-left pr-2"

export const FormSetModule = ({ projectId, module, projectModules, submitSetTest, username }) => (
  <>
    <Formik
    initialValues = {{ project: projectId, ref: module.ref, enabled: module.enabled.toString() }}
    enableReinitialize = {true}
    >
    {({ values }) => (
        <FieldArray
          id="modulid"
        >
          {arrayHelpers => (
            <>
              <td className="text-center">
                {module.enabled.toString() === 'true' ?
                    <><label className="text-green-800 font-semibold">Module Enabled</label></> :
                    <><label className="text-red-800 font-semibold">Module Disabled</label></>
                  }
              </td>
              <td className="text-center px-5 bg-gray-100 w-32">
                <label>
                  <input
                    name="modulname"
                    type="checkbox"
                    value={module.name}
                    checked={module.enabled}
                    onChange={e => {
                      submitSetTest(values);
                    }}
                  />{" "}
                </label>
              </td>

              <td><pre>{JSON.stringify(values, null, 2)}</pre></td>
            </>
          )}
        </FieldArray>
    )}
    </Formik>
  </>
)

export default FormSetModule