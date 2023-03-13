<<<<<<< HEAD

// This function was copied from the https://www.emailjs.com/docs/tutorial/creating-contact-form/
    // The function will send the message from the form to my email using EmailJS service
const getEmail = () => {
    window.onload = () => {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;

            // When the message was an alert will pop up 
            emailjs.sendForm('service_ymbbgkm', 'contact_form', this)
                .then(function() {
                    alert('The message was successfully sent!');
                }, function(error) {
                    console.log('FAILED...', error);
                });
                // Empty the input fields after the message was sent
                document.getElementById('contact-name').value = '';
                document.getElementById('contact-email').value = '';
                document.getElementById('message').value = '';

        });
    }

}
getEmail();


// Create an array that will store all of the objects
let array = [];

let likeDislike;

// Create an object for the comments form
function Comments (comment, name) {
    this.comment = comment,
    this.name = name;
}

// Create a function that will check if the page has run before
let hasPageRunBefore = () => {
    // If the page has run before
        // Get the array from the localStorage 
        // Set "likeDislike" equal to the first object
    if(localStorage.getItem("hasPageRun")) {
        array = JSON.parse(localStorage.getItem('array'))
        likeDislike = array[0];
        // If the property "like" from likeDislike object is true
            // Change the color of the thumb up icon
        // Else if the "dislike" property  from likeDislike object is true
            // Change the color of thumb down icon
        if (likeDislike.like === true) {
            changeColor(thumbUp, quote)

        } else if (likeDislike.dislike === true) {
            changeColor(thumbDown, `Looks like you don't enjoy martial arts!`);
        }

        // If the array's length is greater than 2
            // Loop through the array starting from index 1
                // If the array[i] is true 
                // Add the comments
        if (array.length >= 2) {
            for (let i = 1; i < array.length; i++) {
                 if (array[i].comment) {
                    addComment(array[i].comment, array[i].name)
                }
            }
        }
    // Otherwise 
        // Set likeDislike to an object with both properties set to false
        // Create an instance of the Comments object
        // Push both object to the array
        // add the array to the local storage
        // Set hasPageRun to true and add it to the local storage
    } else {
        likeDislike = {
            like: false, 
            dislike: false
        }
        let object = new Comments (textValue, nValue);
        array.push(likeDislike);
        array.push(object);

        localStorage.setItem('array', JSON.stringify(array));
        let hasPageRun = true;
        localStorage.setItem('hasPageRun', JSON.stringify(hasPageRun));

        // Add "martialArtArticles" array to the local storage
        let martialArtArticles = [];
        localStorage.setItem('martialArtArticles', JSON.stringify(martialArtArticles))

        // add 3 plans to the local storage
        localStorage.setItem('bronze', JSON.stringify(false))
        localStorage.setItem('gold', JSON.stringify(false))
        localStorage.setItem('platinum', JSON.stringify(false))
    }
}


// Select the thumb up and thumb down icons add them to variables
const thumbUp = document.getElementById('thumb-up');
const thumbDown = document.getElementById('thumb-down');
// Create a paragraph element
const paragraph = document.createElement('p');
// Create a variable that will store a quote
let quote = `Learning defense improves the attack. If the lion knows how the prey can escape, it will capture it in a much more precise way.
Rillion Gracie`;

// create a function that will change the color of the icons
    // It will take 2 arguments
    // Select the heading from the first section
    // Toggle the class of the element to a bootstrap class tha will change the color to blue
    // Set the created paragraph to the value of the "string" parameter
    // Append the paragraph to the heading
const changeColor = (elem, string) => {
    const heading = document.querySelector('.exp-head');
    elem.classList.toggle("text-primary");
    paragraph.textContent = string
    heading.append(paragraph)

    // The fourth class of the element is "text-primary" (if the icon is blue)
        // Display the paragraph
        // If the element's id is thumb up set, like property from likeDislike object to true
            // Otherwise set it to false
        //  If the element's id is thumb down, set dislike property from likeDislike object to true
            // Otherwise set it to false
    if (elem.classList[4] === 'text-primary') {
        paragraph.style.display = 'block';
        likeDislike.like = elem.id === 'thumb-up'? true : false;
        likeDislike.dislike = elem.id === 'thumb-down'? true : false;
    // Else  remove the paragraph
        // set like property from likeDislike object to false
    } else {
        paragraph.style.display = 'none';
        likeDislike.like = false;
    }
    // Add the array to the localStorage
    localStorage.setItem("array", JSON.stringify(array));
}

