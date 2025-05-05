import { Form, Formik } from 'formik'
import { schema } from '../schemas/exampleFormSchema.js'
import CustomInput from './CustomInput.jsx'

const initialValues = {
  username: '',
  email: '',
  age: 0,
  password: '',
  repeatPass: ''
}

const onSubmit = async (values, { resetForm }) => {
  console.log('Tag Component Submitting ...')
  await new Promise(resolve => setTimeout(resolve, 3000))
  console.log('Tag Component Submitted!', values)
  resetForm()
}

const TagForm = () => {
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={schema}>
        <Form>
          <CustomInput
            name="username"
            type="text"
            label="Username"
            id="tUsername"
            placeholder="Username"
          />

          <CustomInput
            name="email"
            type="text"
            label="Email"
            id="tEmail"
            placeholder="Put Email here"
          />

          <CustomInput
            name="age"
            type="number"
            label="Age"
            id="tAge"
            placeholder="Age"
          />

          <CustomInput
            name="password"
            type="text"
            label="Password"
            id="tPassword"
            placeholder="Password"
          />

          <CustomInput
            name="repeatPass"
            type="password"
            label="Repeat password"
            id="tRepeatPass"
            placeholder="Repeat password"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default TagForm