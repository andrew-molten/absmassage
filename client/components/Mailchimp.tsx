import { useFormFields, useMailChimpForm } from 'use-mailchimp-form'
import '../styles/Mailchimp.scss'

function Mailchimp() {
  const url =
    'https://andrewboltonsportsmassage.us4.list-manage.com/subscribe/post?u=fa1057b919447409ff80a88c4&amp;id=fc5bfd001d&amp;f_id=008287e8f0'

  const { loading, error, success, message, handleSubmit } =
    useMailChimpForm(url)
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: '',
    FNAME: '',
  })

  // styling from https://codepen.io/meodai/pen/rNedxBa

  return (
    <div>
      <div className="signup-form">
        <h2 className="mailchimp-header">
          Subscribe for maintenance tips & available appointments.
        </h2>
        <div className="input-container">
          <label className="input">
            <input
              className="input__field"
              id="EMAIL"
              type="email"
              value={fields.EMAIL}
              onChange={handleFieldChange}
              placeholder=" "
            />
            <span className="input__label">Email Address</span>
          </label>
        </div>
        <div className="input-container">
          <label className="input">
            <input
              className="input__field"
              id="FNAME"
              type="text"
              value={fields.FNAME}
              onChange={handleFieldChange}
              placeholder=" "
            />
            <span className="input__label">First Name</span>
          </label>
        </div>
        <div className="button-group">
          <button className="submit-btn" onClick={() => handleSubmit(fields)}>
            Subscribe
          </button>
        </div>
        {loading && 'submitting'}
        {error && message}
        {success && message}
      </div>
    </div>
  )
}

export default Mailchimp
