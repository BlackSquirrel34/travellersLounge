// implement dummy function for contact form
function sendMessage() {
  alert('Thank you for contacting us!')
  console.log("sendMessage executed")

}

// global variable to store json data




// Task 6: Fetch data with fetch API method
// fetch data from the travel_recommendation_api.json file using the fetch API method, 
// from there you can fetch travel-related details, such as the name of the place. 

//   <li><button id='btnSearch'>Search</button>

function fetchData() {

       fetch('/public/api/api.json')
            .then(response => response.json())
            .then(data => {
              console.log("fetchData executed")
              console.log(data);
              return data;
           //   Object { countries: (3) [...], temples: (2) [...], beaches: (2)[...]}
              // sub-structure:
              // beaches: Array [{id:1, name: "asgf", imageUrl: "aghjsghj.jpg", description: "shg"}, {id: 2, ...}]
              // countries: Array [
              //{id: 1, name: "shg", cities:
              //              [{name: "", imageUrl: "saf", descripton: "sg"}, {name:...}, {...}, {...}]
              // }, {id: 2, name: "w", cities: [...]}
              // ]
              // temples: Array [{id: 1, name: "g", imageUrl: "f", description: "g"}, {id: 2, ...}, {...}]
            })

            .catch(error => {
              console.error('Error fetching countries data:', error);
            });
}
// It is good if the console.log logs the data. Otherwise, you need to look for a different API.
             

// very basic lemmatization for english language, without external library like natural
function lemmatize(word) {
    const suffixes = ["s", "es", "ed", "ing"];
    for (const suffix of suffixes) {
        if (word.endsWith(suffix)) {
            return word.slice(0, -suffix.length);
        }
    }
    return word; // return the original if no suffix is found
}


// Task 7: Keyword searches /*
// with async functions we cannot imply use return statements to use result in another function
async function keywordSearch() {
    const inputRaw = document.getElementById('keywordInput').value.toLowerCase();
    const input = lemmatize(inputRaw).toLowerCase(); // Normalize input
    console.log("Input: ", input);

    try {
        const response = await fetch('/public/api/api.json'); // Fetch the JSON data
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Handle errors
        }
        const jsonData = await response.json(); // Parse the JSON data

        console.log("fetchData executed");
        console.log("this data was fetched: ", jsonData); // Log the JSON data to ensure it was fetched correctly

        const allKeys = Object.keys(jsonData); // Retrieve all keys
        console.log("These keys exist: ", allKeys); // Log the keys of the parsed JSON object

        // Example of filtering based on input
        const result = [];
        const regex = new RegExp(`^${input}.*`, 'i'); // Matches input at the start of the key

        allKeys.forEach(key => {
            const value = jsonData[key];

            // Log key and value for debugging
            console.log(`Checking key: ${key}, value: ${value}`);

            // Check if the key itself matches the input
            if (regex.test(key.toLowerCase())) {
                result.push({ key: key, value: value }); // Include key-value pair where the key matches
            }
        });

        // Now search in the "countries" sub-structure only.
        const countries = jsonData.countries || []; // Retrieve countries, ensuring it's an array
        console.log("Countries: ", countries);

        countries.forEach(country => {
            let countryName;

            // Check if 'country' is an object, then access the 'name' property
            if (typeof country === 'object' && country.name) {
                countryName = country.name;
            } else {
                countryName = country; // If it’s already a string
            }

            console.log(`Checking country: ${countryName}`); // Log the country name

            // Check if the country name matches the input
            if (regex.test(countryName.toLowerCase())) {
                result.push(country); // Push the entire country object into result
            }
        }); // end of forEach


        console.log("Matching entries: ", result); // Log the results
        if (result.length === 0) {
            console.log("No matches found for the input.");
        }


    } catch (error) {
        console.error("Error fetching or processing the data:", error);
    }
}// for search term temple: returns {key: temples, value: [{id: 1, name: dsjhg", imageUrl: "g", }, {}]}
// works also for beach
// skip recommendation based on country?
// > no, we just 




