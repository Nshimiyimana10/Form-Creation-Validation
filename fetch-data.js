document.addEventListener("DOMContentLoaded", () => {
   
    fetchUserData();
  });
  // Display user data on the HTML page
  
  const fetchUserData = async function(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'
    const dataContainer = document.getElementById("api-data");
  
    try {
      const response = await fetch(apiUrl);
      const users = await response.json();
      dataContainer.innerHTML = '';
  
      console.log(users);

      const userList = document.createElement("ul");
      users.forEach((user) =>{
        const myUser = user.name;
        const li = document.createElement("li");
        li.textContent = myUser;
        userList.appendChild(li);
        dataContainer.appendChild(userList);
    //     const li = document.createElement("li");
    //     li.textContent = users.name;
    //     userList.appendChild(li);
    //     dataContainer.appendChild(userList);
      })
  
  }
  catch(error){
    error.textContent ="Failed to load user data."
  }
};