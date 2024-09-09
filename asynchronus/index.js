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


function performAsyncTasks() {
    const task1 = new Promise((resolve) => setTimeout(() => resolve("Task 1 completed!"), 1000));
    const task2 = new Promise((resolve) => setTimeout(() => resolve("Task 2 completed!"), 2000));
    const task3 = new Promise((resolve) => setTimeout(() => resolve("Task 3 completed!"), 3000));

    Promise.all([task1, task2, task3]).then((results) => {
        results.forEach((result) => console.log(result));
    });
}
