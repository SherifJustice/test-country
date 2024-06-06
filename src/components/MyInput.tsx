import React from 'react'

type MyInputProps = {
	type: string
	value: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	classNameInput?: string
	classNameLabel?: string
	placeholder?: string
	labelFor?: string
	labelText?: string
}

const MyInput: React.FC<MyInputProps> = ({
	type,
	value,
	onChange,
	classNameInput = '',
	placeholder = '',
	classNameLabel = '',
	labelFor = '',
	labelText = '',
}) => {
	return (
		<div className="text-field">
			<label htmlFor={labelFor} className={classNameLabel}>
				{labelText}
			</label>
			<input
				type={type}
				value={value}
				id={labelFor}
				onChange={onChange}
				className={classNameInput}
				placeholder={placeholder}
			/>
		</div>
	)
}

export default MyInput
