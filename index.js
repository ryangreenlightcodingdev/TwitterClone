var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    description: 'Technoking of Tesla, Imperator of Mars.',
    location: 'Mars',
    urlLink: 'tesla.com',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    description: 'Sharing things I\'m learning through my foundation work and other interests.',
    location: 'Seattle, WA',
    urlLink: 'gatesnot.es/HowToAvoidCli...',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Single and ready to mingle. #swipeRightForBill',
            timestamp: '3/05/2021 12:32:50'
        },
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2020 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2020 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2020 12:11:51'
        }
    ]
};


var urlParams = new URLSearchParams(window.location.search);
var userInt = 0;

// function to change URL to user 1
function userElon() {
    var urlParams = new URLSearchParams();
    //note: this is where you insert your url for github pages
    urlParams.set("user", "user1");
    window.location.href = "https://ryangreenlightcodingdev.github.io/TwitterClone/?" + urlParams.toString();
};

// function to change URL to user 2
function userBill() {
    var urlParams = new URLSearchParams();
    //note: this is where you insert your url for github pages
    urlParams.set("user", "user2");
    window.location.href = "https://ryangreenlightcodingdev.github.io/TwitterClone/?" + urlParams.toString();
};

// display Bill by default, Elon if user=user1
if(urlParams.toLocaleString() == "user=user1"){
    userInt = 0;
} else {
    userInt = 1;
};

// declare variables
var users = [user1, user2];
var sideCointainer = document.getElementById('container-side-menu');
var mainContainer = document.getElementById('container-main');
var headerContainer = document.getElementById('container-header');
var photoContainer = document.getElementById('container-photo');
var profileContainer = document.getElementById('container-profile');
var tweetsContainer = document.getElementById('container-tweets');
var menuBottomContainer = document.getElementById('container-bottom-menu');

// function to round up bigger numbers and add M or K
var roundedString = function(num){
    if (num > 1000000){
        return (num/1000000).toString()+'M';
    } else if (num > 1000) {
        return (num/1000).toString()+'K';
    } else {
        return num;
    }
}

// side-menu
sideCointainer.innerHTML = `
<div class="menu-item menu-twitter"><a href="#"><i class="fa fa-twitter"></i></a></div>
<div class="menu-item menu-home"><a href="#"><i class="fa fa-home"></i></a></div>
<div class="menu-item menu-search"><a href="#"><i class="fa fa-search"></i></a></div>
<div class="menu-item menu-notify"><a href="#"><i class="fa fa-bell"></i></a></div>
<div class="menu-item menu-message"><a href="#"><i class="fa fa-envelope"></i></a></div>
<div class="menu-item menu-bookmark"><a href="#"><i class="fa fa-bookmark"></i></a></div>
<div class="menu-item menu-list"><a href="#"><i class="fa fa-list"></i></a></div>
<div class="menu-item menu-user"><a href="#"><i class="fa fa-user"></i></a></div>
<div class="menu-item menu-more">
    <a href="#">
        <span class="fa-stack">
            <i class="fa fa-circle-thin fa-stack-2x"></i>
            <i class="fa fa-ellipsis-h fa-stack-1x"></i>
        </span>
    </a>
</div>
`;

// header
headerContainer.innerHTML = `
    <div class="left-arrow">
        <a href="#"><img src="assets/arrow-left.png"/></a>
    </div>
    <div class="top-user">
        <p class="display-name">${users[userInt].displayName}
            <span class="fa-stack">
                <i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-check-circle fa-stack-2x"></i>
            </span> 
        </p>
        <p id="no-of-tweets">${users[userInt].tweets.length} Tweets</p>
    </div>
`;


// cover photo
photoContainer.innerHTML = `
    <div class="cover-img">
        <img src="${users[userInt].coverPhotoURL}"/>
    </div>
`;