// Comment section------------------------------------

// Select the comment container and set it to a variable
const container = document.querySelector('.comment-container');
// Select the input and set it to a variable
const input = document.getElementById('name')
// Define two variables
// That we will set later
let textValue;
let nValue;

// Create a function that will add the comments 
const addComment = (value1, value2) => {
    // Create a div element
    // Create a paragraph element
    // Create an h6 element
    const div = document.createElement('div')
    const commentP = document.createElement('p');
    const name = document.createElement('h6')
    // Select the element with an id of "comment"
    const textarea = document.getElementById('comment');

    // Set are variables to the values from textarea and input
    textValue = textarea.value;
    nValue = input.value;
    // If the firs argument is negative
    if (!value1) {
        // Set the text content of the created paragraph to textValue
        // Set the text content of the created h6 to nValue
        commentP.textContent = textValue;
        name.textContent = nValue;
    // Else
        // Set the text content of the created paragraph to the first argument
        // Set the text content of the created h6 to the second argument
    } else {
        commentP.textContent = value1;
        name.textContent = value2;
    }
    // Display the container
    // Add div to the container
    container.style.display = 'block';
    container.append(div)
    // Add the paragraph to the div
    // Add the h6 to the div
    div.append(commentP)
    div.append(name)

    // Empty the name and comment inputs
    textarea.value = '';
    input.value = '';
}

// Create a function that will add an object to the array
    // Create an new Comments instance and add it to the array
    // Set the value of the comment property of the last object from the array to textValue 
    // Set the value of the name property of the last object from the array to nValue
    //  Add the array to the localStorage
const addToTheArray = () => {
    let object = new Comments (textValue, nValue);
    array.push(object);
    array[array.length - 1].comment = textValue;
    array[array.length - 1].name = nValue   
    localStorage.setItem("array", JSON.stringify(array));
}

// Run hasPageRunBefore
hasPageRunBefore();

//---------------------------- Save for later---------------------------------------------

// Select 3 boxes from the save for later section and add them to variable
const bronze = document.querySelector('.bronze')
const gold = document.querySelector('.gold');
const platinum = document.querySelector('.platinum');

// Create a function that will display the box
// It will take 2 argument a string and a selector
const showPackages = (string, selector) => {
    // If the item from the local storage with the name of "string" is equal to true
        // Set the selector to display flex (show  the element)
    if (localStorage.getItem(string) === 'true') {
        selector.style.display = 'flex';
        // Otherwise remove the selector 
    } else {
        selector.style.display = 'none';
    }
}


// Select the elements with a class of "remove"
const remove = document.querySelectorAll('.remove');
// Add an event listener to every element
    // When the element is clicked remove its parent
remove.forEach(element => {
    element.addEventListener('click', event => {
        event.target.parentElement.style.display = 'none';
        // update the element that has the name of the second class of the event's target to "false"
        localStorage.setItem(event.target.classList[1], JSON.stringify(false));
        showHeadings();
    })
    
});



// Run showPackages with all 3 boxes
showPackages('bronze', bronze);
showPackages('gold', gold);
showPackages('platinum', platinum);


// A function that will display the articles
const showArticle = () => {
    // Select the element with a class of "articles-container"
    // Get the array from the local storage
    const articles = document.querySelector('.articles-container');
    const martialArtArticles  = JSON.parse(localStorage.getItem('martialArtArticles'));
    // If the array is not equal to nul
    if (martialArtArticles !== null) {
        // Loop through the array 
            // for each object 
                // Create a div element and give it a class name of "item"
                // Create an h5 element and set its text content to "X" , give it a class name of "remove", and bootstrap class to align text right
        martialArtArticles.forEach(object => {

            let div = document.createElement('div');
            div.setAttribute('class', 'item')
            
            let remove = document.createElement('h5');
            remove.textContent = 'X';
            remove.setAttribute('class', 'remove text-right');

            // Create an h3 element and set its value equal to the value of the first property of the object
            // Create a  element and set its value equal to the value of the second property of the object
            // Add h3, p, remove to the div element
            // Add div to the "articles"
            let h3 = document.createElement('h3');
            h3.textContent = object.heading
            let p = document.createElement('p');
            p.textContent = object.paragraph;
            div.append(remove,h3, p);
            articles.append(div);
            
        });
    }
}

