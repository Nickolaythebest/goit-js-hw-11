const API_KEY = '46842885-9f0c2ceed82c15a306e254aa9';

export function fetchImages(query) {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

    return fetch(url)
    
    .then (response => {
        if(!response.ok) {
            throw new Error("Failed to fetch images");
        }
        return response.json();
    })
    .then(data => data.hits)
    .catch(error => {
        console.error("Error fetching images:", error);
        throw error;
    });
}