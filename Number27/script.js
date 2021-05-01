const ApiUrl = "https://api.github.com/users/";
const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;

  if (user) {
    GetUser(user);
    search.value = "";
  }
});

function CreateUserCard(user) {
  const cardHtml = ` <div class="card">
  <div class="">
    <img
      src="${user.avatar_url}"
      alt="${user.name}"
      class="avatar"
    />
  </div>
  <div class="user-info">
    <h2>${user.login}</h2>
    <p>
    ${user.bio ? user.bio : ""}
    </p>
    <ul>
      <li>${user.followers} <strong>Followers</strong></li>
      <li>${user.following} <strong>Following</strong></li>
      <li>${user.public_repos} <strong>Repos</strong></li>
    </ul>
    <div id="repos">
      
    </div>
  </div>
</div>`;

  main.innerHTML = cardHtml;
}

async function GetUser(username) {
  try {
    const { data } = await axios(ApiUrl + username);
    CreateUserCard(data);
    GetRepos(username);
  } catch (error) {
    if (error.response.status == 404) {
      CreateErrorCard("No User found");
    }
  }
}

async function GetRepos(username) {
  try {
    const { data } = await axios(ApiUrl + username + "/repos?sort=created");
    AddReposToCard(data);
  } catch (error) {
    console.log(error);
    CreateErrorCard("Couldn't get repos");
  }
}

function CreateErrorCard(message) {
  const errorHtml = `<div class='card'><h1>${message}</h1></div>`;
  main.innerHTML = errorHtml;
}

function AddReposToCard(repos) {
  const reposEl = document.getElementById("repos");

  repos.slice(0, 20).forEach((repo) => {
    const repoLink = document.createElement("a");
    repoLink.classList.add("repo");
    repoLink.href = repo.html_url;
    repoLink.target = "_blank";
    repoLink.innerText = repo.name;
    reposEl.appendChild(repoLink);
  });
}
