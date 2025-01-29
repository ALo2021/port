// Embed a Power BI report (replace 'your-embed-url' with actual Power BI report URL)
function embedPowerBI() {
    let container = document.getElementById("powerbi-container");
    container.innerHTML = `<iframe width="100%" height="500" src="your-embed-url" frameborder="0" allowFullScreen="true"></iframe>`;
}

// Fetch data from a Python-powered API
function fetchData() {
    fetch("http://127.0.0.1:80/data")  // Replace with your actual API
        .then(response => response.json())
        .then(data => {
            document.getElementById("data-output").innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error("Error fetching data:", error));
}

// Call Power BI embed function on page load
document.addEventListener("DOMContentLoaded", embedPowerBI);
