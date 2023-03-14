import { useFormik } from 'formik'
import React, { useState } from 'react'

export default function FormValidation() {

    const formik = useFormik({
        initialValues: { username: "admin", age: 44 },
        onSubmit: (values)=>{
            console.log("Values", values)
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input type="text" placeholder='Enter Username' name="username" value={formik.values.username} onChange={formik.handleChange} />
                </div>
                <div>
                    <input type="number" placeholder='Enter Age' name="age" value={formik.values.age} onChange={formik.handleChange} />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
