// import "./CustomInputs.scss"
import styles from "./CustomInputs.module.css"

function CustomInput({
  border,
  type,
  id,
  placeholder,
  className,
  register,
  name,
  onChange,
}) {
  const InputStyle = {
    border: border || "1px solid #fff",
  }

  return (
    <input
      className={`${className} ${styles["custom-input"]}`}
      style={InputStyle}
      placeholder={placeholder || ""}
      type={type || "text"}
      id={id}
      {...register(name)}
      onChange={onChange}
    />
  )
}

export default CustomInput
