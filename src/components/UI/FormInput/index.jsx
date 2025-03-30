import './style.css'

export function FormInput({ label, ...otherProps }) {
	return (
		<div className="group">
 			<label className="form-input-label">{label}</label>
 			<input {...otherProps} className="form-input" />
			</div>
	)
}
