// Create an empty array
let martialArtArticles = [];

// Create an object that will have a heading and a  paragraph as its arguments
function MartialArt (heading, paragraph) {
    this.heading = heading,
    this.paragraph = paragraph
}

// Create a function that will take id as its argument
    // Select an element with an id of "id" argument set it to a variable called "article"
    // Select the text value of h3 from "article" save it to a variable
    // Select the text value of paragraph from "article" save it to a variable
    // Create an instance of the object that will take te values of h3 and p
const saveForLater = (id) => {
    const article = document.getElementById(id);
    let h3 = article.childNodes[1].innerHTML
    let p = article.childNodes[3].innerText
    const martialArt = new MartialArt(h3, p);

    // Get the array from the local storage
     let array = JSON.parse(localStorage.getItem('martialArtArticles'));
    // If the array is not null and its length is greater than 0
        // create a counter set it equal to 0
    // Loop through the array 
        // If the heading from the martialArt object is not equal to the heading of the object from the array
            // Increment counter
     if (array !== null && array.length > 0) {
        martialArtArticles = array;
        let counter = 0;
        martialArtArticles.forEach(element => {
            if (element.heading == martialArt.heading) {
                counter++;
            }
        })
        // If counter is equal to 0
            // Push the object to the array 
        if (counter === 0) {
            martialArtArticles.push(martialArt);
        }
    // Otherwise
    } else {
         // Push the object to the array
            martialArtArticles.push(martialArt);
        }
       // Add the array to the localStorage
        localStorage.setItem("martialArtArticles", JSON.stringify(martialArtArticles));

        // Get the array from the localStorage
        let arr = JSON.parse(localStorage.getItem('martialArtArticles'));
        // Alert the number of articles are saved
        alert(`You have ${arr.length} articles saved!`)
}

