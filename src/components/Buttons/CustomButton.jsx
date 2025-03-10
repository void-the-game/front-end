import styles from "./CustomButton.module.scss";

function CustomButton({ onClick, blur, children, terciary, next }) {
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
          <div
            className={`${styles["button--primary__div-elements"]} ${
              next
                ? styles["button--primary__div-elements-next"]
                : styles["button--primary__div-elements-back"]
            }`}
          >
            <span>{children}</span>
          </div>
        </>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
}

export default CustomButton;
