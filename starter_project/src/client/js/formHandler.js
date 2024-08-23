// function that checks the URL 
import { checkForName } from './nameChecker'

// If working on Udacity workspace, update this with the Server API URL e.g. `https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api`
// const serverURL = 'https://wfkdhyvtzx.prod.udacity-student-workspaces.com/api'
const serverURL = 'https://localhost:8081/api'

// const form = document.getElementById('urlForm');
// form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;


    
    // Check if the URL is valid
    Client.checkForName(formText)
     
  

        // If the URL is valid, send it to the server using the serverURL constant above
        fetch(serverURL, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: formText }),
        })
        .then(res => res.json())
        .then(data => {
            
            updateView(data);
        })
        .catch(error => {
            console.log("Error:", error);
        });
}

function updateView(data) {
   
    
    document.getElementById('results').innerHTML = `
    <p><strong>Polarity:</strong> ${res.polarity}</p>
    <p><strong>Subjectivity:</strong> ${res.subjectivity}</p>
    <p><strong>Text:</strong> ${res.text}</p>
`;
}

// Function to send data to the server

// Export the handleSubmit function
export { handleSubmit };


