// Select DOM elements to work with
const welcomeDiv = document.getElementById("WelcomeMessage");
const signInButton = document.getElementById("SignIn");
const cardDiv = document.getElementById("card-div");
const mailButton = document.getElementById("readMail");
const profileButton = document.getElementById("seeProfile");
const profileDiv = document.getElementById("profile-div");

function showWelcomeMessage(username) {
    // Reconfiguring DOM elements
    cardDiv.style.display = 'initial';
    welcomeDiv.innerHTML = `Welcome ${username}`;
    signInButton.setAttribute("onclick", "signOut();");
    signInButton.setAttribute('class', "btn btn-success")
    signInButton.innerHTML = "Sign Out";
}

function updateUI(data, endpoint) {
    console.log('Graph API responded at: ' + new Date().toString());

    if (endpoint === portfolioApiConfig.GetPortfolioBalance) {
        const portfolioDetailDiv = document.getElementById("portfolio-detail-div");
        portfolioDetailDiv.innerHTML = ''
        const title = document.createElement('p');
        title.innerHTML = "<strong>ID: </strong>" + data.id;
        const email = document.createElement('p');
        email.innerHTML = "<strong>Balance: </strong>" + data.balance;
        
        portfolioDetailDiv.appendChild(title);
        portfolioDetailDiv.appendChild(email);

    } else if (endpoint === portfolioApiConfig.GetPortfolios) {
        const portfolioDiv = document.getElementById("portfolio-div");
        portfolioDiv.innerHTML = ''
        var portfolio = data[0];
        const title = document.createElement('p');
        title.innerHTML = "<strong>ID: </strong>" + portfolio.id;
        const email = document.createElement('p');
        email.innerHTML = "<strong>Name: </strong>" + portfolio.name;

        portfolioDiv.appendChild(title);
        portfolioDiv.appendChild(email);
        
    }

}
