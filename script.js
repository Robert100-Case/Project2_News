var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var resultSummaryEl = document.querySelector('#result-summary');

//resultTextEl.textContent = await  response.text();
async function fetchText() {
    let response = await fetch("https://news67.p.rapidapi.com/feed?limit=10&skip=0&language=en&source=apnews.com", {
		method: "GET",
		headers: {
			"x-rapidapi-key": "47f533e0d5msh186f53b5ecb9125p19c322jsn6064e31069db",
			"x-rapidapi-host": "news67.p.rapidapi.com"
		}
	})
  
	var linkButtonEl = document.createElement('a');
	  linkButtonEl.textContent = 'Show Stored Articles';
	  //linkButtonEl.setAttribute('href', "#");
	  linkButtonEl.classList.add('btn', 'btn-dark');
	  resultContentEl.append(linkButtonEl); 

    //let data = await response.text();
   let commit = await response.json();
	/*resultTextEl.textContent = commit[0].Url;
	resultContentEl.textContent = commit[0].Title;
	resultSummaryEl.textContent = commit[0].Summary;
*/  
    //resultContentE1.textContent= commit[0].Cities[0];
   for(i=0;i<10;i++){
    //resultSummaryEl.textContent = commit[0].Summary;
	
	var resultCard = document.createElement('div');
	resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');
  

	var resultBody = document.createElement('div');
    //resultBody.classList.add('card-body');
    resultCard.append(resultBody);

	var bodyContentEl = document.createElement('p');
	bodyContentEl.innerHTML =
	  //'This is a Test of dynamic html <br/>';
	    commit[i].Title + '<br>' + commit[i].Url; 
	  resultBody.append( bodyContentEl);
      
	  
	  var linkButtonEl = document.createElement('a');
	  linkButtonEl.textContent = 'Read More';
	  //linkButtonEl.setAttribute('href', "#");
	  linkButtonEl.classList.add('btn', 'btn-dark');
	
	  resultBody.append( bodyContentEl, linkButtonEl);
	
		resultContentEl.append(resultCard);
	
	}
	
	//console.log(data);
}
fetchText();	

/*.then(response => {
	//console.log(response);
	//resultTextEl.textContent = response.json();
	resultTextEl.textContent =  response.text();
	
    //let text = await response.text(); // read response body as text

//alert(text.slice(0, 80) + '...');
})
.catch(err => {	console.error(err);
});*/