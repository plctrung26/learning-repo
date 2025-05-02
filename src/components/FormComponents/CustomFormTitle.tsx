interface ValidateInputTitleProps {
    value: string
}

const InputTitleValidaion = ({ value }: ValidateInputTitleProps) => {
    return (
        <span>
            {value} <span style={{ color: 'red' }}>*</span>
        </span>
    )
}

export default InputTitleValidaion