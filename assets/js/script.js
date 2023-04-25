// As always you should NOT edit the index.html, modify the script.js file :
// Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
// Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
// Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the input border red) , add a validation, if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
// Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white. Use the dark mode


import { firstname, displayFirstname } from "./display-firstname.js";
import { age, hardTruth } from "./hard-truth.js";
import { pwd, pwdConfirm, password, passwordVerify } from "./password.js";
import { toggleDarkmode, darkModeToggle } from "./dark-mode.js";

firstname.addEventListener("keyup", displayFirstname);
age.addEventListener("keyup", hardTruth);
pwd.addEventListener("keyup", password);
pwdConfirm.addEventListener("keyup", passwordVerify);
toggleDarkmode.addEventListener("change", darkModeToggle);