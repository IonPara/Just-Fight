
// Select all of the buttons
const saveBtn = document.querySelectorAll('.save-for-later');

let bronze = true;
let gold = true;
let platinum = true;

// Create an event listener for each button
saveBtn.forEach(element => {
    element.addEventListener('click', (event) => {
        const package = event.target.classList[0];

        // Create a function that will set the items from the local storage to true
            // It will take 2 arguments "string" and "item" 
            // If the first class name of the event's target is equal "string"
            // Find it on localStorage and set equal to "item"
        const setItems = (string, item) => {
            if(package === string) {
                localStorage.setItem(package, JSON.stringify(item))
            }    
        }

        // Called the function with all 3 values
        setItems('bronze', bronze);
        setItems('gold', gold);
        setItems('platinum', platinum);

        // Create an alert that the package was successfully added
        alert('The package was successfully saved!')
    }) 
});