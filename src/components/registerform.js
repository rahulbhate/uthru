import React from "react"
export default function RegisterForm ()  {
    return(
        <form className="js-cm-form" id="subForm" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="2BE4EF332AA2E32596E38B640E90561960B417CF1923E8E3E9D6EF86B1437F97601BE21DF871AF7BF78D9504029A1A9BCB15B24C238DD879116813F2687ECC84">
          <div className="index-module--row--2O8ac">
            <div className="index-module--column--ClKY_">
              <input aria-label="First name" id="fieldjybydk" maxlength="200" name="cm-f-jybydk" placeholder="First Name" />
            </div>
          </div>
          <div className="index-module--row--2O8ac">
            <div className="index-module--column--ClKY_">
              <input aria-label="Last name" id="fieldjybydd" maxlength="200" name="cm-f-jybydd" placeholder="Last Name" />
              </div>
            </div>
          <div className="index-module--row--2O8ac">
            <div className="index-module--column--ClKY_">
              <input aria-label="Organisation" id="fieldjybydh" maxlength="200" name="cm-f-jybydh" placeholder="Organization" />
            </div>
          </div>
          <div className="index-module--row--2O8ac">
            <div className="index-module--column--ClKY_">
              <input autocomplete="Email" aria-label="Email" className="js-cm-email-input qa-input-email" id="fieldEmail" maxlength="200" name="cm-yhjljuh-yhjljuh" type="email" placeholder="Email" />
            </div>
          </div>
          <div className="index-module--row--2O8ac">
            <div className="index-module--column--ClKY_">
              <input aria-label="Phone" id="fieldjybydu" maxlength="200" name="cm-f-jybydu" type="number" placeholder="Phone" />
            </div>
          </div>
          <div className="index-module--row--2O8ac">
            <div className="index-module--columnequals--2UYBh">
              <input aria-required="" id="cm-privacy-consent" name="cm-privacy-consent" type="checkbox" /><label for="cm-privacy-consent" classNamename="index-module--columnequals--2UYBh" style={{display: 'inline-block', marginLeft: '24px' , verticalAlign: 'middle'}}>I agree to be emailed</label>
              <input id="cm-privacy-consent-hidden" name="cm-privacy-consent-hidden" type="hidden" value="true" />
            </div>
          </div>
          <div className="index-module--row--2O8ac">
            <input id="joinBtn" className="js-cm-submit-button" type="submit" />
          </div>
        </form>
    )
}
