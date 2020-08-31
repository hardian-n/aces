/**
 * FormEditProject.jsx
 * ===================
 *
 */
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormEditProject = ({ model, submitHandler }) => {
  return (
    <Formik
    initialValues = {{
      title: model?.title ? model?.title : '',
      description: model?.description ? model?.description : '',
      startDate: model?.startDate ? model?.startDate : '',
      endDate: model?.endDate ? model?.endDate : '',
      status: model?.status ? model?.status : '',
      contact: model?.contact ? model?.contact : '',
      managedBy: model?.managedBy ? model?.managedBy : '',
    }}
    enableReinitialize = {true}
    validationSchema = {Yup.object({

    })}
    onSubmit = {submitHandler}
    >
      <Form>
        <h5>TODO: Harusnya hanya aktif untuk user yang punya role project-admin</h5>
        <p>
          <label htmlFor="title">Title</label>
          <Field className="red" name="title" placeholder="" />
          <span><ErrorMessage name="title" /></span>
        </p>
        <div>
          <p>Paragraph in a form.</p>
        </div>
        <p>
          <label htmlFor="description">Description</label>
          <Field className="red" name="description" placeholder="" />
          <span><ErrorMessage name="description" /></span>
        </p>
        <p>
          <label htmlFor="startDate">Start date</label>
          <Field className="red" name="startDate" placeholder="" />
          <span><ErrorMessage name="startDate" /></span>
        </p>
        <p>
          <label htmlFor="endDate">End date</label>
          <Field className="red" name="endDate" placeholder="" />
          <span><ErrorMessage name="endDate" /></span>
        </p>
        <p>
          <label htmlFor="status">Status</label>
          <Field className="red" name="status" placeholder="..." />
          <span><ErrorMessage name="status" /></span>
        </p>
        <p>
          <label htmlFor="contact">Contact</label>
          <Field className="red" name="contact" placeholder="" />
          <span><ErrorMessage name="contact" /></span>
        </p>
        <p>
          <label htmlFor="managedBy">PIC</label>
          <Field className="red" name="managedBy" placeholder="" />
          <span><ErrorMessage name="managedBy" /></span>
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
        <style jsx>{`
          label {
            margin-right: 1rem
          }
          input.red {
            color: #ff5500;
          }
        `}</style>
      </Form>
    </Formik>
  )
}

export default FormEditProject