// profile
profileContainer.innerHTML = `
    <div class="profile-wrapper">
        <div class="avatar-img">
            <img src="${users[userInt].avatarURL}"/>
        </div>
        <div class="profile-buttons">
            <div class="switch">
                <button id="elon-button">Elon</button>
            </div>
            <div class="switch">
                <button id="bill-button">Bill</button>
            </div>
        </div>
    </div>
    <div class="profile-info">
        <p class="display-name">${users[userInt].displayName}
            <span class="fa-stack">
                <i class="fa fa-circle-thin fa-stack-2x"></i>
                <i class="fa fa-check-circle fa-stack-2x"></i>
            </span> 
        </p>
    </div>
    <div class="user-name">
        <p>${users[userInt].userName}</p>
    </div>
    <div class="about">
        <p>${users[userInt].description}</p>
    </div>
    <div class="additional-info">
        <p><i class="fa fa-map-marker" aria-hidden="true"></i> ${users[userInt].location}</p>
        <a href="#"> <i class="fa fa-link"></i> ${users[userInt].urlLink}</a>
        <p><i class="fa fa-calendar" aria-hidden="true"></i>Joined ${users[userInt].joinedDate}</p>
    </div>
    <div class="following-followers">
        <div class="following">
            <p class="following-p"><a href="#">${users[userInt].followingCount}</a> Following<p>
        </div>
        <div class="followers">
            <p class="followers-p"><a href="#">${roundedString(users[userInt].followerCount)}</a> Followers<p>
        </div>
    </div>
    <div id="container-tabs">
        <div class="tab active"><p>Tweets</p></div>
        <div class="tab"><p>Tweets & replies</p></div>
        <div class="tab"><p>Media</p></div>
        <div class="tab"><p>Likes</p></div>
    </div>
`;

// event listener to switch users
var switchElon = document.getElementById('elon-button');
switchElon.addEventListener('click', userElon);

var switchBill = document.getElementById('bill-button');
switchBill.addEventListener('click', userBill);

// function to select between tabs
var tabContainer = document.getElementById("container-tabs");
var tabs = tabContainer.getElementsByClassName("tab");

for (var i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function() {
        var active = document.getElementsByClassName("active");
        active[0].className = active[0].className.replace(" active", "");
        this.className += " active";
    });
};

// function to display tweets
for (var i = 0; i < users[userInt].tweets.length; i++) {
    var tweet = users[userInt].tweets[i];
    var tweetValues = Object.values(tweet);
    var tweetCreated = tweetValues[1];

    // to dislpay month + date instead of full timestamp
    var arr = tweetCreated.split('/');
    var months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    var displayMonth =  parseInt(arr[1],10) - 1;

    var tweetDiv = document.createElement("div");
    tweetDiv.classList.add("tweet-div")
    tweetDiv.innerHTML = `
        <div class="tweet-avatar"><img src="${users[userInt].avatarURL}"/></div>
        <div class="tweet-inner-container">
            <div class="tweet-details">
                <div class="tweet-display-name">
                    <p>${users[userInt].displayName}
                        <span class="fa-stack">
                            <i class="fa fa-circle-thin fa-stack-1x"></i>
                            <i class="fa fa-check-circle fa-stack-1x"></i>
                        </span> 
                    </p>
                </div>
                <div class="user-name">${users[userInt].userName}</div>
                <div class="tweet-created">${months[displayMonth] +" "+ arr[0]}</div>
            </div>
            <div class="tweet-body">
                <p>${tweetValues[0]}</p>
            </div>
            <div class="tweet-icons">
                <div class="tweet-icon reply"><a href="#"><i class="fa fa-comment"></i></a></div>
                <div class="tweet-icon retweet"><a href="#"><i class="fa fa-retweet"></i></a></div>
                <div class="tweet-icon like"><a href="#"><i class="fa fa-heart"></i></a></div>
                <div class="tweet-icon share"><a href="#"><i class="fa fa-upload"></i></a></div>
            </div>
        </div>
    `;
    tweetsContainer.appendChild(tweetDiv);
}

// menu container
menuBottomContainer.innerHTML = `
    <div class="menu">
        <div class="menu-item menu-home"><a href="#"><i class="fa fa-home"></i></a></div>
        <div class="menu-item menu-search"><a href="#"><i class="fa fa-search"></i></a></div>
        <div class="menu-item menu-notify"><a href="#"><i class="fa fa-bell"></i></a></div>
        <div class="menu-item menu-message"><a href="#"><i class="fa fa-envelope"></i></a></div>
    </div>
`;
