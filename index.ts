// Accessing DOM elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
const resumeContent = document.getElementById('resumeContent') as HTMLDivElement;
const goBackBtn = document.getElementById('goBackBtn') as HTMLButtonElement;

// Function to handle form submission
resumeForm.addEventListener('submit', function(event: Event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const contactNumber = (document.getElementById('contactNumber') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const profilePicture = (document.getElementById('profilePicture') as HTMLInputElement).files?.[0];

    // Show the generated resume
    const resumeHTML = `
        <h2>${name}</h2>
        ${profilePicture ? `<img src="${URL.createObjectURL(profilePicture)}" alt="Profile Picture" width="150" height="150">` : ''}
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
    `;

    resumeContent.innerHTML = resumeHTML;
    resumeForm.style.display = 'none';  // Hide the form
    resumeOutput.style.display = 'block';  // Show the resume output
});

// Function to go back to the form for editing
goBackBtn.addEventListener('click', function() {
    resumeForm.style.display = 'block';  // Show the form again
    resumeOutput.style.display = 'none';  // Hide the resume output
});
