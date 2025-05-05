import { useField } from 'formik'

const CustomInput = ({label, id, ...props}) => {
  const [field, meta] = useField(props);

  return (
    <div className="field-container">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...props}
        {...field}
        className={meta.error && meta.touched ? 'input-error' : ''}
      />
      {meta.error && meta.touched &&
        <div className="error">{meta.error}</div>
      }
    </div>
  )
}

export default CustomInput