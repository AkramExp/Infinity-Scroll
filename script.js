// Unsplash API
const count = 10;
const apiKey = 'RYnJm0F08Z1fY1LLRe4U5_7b6VvLepkplSCOB7hZaLY';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// get photos from api
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = response.json();
        console.log(data);
    } catch (error) {
        
    }
}

getPhotos();