// Run the function
showArticle();


// Select all of the elements with the class name of "remove"
// Get the martial art array from the local storage
const removeArt = document.querySelectorAll('.remove');
const martialArtArr  = JSON.parse(localStorage.getItem('martialArtArticles'));

// For each element with remove class name
    // Add an event listener
    // When clicked remove elements parent
removeArt.forEach(element => {
    element.addEventListener('click', event => { 
        event.target.parentElement.style.display = 'none';
        // Select the text content of the next sibling of the element and it to a variable called find object
        const findObject = event.target.nextSibling.textContent
        // For each object in the martial arts array
            // If object's heading is equal to "findObject"
                // Remove the object from the array
        martialArtArr.forEach(object => {
            if(object.heading === findObject) {
                martialArtArr.splice(martialArtArr.indexOf(object), 1)
            }
        });
        // Update the array
        // Run "showHeadings()"
        localStorage.setItem("martialArtArticles", JSON.stringify(martialArtArr))
        showHeadings();
    })
    
});


// if (!localStorage.getItem("plansHasRunBefore")) {
//     const plansHasRunBefore = true;

// }

// Create a function that will set the right heading for when there are items
const showHeadings = () => {
    // Get bronze gold and platinum from the localStorage
    let bron = localStorage.getItem('bronze');
    let gl = localStorage.getItem('gold');
    let plat = localStorage.getItem('platinum');
    
    //If bronze gold and platinum are equal to false
    // Remove the element with a class of "saved-items-heading"
    // Display the element with a class of "not-saved"
    if (bron === 'false' && gl === 'false' && plat === 'false' && martialArtArr.length === 0 ) {
        document.querySelector('.saved-items-heading').style.display = 'none';
        document.querySelector('.not-saved').style.display = 'block';
    // Otherwise
    // Display the element with a class of "saved-items-heading"
    // Remove the element with a class of "not-saved"
    } else {
        document.querySelector('.saved-items-heading').style.display = 'block';
        document.querySelector('.not-saved').style.display = 'none';
    }
}
=======

// This function was copied from the https://www.emailjs.com/docs/tutorial/creating-contact-form/
    // The function will send the message from the form to my email using EmailJS service
const getEmail = () => {
    window.onload = () => {
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            // generate a five digit number for the contact_number variable
            this.contact_number.value = Math.random() * 100000 | 0;

            // When the message was an alert will pop up 
            emailjs.sendForm('service_ymbbgkm', 'contact_form', this)
                .then(function() {
                    alert('The message was successfully sent!');
                }, function(error) {
                    console.log('FAILED...', error);
                });
                // Empty the input fields after the message was sent
                document.getElementById('contact-name').value = '';
                document.getElementById('contact-email').value = '';
                document.getElementById('message').value = '';

        });
    }

}
getEmail();


// Create an array that will store all of the objects
let array = [];

let likeDislike;

// Create an object for the comments form
function Comments (comment, name) {
    this.comment = comment,
    this.name = name;
}

// Create a function that will check if the page has run before
let hasPageRunBefore = () => {
    // If the page has run before
        // Get the array from the localStorage 
        // Set "likeDislike" equal to the first object
    if(localStorage.getItem("hasPageRun")) {
        array = JSON.parse(localStorage.getItem('array'))
        likeDislike = array[0];
        // If the property "like" from likeDislike object is true
            // Change the color of the thumb up icon
        // Else if the "dislike" property  from likeDislike object is true
            // Change the color of thumb down icon
        if (likeDislike.like === true) {
            changeColor(thumbUp, quote)

        } else if (likeDislike.dislike === true) {
            changeColor(thumbDown, `Looks like you don't enjoy martial arts!`);
        }

        // If the array's length is greater than 2
            // Loop through the array starting from index 1
                // If the array[i] is true 
                // Add the comments
        if (array.length >= 2) {
            for (let i = 1; i < array.length; i++) {
                 if (array[i].comment) {
                    addComment(array[i].comment, array[i].name)
                }
            }
        }
    // Otherwise 
        // Set likeDislike to an object with both properties set to false
        // Create an instance of the Comments object
        // Push both object to the array
        // add the array to the local storage
        // Set hasPageRun to true and add it to the local storage
    } else {
        likeDislike = {
            like: false, 
            dislike: false
        }
        let object = new Comments (textValue, nValue);
        array.push(likeDislike);
        array.push(object);

        localStorage.setItem('array', JSON.stringify(array));
        let hasPageRun = true;
        localStorage.setItem('hasPageRun', JSON.stringify(hasPageRun));

        // Add "martialArtArticles" array to the local storage
        let martialArtArticles = [];
        localStorage.setItem('martialArtArticles', JSON.stringify(martialArtArticles))

        // add 3 plans to the local storage
        localStorage.setItem('bronze', JSON.stringify(false))
        localStorage.setItem('gold', JSON.stringify(false))
        localStorage.setItem('platinum', JSON.stringify(false))
    }
}


