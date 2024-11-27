// Accessing DOM elements
var resumeForm = document.getElementById('resumeForm');
var resumeOutput = document.getElementById('resumeOutput');
var resumeContent = document.getElementById('resumeContent');
var goBackBtn = document.getElementById('goBackBtn');
// Function to handle form submission
resumeForm.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // Prevent form from submitting normally
    // Get form values
    var name = document.getElementById('name').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var profilePicture = (_a = document.getElementById('profilePicture').files) === null || _a === void 0 ? void 0 : _a[0];
    // Show the generated resume
    var resumeHTML = "\n        <h2>".concat(name, "</h2>\n        ").concat(profilePicture ? "<img src=\"".concat(URL.createObjectURL(profilePicture), "\" alt=\"Profile Picture\" width=\"150\" height=\"150\">") : '', "\n        <p><strong>Contact Number:</strong> ").concat(contactNumber, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n    ");
    resumeContent.innerHTML = resumeHTML;
    resumeForm.style.display = 'none'; // Hide the form
    resumeOutput.style.display = 'block'; // Show the resume output
});
// Function to go back to the form for editing
goBackBtn.addEventListener('click', function () {
    resumeForm.style.display = 'block'; // Show the form again
    resumeOutput.style.display = 'none'; // Hide the resume output
});
