import React from "react"
import styles from "../pages/index.module.scss"
export default function ChatForm ()  {
    return(
        <>
        <form class="js-cm-form" id="subForm" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="2BE4EF332AA2E32596E38B640E9056190134966126610899F0D95CFEBB3DFDC3750E5E25569004B6DD2688D9059E5EF5673C564979B945463D2D38A77B1E0BF5">
            <div class="index-module--row--2O8ac">
                <div class="index-module--column--ClKY_">
                    <input aria-label="Name" id="fieldName" maxlength="200" name="cm-name" placeholder="First Name" />
                </div>
            </div>
            <div class="index-module--row--2O8ac">
                <div class="index-module--column--ClKY_">
                    <input aria-label="Last name" id="fieldjybldh" maxlength="200" name="cm-f-jybldh" placeholder="Last name" />
                </div>
            </div>
            <div class="index-module--row--2O8ac">
                <div class="index-module--column--ClKY_">
                    <input autocomplete="Email" aria-label="Email" class="js-cm-email-input qa-input-email" id="fieldEmail" maxlength="200" name="cm-ydukdhj-ydukdhj" type="email" placeholder="Email" />
                </div>
            </div>
            <div class="index-module--row--2O8ac">
                <div class="index-module--column--ClKY_">
                    <input aria-label="Phone" id="fieldjybldk" maxlength="200" name="cm-f-jybldk" placeholder="Phone" />
                </div>
            </div>
            <div class="index-module--row--2O8ac">
                <div class="index-module--columnequals--2UYBh">
                    <input aria-required="" id="cm-privacy-consent" name="cm-privacy-consent" type="checkbox" /><label for="cm-privacy-consent" classname="index-module--columnequals--2UYBh" style={{ display: 'inline-block', marginLeft: '24px',  verticalAlign: 'middle'}}>I agree to be emailed</label>
                    <input id="cm-privacy-consent-hidden" name="cm-privacy-consent-hidden" type="hidden" value="true" />
                </div>
            </div>
            <div class="index-module--row--2O8ac">
                <input id="joinBtn" class="js-cm-submit-button" type="submit" />
            </div>
        </form>
      </>
    )
}
