import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import DatePicker from "react-datepicker"
import { useState } from 'react'
import moment from 'moment'

const FormEditProject = ({ command, clients, contracts, model, submitHandler }) => {
  const inputClass = "bg-gray-200 appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
  const labelClass = "block text-gray-700 text-right mb-1 pr-2"
  const buttonClass = "block w-full shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 mt-4 rounded"

  return (
    <Formik
    initialValues = {{
      title: model?.title ? model?.title : '',
      clientId: model?.clientId ? model?.clientId : '',
      contractId: model?.contractId ? model?.contractId : '',
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
      {({ values, setFieldValue }) => (
      <Form>
        <div className="w-full max-w-xl mx-auto text-sm">
          <div className="text-center text-red-500 my-4 border rounded border-orange-400 bg-yellow-200 p-4">
            Form ini hanya boleh aktif untuk user dengan role tertentu.
          </div>
          {command ?
            <>
            <div className="flex items-center mb-3">
              <div className="w-full text-center">
                <h2 className="dashboard-heading">Add Project</h2>
              </div>
            </div>
            <div className="flex items-center mb-3">
              <div className="w-1/3">
                <label className={labelClass} htmlFor="clientId">Clients</label>
              </div>
              <div className="w-2/3">
                <Field className={inputClass} name="clientId" as="select">
                  <option value={model?.clientId ? model?.clientId : ''}>Choose Client</option>
                  {clients.map((client) => (
                    <option value={client._id} key={client._id}>{client.name}</option>
                  ))}
                </Field>
              </div>
            </div>
            <div className="flex items-center mb-3">
              <div className="w-1/3">
                <label className={labelClass} htmlFor="contractId">Contracts</label>
              </div>
              <div className="w-2/3">
                <Field className={inputClass} name="contractId" as="select">
                  <option value={model?.contractId ? model?.contractId : ''}>Choose Contracts</option>
                  {contracts.map((contract) => (
                    <option value={contract._id} key={contract._id}>{contract.title}</option>
                  ))}
                </Field>
              </div>
            </div>
            </>
           : ''
          }
          <div className="flex items-center mb-3">
            <div className="w-1/3">
              <label className={labelClass} htmlFor="title">Title</label>
            </div>
            <div className="w-2/3">
              <Field className={inputClass} name="title" placeholder="" />
              <span><ErrorMessage name="title" /></span>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-1/3">
              <label className={labelClass} htmlFor="description">Description</label>
            </div>
            <div className="w-2/3">
              <Field className={inputClass} name="description" placeholder="" />
              <span><ErrorMessage name="description" /></span>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-1/3">
              <label className={labelClass} htmlFor="startDate">Start date</label>
            </div>
            <div className="w-2/3">
              <DatePicker
                selected={Date.parse(moment(values.startDate, 'DD-MM-yyyy').toISOString())}
                name="startDate"
                className={inputClass}
                dateFormat="yyyy-MM-dd"
                onChange={date => setFieldValue('startDate', moment(date).format('DD-MM-yyyy'))}
              />
              <span><ErrorMessage name="startDate" /></span>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-1/3">
              <label className={labelClass} htmlFor="endDate">End date</label>
            </div>
            <div className="w-2/3">
              < DatePicker
                selected={Date.parse(moment(values.endDate, 'DD-MM-yyyy').toISOString())}
                name="endDate"
                className={inputClass}
                dateFormat="yyyy-MM-dd"
                onChange={date => setFieldValue('endDate', moment(date).format('DD-MM-yyyy'))}
              />
              <span><ErrorMessage name="endDate" /></span>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-1/3">
              <label className={labelClass} htmlFor="status">Status</label>
            </div>
            <div className="w-2/3">
              <Field className={inputClass} name="status" placeholder="..." />
              <span><ErrorMessage name="status" /></span>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-1/3">
              <label className={labelClass} htmlFor="contact">Contact</label>
            </div>
            <div className="w-2/3">
              <Field className={inputClass} name="contact" placeholder="" />
              <span><ErrorMessage name="contact" /></span>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-1/3">
              <label className={labelClass} htmlFor="managedBy">PIC</label>
            </div>
            <div className="w-2/3">
              <Field className={inputClass} name="managedBy" placeholder="" />
              <span><ErrorMessage name="managedBy" /></span>
            </div>
          </div>
          <div className="flex items-center mb-3">
            <div className="w-1/3">{` `}</div>
            <div className="w-2/3">
              <button type="submit" className={buttonClass}>Submit</button>
            </div>
          </div>
        </div>
        {command ? <div className="h-10"></div> : <div className="h-64"></div>}
      </Form>
      )}
    </Formik>
  )
}

export default FormEditProject
