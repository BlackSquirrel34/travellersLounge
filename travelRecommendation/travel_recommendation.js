// implement dummy function for contact form
sendMessage(){
  alert('Thank you for contacting us!')

}


const btnSearch = document.getElementById('btnSearch');

// Task 6: Fetch data with fetch API method
// fetch data from the travel_recommendation_api.json file using the fetch API method, 
// from there you can fetch travel-related details, such as the name of the place. 

//   <li><button id='btnSearch'>Search</button>

function fetchData() {

        fetch('travel_recommendation_api.json')
          .then(response => response.json())
          .then(data => {

// It is good if the console.log logs the data. Otherwise, you need to look for a different API.
            console.log(data);
             // turn into JS object
          //  let dataobject = JSON.parse(data);  
             // return data 
          })
          .catch(error => {
            console.error('An error occurred while fetching data: ', error);
          });
}



 

// Task 7: Keyword searches 

;


/*
     
            const country = data.countries.find(country => country.name.toLowerCase() === input);


            if (country) {
              const name = country.name.join(', ');
              const cities = country.cities.join(', ');

              */



// see also healthcare app:
/*
function searchCondition() {
        const input = document.getElementById('conditionInput').value.toLowerCase();
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';

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

// The website should display results only after the user clicks the Search button.> onlick event handler



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

        var resultData =  giveRecommendation(inputKeyword)
        // result data will be like json


        // code for outputting the json nicely formatted



}

btnSearch.addEventListener('click', giveRecommendation);  
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
    }  

// is this lien necessary??
btnClear.addEventListener('click', resetSearch);  


// finally, check the output by cloning the repo into the working environment and running it on server.
// do not forget the git part of it.



