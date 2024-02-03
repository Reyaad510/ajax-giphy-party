const gifContainer = document.querySelector("#gifContainer");

// Select the HTML element with the ID "add-btn" and add a click event listener
document
  .querySelector("#add-btn")
  .addEventListener("click", async function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    // Set the Giphy API key, user input, and API endpoint
    const apiKey = "nb2RgeTxH60AuRKcZHaFqOMs4Kt9zGiX";
    const searchInput = document.querySelector("#search").value.trim();
    const endpoint = "https://api.giphy.com/v1/gifs/random";

    try {
      // Make an asynchronous GET request to the Giphy API using axios
      const response = await axios.get(endpoint, {
        params: {
          api_key: apiKey,
          tag: searchInput,
        },
      });

      // Log the URL of the downsized image to the console
      console.log(response.data.data.images.downsized.url);

      // Process the data and display the GIF
      const gifUrl = response.data.data.images.downsized.url;
      displayGif(gifUrl);
    } catch (error) {
      // Log an error message if there's an issue with the API request
      console.error("Error:", error);
    }
  });

// Function to display the GIF in the HTML document
function displayGif(gifUrl) {
  const div = document.createElement("div");
  const img = document.createElement("img"); // Create an img element
  img.src = `${gifUrl}`; // Set the src attribute with the GIF URL
  img.classList.add("img-fluid");
  div.classList.add("col-12", "col-md-6", "col-lg-4", "mb-3");
  div.append(img);
  gifContainer.append(div); // Append the img element to the GIF container
}

document.querySelector("#remove-btn").addEventListener("click", function (e) {
  e.preventDefault();
  removeAllGifs();
});

function removeAllGifs() {
  gifContainer.innerHTML = "";
}
