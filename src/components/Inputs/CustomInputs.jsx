import './CustomInputs.scss'



function CustomInput ({border,type, id, label, placeholder, className,classNameLabel}) {
    const InputStyle = {
       
        border: border || '1px solid #fff',
        
    };

    return (
        <>
            
            <input
             className={`${className} custom-input`} 
             style={InputStyle} 
             placeholder={placeholder || '' }
             type={type || 'text'}
             id={id}
             
             />
        </>
    );
}


export default CustomInput;