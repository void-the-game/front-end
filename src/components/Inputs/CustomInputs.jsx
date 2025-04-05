import styles from './CustomInputs.module.scss'
import PropTypes from 'prop-types'

function CustomInput({
  type = 'text',
  id,
  placeholder,
  className,
  register,
  name,
  onChange,
}) {
  return (
    <input
      className={`${className} ${styles['custom-input']}`}
      placeholder={placeholder}
      type={type}
      id={id}
      {...register(name)}
      onChange={onChange}
    />
  )
}

CustomInput.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  register: PropTypes.object,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default CustomInput