// Select the thumb up and thumb down icons add them to variables
const thumbUp = document.getElementById('thumb-up');
const thumbDown = document.getElementById('thumb-down');
// Create a paragraph element
const paragraph = document.createElement('p');
// Create a variable that will store a quote
let quote = `Learning defense improves the attack. If the lion knows how the prey can escape, it will capture it in a much more precise way.
Rillion Gracie`;

// create a function that will change the color of the icons
    // It will take 2 arguments
    // Select the heading from the first section
    // Toggle the class of the element to a bootstrap class tha will change the color to blue
    // Set the created paragraph to the value of the "string" parameter
    // Append the paragraph to the heading
const changeColor = (elem, string) => {
    const heading = document.querySelector('.exp-head');
    elem.classList.toggle("text-primary");
    paragraph.textContent = string
    heading.append(paragraph)

    // The fourth class of the element is "text-primary" (if the icon is blue)
        // Display the paragraph
        // If the element's id is thumb up set, like property from likeDislike object to true
            // Otherwise set it to false
        //  If the element's id is thumb down, set dislike property from likeDislike object to true
            // Otherwise set it to false
    if (elem.classList[4] === 'text-primary') {
        paragraph.style.display = 'block';
        likeDislike.like = elem.id === 'thumb-up'? true : false;
        likeDislike.dislike = elem.id === 'thumb-down'? true : false;
    // Else  remove the paragraph
        // set like property from likeDislike object to false
    } else {
        paragraph.style.display = 'none';
        likeDislike.like = false;
    }
    // Add the array to the localStorage
    localStorage.setItem("array", JSON.stringify(array));
}

// Comment section------------------------------------

// Select the comment container and set it to a variable
const container = document.querySelector('.comment-container');
// Select the input and set it to a variable
const input = document.getElementById('name')
// Define two variables
// That we will set later
let textValue;
let nValue;

// Create a function that will add the comments 
const addComment = (value1, value2) => {
    // Create a div element
    // Create a paragraph element
    // Create an h6 element
    const div = document.createElement('div')
    const commentP = document.createElement('p');
    const name = document.createElement('h6')
    // Select the element with an id of "comment"
    const textarea = document.getElementById('comment');

    // Set are variables to the values from textarea and input
    textValue = textarea.value;
    nValue = input.value;
    // If the firs argument is negative
    if (!value1) {
        // Set the text content of the created paragraph to textValue
        // Set the text content of the created h6 to nValue
        commentP.textContent = textValue;
        name.textContent = nValue;
    // Else
        // Set the text content of the created paragraph to the first argument
        // Set the text content of the created h6 to the second argument
    } else {
        commentP.textContent = value1;
        name.textContent = value2;
    }
    // Display the container
    // Add div to the container
    container.style.display = 'block';
    container.append(div)
    // Add the paragraph to the div
    // Add the h6 to the div
    div.append(commentP)
    div.append(name)

    // Empty the name and comment inputs
    textarea.value = '';
    input.value = '';
}

// Create a function that will add an object to the array
    // Create an new Comments instance and add it to the array
    // Set the value of the comment property of the last object from the array to textValue 
    // Set the value of the name property of the last object from the array to nValue
    //  Add the array to the localStorage
const addToTheArray = () => {
    let object = new Comments (textValue, nValue);
    array.push(object);
    array[array.length - 1].comment = textValue;
    array[array.length - 1].name = nValue   
    localStorage.setItem("array", JSON.stringify(array));
}

// Run hasPageRunBefore
hasPageRunBefore();

//---------------------------- Save for later---------------------------------------------

// Select 3 boxes from the save for later section and add them to variable
const bronze = document.querySelector('.bronze')
const gold = document.querySelector('.gold');
const platinum = document.querySelector('.platinum');

