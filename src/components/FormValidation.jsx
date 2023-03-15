import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'

const initialValues = { username: "", age: "", email: "", approver: "user" }

const schema = Yup.object().shape({
    username: Yup.string().required("Username is required!").min(5, "More than 5 character is required!").max(10, "Less than 10 character is required!"),
    age: Yup.number().required("Age is required!"),
    approver: Yup.string().required(),
    email: Yup.string().required()
    // email: Yup.string().when("approver", {
    //     is: (approver) => approver === "admin",
    //     then: Yup.string().required(),
    //     otherwise: Yup.string().optional()
    // })
})

export default function FormValidation() {

    const formik = useFormik({
        initialValues,
        validationSchema: schema,
        onSubmit: (values) => {
            console.log("Values", values)
        }
    })

    const showFormikData = () => {
        console.log(formik)
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input type="text" placeholder='Enter Username' name="username" value={formik.values.username} onChange={formik.handleChange} /><br />
                    <small className='error'>{formik.errors.username}</small>
                </div>
                <div>
                    <input type="number" placeholder='Enter Age' name="age" value={formik.values.age} onChange={formik.handleChange} /><br />
                    <small className='error'>{formik.errors.age}</small>
                </div>
                <div>
                    <input type="email" placeholder='Enter Email' name="email" value={formik.values.email} onChange={formik.handleChange} /><br />
                    <small className='error'>{formik.errors.email}</small>
                </div>
                <div>
                    <select name="approver" value={formik.values.approver} onChange={formik.handleChange}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select><br/>
                    <small className='error'>{formik.errors.approver}</small>
                </div>

                <div>
                    <button type="submit" disabled={!formik.isValid}>Submit</button>
                </div>

                <button onClick={showFormikData}>Show Data</button>
            </form>
        </div>
    )
}
