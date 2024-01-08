const username = 'rehmatroy';
  const apiUrl = `https://api.github.com/users/${username}`;

  // Function to display user data in the HTML document
  function displayUserData(data) {
    const userDataList = document.getElementById('githubUserData');

    // Clear existing list items
    userDataList.innerHTML = '';
    
    // Create list items for each property in the user data
    for (const [key, value] of Object.entries(data)) {
      const listItem = document.createElement('li');
      listItem.textContent = `${key}: ${value}`;
      userDataList.appendChild(listItem);
    }
  }

  // Make a GET request to the GitHub API
  fetch(apiUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    })
    .then(data => {
      // Process the data and display it in the HTML document
      displayUserData(data);
    })
    .catch(error => {
      console.error(error);
    });