// Create a function that will display the box
// It will take 2 argument a string and a selector
const showPackages = (string, selector) => {
    // If the item from the local storage with the name of "string" is equal to true
        // Set the selector to display flex (show  the element)
    if (localStorage.getItem(string) === 'true') {
        selector.style.display = 'flex';
        // Otherwise remove the selector 
    } else {
        selector.style.display = 'none';
    }
}


// Select the elements with a class of "remove"
const remove = document.querySelectorAll('.remove');
// Add an event listener to every element
    // When the element is clicked remove its parent
remove.forEach(element => {
    element.addEventListener('click', event => {
        event.target.parentElement.style.display = 'none';
        // update the element that has the name of the second class of the event's target to "false"
        localStorage.setItem(event.target.classList[1], JSON.stringify(false));
        showHeadings();
    })
    
});



// Run showPackages with all 3 boxes
showPackages('bronze', bronze);
showPackages('gold', gold);
showPackages('platinum', platinum);


// A function that will display the articles
const showArticle = () => {
    // Select the element with a class of "articles-container"
    // Get the array from the local storage
    const articles = document.querySelector('.articles-container');
    const martialArtArticles  = JSON.parse(localStorage.getItem('martialArtArticles'));
    // If the array is not equal to nul
    if (martialArtArticles !== null) {
        // Loop through the array 
            // for each object 
                // Create a div element and give it a class name of "item"
                // Create an h5 element and set its text content to "X" , give it a class name of "remove", and bootstrap class to align text right
        martialArtArticles.forEach(object => {

            let div = document.createElement('div');
            div.setAttribute('class', 'item')
            
            let remove = document.createElement('h5');
            remove.textContent = 'X';
            remove.setAttribute('class', 'remove text-right');

            // Create an h3 element and set its value equal to the value of the first property of the object
            // Create a  element and set its value equal to the value of the second property of the object
            // Add h3, p, remove to the div element
            // Add div to the "articles"
            let h3 = document.createElement('h3');
            h3.textContent = object.heading
            let p = document.createElement('p');
            p.textContent = object.paragraph;
            div.append(remove,h3, p);
            articles.append(div);
            
        });
    }
}

// Run the function
showArticle();


// Select all of the elements with the class name of "remove"
// Get the martial art array from the local storage
const removeArt = document.querySelectorAll('.remove');
const martialArtArr  = JSON.parse(localStorage.getItem('martialArtArticles'));

// For each element with remove class name
    // Add an event listener
    // When clicked remove elements parent
removeArt.forEach(element => {
    element.addEventListener('click', event => { 
        event.target.parentElement.style.display = 'none';
        // Select the text content of the next sibling of the element and it to a variable called find object
        const findObject = event.target.nextSibling.textContent
        // For each object in the martial arts array
            // If object's heading is equal to "findObject"
                // Remove the object from the array
        martialArtArr.forEach(object => {
            if(object.heading === findObject) {
                martialArtArr.splice(martialArtArr.indexOf(object), 1)
            }
        });
        // Update the array
        // Run "showHeadings()"
        localStorage.setItem("martialArtArticles", JSON.stringify(martialArtArr))
        showHeadings();
    })
    
});


// if (!localStorage.getItem("plansHasRunBefore")) {
//     const plansHasRunBefore = true;

// }

// Create a function that will set the right heading for when there are items
const showHeadings = () => {
    // Get bronze gold and platinum from the localStorage
    let bron = localStorage.getItem('bronze');
    let gl = localStorage.getItem('gold');
    let plat = localStorage.getItem('platinum');
    
    //If bronze gold and platinum are equal to false
    // Remove the element with a class of "saved-items-heading"
    // Display the element with a class of "not-saved"
    if (bron === 'false' && gl === 'false' && plat === 'false' && martialArtArr.length === 0 ) {
        document.querySelector('.saved-items-heading').style.display = 'none';
        document.querySelector('.not-saved').style.display = 'block';
    // Otherwise
    // Display the element with a class of "saved-items-heading"
    // Remove the element with a class of "not-saved"
    } else {
        document.querySelector('.saved-items-heading').style.display = 'block';
        document.querySelector('.not-saved').style.display = 'none';
    }
}
>>>>>>> 0fd44c21b66e83d8edb296cb9a57458fc2abac79
 showHeadings();