fetch("memory.json")
  .then(response => response.json())
  .then(data => {
      console.log(data.userProfile.favoriteFood); 
  }); 
