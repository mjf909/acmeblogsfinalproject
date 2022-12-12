

function  createElemWithText(element="p",textContent="",className) {
  
const pa = document.createElement(element);
pa.innerText = textContent;
  
if (className) {
  pa.classList.add(className);
}
return document.body.appendChild(pa);

}




function createSelectOptions(userJSON) {
  if (!userJSON) {
    return;
  }

  let userList = [];
  
  userJSON.forEach((user) => {
    let optionElem = document.createElement("option");
    
    optionElem.setAttribute("value", user.id);
    optionElem.textContent = user.name;
    userList.push(optionElem);
  });
  
  return userList;
  
    }



function toggleCommentSection(postId) {
    if (!postId) {
    return;
  }
  
  let sectionElem = document.querySelector(`section[data-post-id="${postId}"]`);
  
  if (sectionElem) sectionElem.classList.toggle("hide");
  return sectionElem;
}




function toggleCommentButton(postId) {
if (!postId) {
    return;
  }
  
let toggleElem = document.querySelector(`button[data-post-id="${postId}"]`);
  
  
  if (toggleElem) {
    toggleElem.textContent =
      
      toggleElem.textContent == "Show Comments"
    
        ? "Hide Comments"
    
    
        : "Show Comments";
  }
  
  return toggleElem;
}







function deleteChildElements(parentElement) {
if (!parentElement) {
    return;
  }
  
  let child = parentElement.lastElementChild;
  
  
  while (child) {
    
    parentElement.removeChild(child);
    child = parentElement.lastElementChild;
  }
  
  return parentElement;
}




function addButtonListeners() {
}



function removeButtonListeners() {

}




function createComments(jsonComments) {
if (!jsonComments) {
    return;
  }
  
  let fragElem = document.createDocumentFragment();
  
  jsonComments.forEach((comment) => {
    
    let article = document.createElement("article");
    
    article.append(createElemWithText("h3", comment.name));
    article.append(createElemWithText("p", comment.body));
    article.append(createElemWithText("p", `From: ${comment.email}`));
    fragElem.append(article);
    
  });
  
  return fragElem;
}






function populateSelectMenu(usersJSON) {
if (!usersJSON) {
    return;
  } 
  
  let selectMenu = document.getElementById("selectMenu");
  let optionElems = createSelectOptions(usersJSON);
  optionElems.forEach((option) => selectMenu.append(option));
  return selectMenu;
}




const apiData = "https://jsonplaceholder.typicode.com/";


async function getUsers() {
  const url = apiData + "users";
  
  try {
    return fetch(url).then((response) => response.json());
  } catch (error) {
    console.error(error);
  }
}






async function getUserPosts(userId) {
if (!userId) {
    return;
  } 
  
  const urlRoute = apiData + `users/${userId}/posts`;
  
  try {
    return fetch(urlRoute).then((response) => response.json());
  } catch (error) {
    console.error(error);
  }
  
}




async function getUser(userId) {
if (!userId) {
    return;
  } 
  const urlPosts = apiData + `users/${userId}`;
  try {
    return fetch(urlPosts).then((response) => response.json());
  } catch (error) {
    console.error(error);
  }
}


async function getPostComments(postId) {
if (!postId) {
    return;
  } 
  const urlPosts = apiData + `posts/${postId}/comments`;
  
  
    try {
      return fetch(urlPosts).then((response) => response.json());
    } catch (error) {
      console.error(error);
    }
}



async function displayComments(postId) {
if (!postId) {
    return;
  } 
  let section = document.createElement('section');
  
  
    section.dataset.postId = postId;
    section.classList.add('comments', 'hide');
  
  
    let comments = await getPostComments(postId);
    let frag = await createComments(comments);
    section.append(frag);
    return section;
}

function createPosts() {
  
}


function displayPosts() {
  
}


function toggleComments(event, postId) {
if (!postId) {
    return;
  } 
    let result = [];
    event.target.listener = true;
  
  
    result.push(toggleCommentSection(postId));
    result.push(toggleCommentButton(postId));
  
  
    return result;
}


function refreshPosts() {
  
}


function selectMenuChangeEventHandler() {
  
}


function initPage() {
  
}


function initApp() {
  
}
