import React from "react"
import styles from "../pages/index.module.scss"
export default function RegisterForm ()  {
    return(
        <>
         <form className="js-cm-form" id="subForm" action="https://www.createsend.com/t/subscribeerror?description=" method="post" data-id="2BE4EF332AA2E32596E38B640E9056198BDB993E3EB63847E5EF21086953903ECF9187F0F3B85CA6BE80C29E12BD1727B70FF52493C37BEC1232353481063C71">
        <div className={styles.row}><div className={styles.column}><input aria-label="First name" id="fieldjruuiit" maxlength="200" name="cm-f-jruuiit" placeholder="First Name" /></div></div>
        <div className={styles.row}><div className={styles.column}><input aria-label="Last Name" id="fieldjruuiij" maxlength="200" name="cm-f-jruuiij" placeholder="Last Name"/></div></div>
        <div className={styles.row}><div className={styles.column}><input aria-label="Organisation" id="fieldjrkini" maxlength="200" name="cm-f-jrkini" placeholder="Organization"/></div></div>
        <div className={styles.row}><div className={styles.column}><input aautocomplete="Email" aria-label="Email" class="js-cm-email-input qa-input-email" id="fieldEmail" maxlength="200" name="cm-ydukhrj-ydukhrj" required="" type="email"  placeholder="Email" /></div></div>
        <div className={styles.row}><div className={styles.column}><input aria-label="Phone" id="fieldjrkind" maxlength="200" name="cm-f-jrkind" type="number" placeholder="Phone" /></div></div>
        <div className={styles.row}><div className={styles.columnequals}><input aria-required="" id="cm-privacy-consent" name="cm-privacy-consent" required="" type="checkbox" /><label for="cm-privacy-consent" classname={styles.columnequals} style={{display: 'inline-block', marginLeft: '24px', verticalAlign: 'middle'}}>I agree to be emailed</label>
        <input id="cm-privacy-consent-hidden" name="cm-privacy-consent-hidden" type="hidden" value="true"></input>
        </div></div>
        <div className={styles.row}>
        <input type="submit" value="Join" />
        </div>
      </form>
      <script type="text/javascript" src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"></script>
      </>
    )
}
