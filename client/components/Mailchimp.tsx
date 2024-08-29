function Mailchimp() {


  return (
    <div>
    {/* <!-- Mailchimp Signup Form --> */}
    <link
    href="//cdn-images.mailchimp.com/embedcode/classic-071822.css"
    rel="stylesheet"
    type="text/css"
    />
      
         {/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
       We recommend moving this block and the preceding CSS link to the HEAD of your HTML file.  */}
      
      <div id="mc_embed_signup">
        <form
          action="https://andrewboltonsportsmassage.us4.list-manage.com/subscribe/post?u=fa1057b919447409ff80a88c4&amp;id=fc5bfd001d&amp;f_id=008287e8f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe below to receive a weekly list of appointments available.</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL"
                >Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
              />
              <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name  <span className="asterisk">*</span></label>
              <input type="text" value="" name="FNAME" className="" id="mce-FNAME" />
              <span id="mce-FNAME-HELPERTEXT" className="helper_text"></span>
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{display: "none"}}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{display: "none"}}
              ></div>
            </div>
            {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
              <input
                type="text"
                name="b_fa1057b919447409ff80a88c4_fc5bfd001d"
                tabIndex={-1}
                value=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <script
        type="text/javascript"
        src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
      ></script>
      <script type="text/javascript">
        (function ($) {
          window.fnames = new Array();
          window.ftypes = new Array();
          fnames[0] = "EMAIL";
          ftypes[0] = "email";
          fnames[1] = "FNAME";
          ftypes[1] = "text";
          fnames[2] = "LNAME";
          ftypes[2] = "text";
          fnames[3] = "ADDRESS";
          ftypes[3] = "address";
          fnames[4] = "PHONE";
          ftypes[4] = "phone";
          fnames[5] = "BIRTHDAY";
          ftypes[5] = "birthday";
          fnames[6] = "TITLE";
          ftypes[6] = "text";
          fnames[7] = "DOB";
          ftypes[7] = "date";
          fnames[8] = "POSTCODE";
          ftypes[8] = "text";
          fnames[9] = "LAPPDATE";
          ftypes[9] = "date";
          fnames[10] = "LBVISITED";
          ftypes[10] = "text";
          fnames[11] = "LPVISITED";
          ftypes[11] = "text";
        })(jQuery);
        var $mcj = jQuery.noConflict(true);
      </script>
       {/* End mc_embed_signup */}
   </div> )}

export default Mailchimp