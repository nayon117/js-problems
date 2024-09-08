// Fetch Data from an API

async function fetchDataFromAPI() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data", error);
    }
}
