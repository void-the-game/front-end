function CustomButton({
  label,
  width,
  height,
  backColor,
  color,
  fontSize,
  fontWeight,
  imageSrc,
  className,
  imgWidth,
  imgHeight,
  onClick,
}) {
  const buttonStyle = {
    width: width || "150px",
    height: height || "50px",
    fontSize: fontSize || "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: fontWeight || "100",
    padding: "10px",
    backgroundColor: backColor || "transparent",
    color: color || "#fff",
    border: "none",
    textDecoration: "none",

    cursor: "pointer",
  }

  const imageStyle = {
    width: imgWidth || "20px",
    height: imgHeight || "20px",
  }

  return (
    <button style={buttonStyle} className={className} onClick={onClick}>
      {imageSrc && <img src={imageSrc} alt="button-icon" style={imageStyle} />}
      <span>{label}</span>
    </button>
  )
}

export default CustomButton
