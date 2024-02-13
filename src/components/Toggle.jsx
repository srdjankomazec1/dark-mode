import './Toggle.css'

const Toggle = ({handleChange,isChecked}) => {
  return (
    <div>
        <div className="toggle-container">
            <input type="checkbox" id='check' className='toggle' onChange={handleChange} checked={isChecked} />
            <label htmlFor="check">{isChecked ? "Dark Mode":'Light Mode'}</label>
        </div>
    </div>
  )
}

export default Toggle