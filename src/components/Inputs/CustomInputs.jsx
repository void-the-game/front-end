import './CustomInputs.scss'



function CustomInput ({border, width, height,type, id, label, placeholder, className,classNameLabel}) {
    const InputStyle = {
        width: width || '15rem',
        height: height || '2rem',
        border: border || '1px solid #fff',
        borderRadius: '10px',
        backgroundColor: '#B1AAFF',
        padding: '0 10px',
        color:'#fff',
        fontSize: '1rem',
        fontFamily: 'Bruno Ace'
    };

    return (
        <div>
            {label && <label className={classNameLabel}>{label}</label>}
            <input
             className={`${className} custom-input`} 
             style={InputStyle} 
             placeholder={placeholder || '' }
             type={type || 'text'}
             id={id}
             
             />
        </div>
    );
}


export default CustomInput;