// function volume_sphere() {
//     //Write your code here
  
// } 

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

function volume_sphere(event) {
    event.preventDefault(); // Prevent form from submitting

    // Retrieve the radius value from the input field
    let radius = document.getElementById('radius').value;

    // Validate the input: ensure the radius is a non-negative number
    radius = parseFloat(radius);
    if (isNaN(radius) || radius < 0) {
        // Display 'NaN' in the volume field if input is invalid
        document.getElementById('volume').value = 'NaN';
        return;
    }

    // Calculate the volume of the sphere using the formula V = (4/3) * π * r^3
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round the calculated volume to four decimal places
    volume = volume.toFixed(4);

    // Display the calculated volume in the output field
    document.getElementById('volume').value = volume;
}

// Assign the volume_sphere function to the form's onsubmit event
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
