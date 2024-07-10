
/**
 * Array of applicant objects, each containing information about an applicant.
 * @type {Object[]}
 */
const applicants = [
    {
        no: "raman0401",
        name: "Raman Singh",
        duration: "1 month",
        role: "Web Developer"
    },
    {
        no: "nishu2412",
        name: "Nishu Singh",
        duration: "1 month",
        role: "Web Developer"
    },
    {
        no: "jeevan0303",
        name: "Jeevan Singh",
        duration: "1 month",
        role: "Python Programmer"
    },
    {
        no: "Haridwar0101",
        name: "Haridwar Singh",
        duration: "1 month",
        role: "Data Analyst"
    },
    {
        no: "gayatri2401",
        name: "Gayatri Singh",
        duration: "1 month",
        role: "UI/UX designer"
    },
];

/**
 * Gets the login form element from the DOM.
 * @type {HTMLFormElement}
 */
const loginForm = document.getElementById("loginform");

/**
 * Gets the name elements from the DOM.
 * @type {HTMLCollectionOf<HTMLSpanElement>}
 */
const name = document.getElementsByClassName("name");

/**
 * Gets the duration elements from the DOM.
 * @type {HTMLCollectionOf<HTMLSpanElement>}
 */
const duration = document.getElementsByClassName("duration");

/**
 * Gets the role elements from the DOM.
 * @type {HTMLCollectionOf<HTMLSpanElement>}
 */
const role = document.getElementsByClassName("role");

const notValid = document.getElementsByClassName("not-valid");

const Valid = document.getElementsByClassName("valid");

const certificate = document.getElementsByClassName("certificate");

/**
 * Gets the main element from the DOM.
 * @type {HTMLElement}
 */
var main = document.getElementById("main");

/**
 * Sets the opacity of the main element to 1.
 */
function opacity() {
    main.style.opacity = "1";
}

/**
 * Handles the submit event of the login form.
 * @param {Event} e - The submit event.
 */
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const noInput = document.getElementById("certino").value;

    /**
     * Finds the applicant object that matches the input no.
     * @type {Object|undefined}
     */
    const applicant = applicants.find((a) => a.no === noInput);
    
    if(applicant) {
        console.log(applicant);
        name[0].innerHTML = applicant.name;
        duration[0].innerHTML = applicant.duration; 
        role[0].innerHTML = applicant.role;
        Valid[0].innerHTML = `Cretificate found with ID : ${applicant.no} `;
        

    }
    else {
        name[0].innerHTML = "No such applicant found";
        duration[0].innerHTML = "********"; 
        role[0].innerHTML ="********";
        Valid[0].innerHTML = "No Certificate Found"
    }
});