// add event listener. testing only. success.
document.getElementById("btnSearch").addEventListener("click", keywordSearch); 

// important for displaying information:
// for printing: we get back a key-value pair. 
// the value is an array of objects. and these objects are what we're interested in.
// they have these key-value pairs: id - 2, name: string, imageUrl: string, description: string
/*
function searchCondition() {
        fetch('health_analysis.json')
          .then(response => response.json())
          .then(data => {
            const condition = data.conditions.find(item => item.name.toLowerCase() === input);

            if (condition) {
              const symptoms = condition.symptoms.join(', ');
              const prevention = condition.prevention.join(', ');
              const treatment = condition.treatment;

              resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
              resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

              resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
              resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
              resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
            } else {
              resultDiv.innerHTML = 'Condition not found.';
            }
          })
          .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
          });
      }
        btnSearch.addEventListener('click', searchCondition);  

    */
//  also accept variants

// For example, if the user enters "beach," or "beaches," "Beach" or "BEACH," 
// then you need to write JavaScript code so that it accepts all variations of this keyword.

// For uppercase letters in the keyword, you can convert them to lowercase 
// in your JavaScript using the string manipulation toLowerCase() method.

// Similarly, you need to create logic to match keywords entered for temples and countries.
// its not expected the website can deal with anything else than beach, temple or countries.



// Task 8: Recommendations
// In this task, you need to fetch the details of the places you recommend based on
//  which keyword the user enters: beach, temple, or country.

// For each of these three keywords, your results should display at least two recommendations, an image, and a description. 
// these get rendered to the home page

function giveRecommendation(){
    // <li><input type="text" id="keywordInput" placeholder="Enter keywords to get a recommendation">  </li>
        const inputKeyword = document.getElementById('keywordInput').value.toLowerCase();
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = ''

        var resultData =  giveRecommendation(inputKeyword);
        // result data will be like json


        // code for outputting the json nicely formatted



}

// btnSearch.addEventListener('click', giveRecommendation);  
// sample code:
/*
function generateReport() {
          const numPatients = patients.length;
          const conditionsCount = {
            Diabetes: 0,
            Thyroid: 0,
            "High Blood Pressure": 0,
          };
          const genderConditionsCount = {
            Male: {
              Diabetes: 0,
              Thyroid: 0,
              "High Blood Pressure": 0,
            },
            Female: {
              Diabetes: 0,
              Thyroid: 0,
              "High Blood Pressure": 0,
            },
          };

          for (const patient of patients) {
            conditionsCount[patient.condition]++;
            genderConditionsCount[patient.gender][patient.condition]++;
          }

          report.innerHTML = `Number of patients: ${numPatients}<br><br>`;
          report.innerHTML += `Conditions Breakdown:<br>`;
          for (const condition in conditionsCount) {
            report.innerHTML += `${condition}: ${conditionsCount[condition]}<br>`;
          }

          report.innerHTML += `<br>Gender-Based Conditions:<br>`;
          for (const gender in genderConditionsCount) {
            report.innerHTML += `${gender}:<br>`;
            for (const condition in genderConditionsCount[gender]) {
              report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`;
            }
          }
        }

*/

/*and that's the corresponding css:
 #report,#result {
    padding: 10px;
    max-width: 400px;
    word-wrap: break-word;
  }
#result{
  height: 400px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
}
  #result img{
    width: 200px;
    height: 100px;
  }
  */


// Task 9: Clear button
// Create logic in your JavaScript file for a clear button to clear the results. 
// To implement this feature, you can create a function that will be called after clicking on the clear button in the navbar.
function resetSearch() {
          document.getElementById("keywordInput").value = "";
          console.log("resetSearch executed")
    }  


btnClear.addEventListener('click', resetSearch);  


// finally, check the output 
// do not forget the git part of it.



