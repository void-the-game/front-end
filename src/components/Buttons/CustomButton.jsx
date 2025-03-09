import styles from "./CustomButton.module.css"

function CustomButton({ onClick, blur, children, terciary }) {
  return (
    <button
      className={
        blur
          ? styles["button--primary"]
          : terciary
          ? styles["button--terciary"]
          : styles["button--secondary"]
      }
      onClick={onClick}
    >
      {blur ? (
        <>
          <div className={styles["button--primary__div-blur"]} />
          <div className={styles["button--primary__div-elements"]}>
            <span>{children}</span>
          </div>
        </>
      ) : (
        <span>{children}</span>
      )}
    </button>
  )
}

export default CustomButton
