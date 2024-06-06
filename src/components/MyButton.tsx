import React from 'react'

type MyButtonProps = {
	className?: string
	onClick?: () => void
	disabled?: boolean
	children: React.ReactNode
}

const MyButton: React.FC<MyButtonProps> = ({ children, onClick, className }) =>
	// {
	// className,
	// onClick,
	// disabled,
	// children,
	// }
	{
		return (
			// <button
			// 	className={className}
			// 	onClick={onClick}
			// 	disabled={disabled}
			// 	type="button"
			// >
			// 	{children}
			// </button>
			<div onClick={onClick} className="button v8">
				<span className={`label ${className}`}>{children}</span>
				<span className="icon">
					<span></span>
				</span>
			</div>
		)
	}

export default MyButton
