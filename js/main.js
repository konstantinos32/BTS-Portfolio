const apiKey ="gv4udm6Q2SR9CbqRQjISMS05IRbca4PvvXlEnjaI"
const apiEndPoint = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

// Documentation
// 1.The "document.addEventListener" method adds an event listener which waits for the DOM (Document Object Model) to finish loading.
// 2.The "fetch" method performs an asynchronous request using the given apiEndPoint and returns a promise.
// 3.The "then" method on the promise resolves the response and returns the JSON data.
// 4.The "catch" method on the promise handles any errors that may have occurred during the request. Any such errors will be logged to the console.
document.addEventListener("DOMContentLoaded",() =>{
fetch(apiEndPoint)
  .then(response =>response.json())
  .then(data =>{
    document.getElementById("apod-title").textContent=data.title;
    document.getElementById("apod-date").textContent=data.date;
    document.getElementById("apod-image").src=data.hdurl;
  })
  .catch(error => console.log(error));
});
