//console.log("Pretty Mary");

/* Champion details */

let uBolt = new champDetail("Athletics", "Usain", "Bolt", ["2014", "2015", "2016", "2017"], ["2 O G, 1 W C", "3 O G", "2 O G, 1 W C", "1 W C"], 1022);
let nLyles = new champDetail("Athletics", "Noah", "Lyles", ["2014", "2015", "2016", "2017"], ["2 O G, 1 W C", "3 O G", "2 O G, 1 W C", "1 W C"], 224);
let gHolloway = new champDetail("Athletics", "Grant", "Holloway", ["2014", "2015", "2016", "2017"], ["2 O G, 1 W C", "3 O G", "2 O G, 1 W C", "1 W C"], 421);
let lJames = new champDetail("Basketball", "Lebron", "James", ["2014", "2015", "2016", "2017"], ["2 O G, 1 W C", "3 O G", "2 O G, 1 W C", "1 W C"], 878);
let mJordan = new champDetail("Basketball", "Michael", "Jordan", ["2014", "2015", "2016", "2017"], ["2 O G, 1 W C", "3 O G", "2 O G, 1 W C", "1 W C"], 927);
let kAbdulJabbar = new champDetail("Basketball", "Kareem", "Abdul-Jabbar", ["2014", "2015", "2016", "2017"], ["2 O G, 1 W C", "3 O G", "2 O G, 1 W C", "1 W C"], 344);
let mPhelps = new champDetail("Swimming", "Michael", "Phelps", ["2014", "2015", "2016", "2017"], ["2 O G, 1 W C", "3 O G", "2 O G, 1 W C", "1 W C"], 943);
let mSpitz = new champDetail("Swimming", "Mark", "Spitz", ["2014", "2015", "2016", "2017"], ["2 O G, 1 W C", "3 O G", "2 O G, 1 W C", "1 W C"], 647);
let iThorpe = new champDetail("Swimming", "Ian", "Thorpe", ["2014", "2015", "2016", "2017"], ["2 O G, 1 W C", "3 O G", "2 O G, 1 W C", "1 W C"], 336);

/* Function to store champion details */

function champDetail (sport, first, last, achyear, ach, votes) {
    this.sportName = sport;
    this.firstName = first;
    this.lastName = last;
    this.achieveYear = achyear;
    this.achievement = ach;
    this.fullName = function() {
        return this.firstName + " " + this.lastName
      };
    this.totalVotes = votes;
  }

  //console.log(uBolt.totalVotes);

/* Close all three modals when their window is clicked on */

let theLeaders = document.getElementById("showLeaders");
let toVote = document.getElementById("showVoting");
let modal = document.getElementById("signUp");
let champDrop = document.getElementById('select-champion');

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";

        //Resume Champion Board random display
        selection = false;
        champDrop.style.display = "none";
        //champBoardControl();
    } else if (event.target == theLeaders) {
        theLeaders.style.display = "none";

        //Resume Champion Board random display
        selection = false;
        champDrop.style.display = "none";
        //champBoardControl();
    } else if (event.target == toVote) {
        toVote.style.display = "none";

        //Resume Champion Board random display
        selection = false;
        champDrop.style.display = "none";
        //champBoardControl();
    }
    
}

        /* Leader Board Modal */

/* Resume Champion Board random display when Voting modal is closed */

document.querySelector(".shutLeaders").addEventListener("click", resumeChampBoard);

/* Function to display Leaders PopUp */

document.getElementById("leaderPopUp").addEventListener("click", showLead);

function showLead() {

    document.getElementById("votes1").innerHTML = uBolt.totalVotes;
    document.getElementById("votes2").innerHTML = mPhelps.totalVotes;
    document.getElementById("votes3").innerHTML = mJordan.totalVotes;
    document.getElementById("votes4").innerHTML = lJames.totalVotes;
    document.getElementById("votes5").innerHTML = mSpitz.totalVotes;
    document.getElementById("votes6").innerHTML = gHolloway.totalVotes;
    document.getElementById("votes7").innerHTML = kAbdulJabbar.totalVotes;
    document.getElementById("votes8").innerHTML = iThorpe.totalVotes;
    document.getElementById("votes9").innerHTML = nLyles.totalVotes;

    document.getElementById("showLeaders").style.display = "block";

    selection = true; //Pause Champion Board random display

}

        /* Voting Modal */

/* Resume Champion Board random display when Voting modal is closed */

document.querySelector(".cancelBtn").addEventListener("click", resumeChampBoard);

document.querySelector(".shutVoting").addEventListener("click", resumeChampBoard);
 
/* Function to display Voting PopUp */

document.getElementById("votePopUp").addEventListener("click", showVotes);

function showVotes() {

    document.getElementById("showVoting").style.display = "block";

    selection = true; //Pause Champion Board random display

}

/* Function to read voting form radios */

function getFormChecked(event) {

    event.preventDefault();

    //alert(uBolt.totalVotes);

    radios = document.getElementsByName('fav_champion');
    //alert(radios.length);
    if (radios[0].checked) {
        uBolt.totalVotes = uBolt.totalVotes + 1;
        //alert(uBolt.totalVotes);
    } else if (radios[1].checked) {
        nLyles.totalVotes = nLyles.totalVotes + 1;
    } else if (radios[2].checked) {
        gHolloway.totalVotes = gHolloway.totalVotes + 1;
        document.getElementById("votes1").innerHTML = uBolt.totalVotes;
    } else if (radios[3].checked) {
        lJames.totalVotes = lJames.totalVotes + 1;
        document.getElementById("votes1").innerHTML = uBolt.totalVotes;
    } else if (radios[4].checked) {
        mJordan.totalVotes = mJordan.totalVotes + 1;
        document.getElementById("votes1").innerHTML = uBolt.totalVotes;
    } else if (radios[5].checked) {
        kAbdulJabbar.totalVotes = kAbdulJabbar.totalVotes + 1;
        document.getElementById("votes1").innerHTML = uBolt.totalVotes;
    } else if (radios[6].checked) {
        mPhelps.totalVotes = mPhelps.totalVotes + 1;
        document.getElementById("votes1").innerHTML = uBolt.totalVotes;
    } else if (radios[7].checked) {
        mSpitz.totalVotes = mSpitz.totalVotes + 1;
        document.getElementById("votes1").innerHTML = uBolt.totalVotes;
    } else if (radios[8].checked) {
        iThorpe.totalVotes = iThorpe.totalVotes + 1;
        document.getElementById("votes1").innerHTML = uBolt.totalVotes;
    }

}


        /*    Sign Up Modal    */

/* Resume Champion Board random display when Sign Up modal is closed */

document.querySelector(".cnclButton").addEventListener("click", resumeChampBoard);

document.querySelector(".shutModal").addEventListener("click", resumeChampBoard);

function resumeChampBoard () {

    //Resume Champion Board random display
    selection = false;
    champDrop.style.display = "none";

}
 
/* Function to display Sign Up Pop Up */

document.getElementById("signUpPopUp").addEventListener("click", showModal);

function showModal() {

    document.getElementById("signUp").style.display = "block";

    selection = true; //Pause Champion Board random display

}

// Dropdown control //

/* Function to determine which sport is selected & display champion dropdown with matching champions*/

document.getElementById("select-sport").onclick = function() {

    document.getElementById('select-champion').disabled = false; //enabling s2 select
    document.getElementById('select-champion').innerHTML = ""; //clear s2 to avoid conflicts between options values
    document.getElementById('select-champion').style.display = "block";
    let sportSelection = document.getElementById("select-sport").value;
    var opt0 = document.createElement('option');
    var opt1 = document.createElement('option');
    var opt2 = document.createElement('option');
    var opt3 = document.createElement('option');
    if (this.value == '10') {
        opt0.textContent = "Choose Champion";
        opt1.textContent = "Usain Bolt";
        opt2.textContent = "Noah Lyles";
        opt3.textContent = "Grant Holloway";
        opt1.value = "20";
        opt2.value = "21";
        opt3.value = "22";
        document.getElementById('select-champion').appendChild(opt0);
        document.getElementById('select-champion').appendChild(opt1);
        document.getElementById('select-champion').appendChild(opt2);
        document.getElementById('select-champion').appendChild(opt3);
    } else if (this.value == '11') {
        opt0.textContent = "Choose Champion";
        opt1.textContent = "Lebron James";
        opt2.textContent = "Michael Jordan";
        opt3.textContent = "Kareem Abdul-Jabbar";
        opt1.value = "23";
        opt2.value = "24";
        opt3.value = "25";
        document.getElementById('select-champion').appendChild(opt0);
        document.getElementById('select-champion').appendChild(opt1);
        document.getElementById('select-champion').appendChild(opt2);
        document.getElementById('select-champion').appendChild(opt3);
    } else if (this.value == '12') {
        opt0.textContent = "Choose Champion";
        opt1.textContent = "Michael Phelps";
        opt2.textContent = "Mark Spitz";
        opt3.textContent = "Ian Thorpe";
        opt1.value = "26";
        opt2.value = "27";
        opt3.value = "28";
        document.getElementById('select-champion').appendChild(opt0);
        document.getElementById('select-champion').appendChild(opt1);
        document.getElementById('select-champion').appendChild(opt2);
        document.getElementById('select-champion').appendChild(opt3);
    }

};

let championSelected = "";

/* Function to determine which champion is selected */

document.getElementById("select-champion").onchange = function() {

    championSelected = document.getElementById("select-champion").value;
    populateS2S3(championSelected);
    document.querySelector('.champions-giphys').style.display = "flex";
    document.querySelector('.champion-achievements-table').style.display = "block";

}

/* Show Champions on Display Board */

let champOnBoard = "";
let champSport = "";
let grow = true;
let posTop = "50px";
let posLeft = "-50px";
let selection;
let txtSize = 50;
let txtGrowDelay = 40;
let ch1PosTop = "50px";
let ch1PosLeft = "-50px";
let ch2PosTop = "130px";
let ch2PosLeft = "-60px";
let ch3PosTop = "170px";
let ch3PosLeft = "80px";
let ch4PosTop = "60px";
let ch4PosLeft = "-40px";
let ch5PosTop = "120px";
let ch5PosLeft = "70px";
let ch6PosTop = "50px";
let ch6PosLeft = "0px";
let ch7PosTop = "130px";
let ch7PosLeft = "-90px";
let ch8PosTop = "150px";
let ch8PosLeft = "100px";
let ch9PosTop = "120px";
let ch9PosLeft = "120px";

window.addEventListener("load", (event) => {

    champOnBoard = uBolt.fullName();
    champSport = uBolt.sportName;
    document.getElementById("champion-name").innerHTML = champOnBoard;
    document.getElementById("champion-sport").innerHTML = champSport;
    selection = false;
    fontControl();

  });

  function fontControl () {

    document.getElementById("champion-name").innerHTML = champOnBoard;
    document.getElementById("champion-sport").innerHTML = champSport;

    fontS = document.getElementById("champion-name-sport").style.fontSize;
    modSize = parseInt(fontS);
    document.getElementById("champion-name-sport").style.top = posTop;
    //modTop = parseInt(posTop);
    document.getElementById("champion-name-sport").style.left = posLeft;
    //modLeft = parseInt(posLeft);

    if (window.matchMedia("(max-width: 900px)").matches) {

        txtSize = 30;
        txtGrowDelay = 100;
        ch1PosTop = "50px";
        ch1PosLeft = "-50px";
        ch2PosTop = "130px";
        ch2PosLeft = "-60px";
        ch3PosTop = "70px";
        ch3PosLeft = "30px";
        ch4PosTop = "60px";
        ch4PosLeft = "-40px";
        ch5PosTop = "180px";
        ch5PosLeft = "70px";
        ch6PosTop = "50px";
        ch6PosLeft = "40px";
        ch7PosTop = "120px";
        ch7PosLeft = "-40px";
        ch8PosTop = "50px";
        ch8PosLeft = "40px";
        ch9PosTop = "50px";
        ch9PosLeft = "80px";

    if (window.matchMedia("(max-width: 850px)").matches) {

        txtSize = 25;
        txtGrowDelay = 100;
        ch1PosTop = "50px";
        ch1PosLeft = "-50px";
        ch2PosTop = "80px";
        ch2PosLeft = "-60px";
        ch3PosTop = "70px";
        ch3PosLeft = "40px";
        ch4PosTop = "60px";
        ch4PosLeft = "-40px";
        ch5PosTop = "20px";
        ch5PosLeft = "70px";
        ch6PosTop = "50px";
        ch6PosLeft = "10px";
        ch7PosTop = "30px";
        ch7PosLeft = "-60px";
        ch8PosTop = "50px";
        ch8PosLeft = "50px";
        ch9PosTop = "20px";
        ch9PosLeft = "20px";

        }

    } else {

        txtSize = 50;
        txtGrowDelay = 40;
        ch1PosTop = "50px";
        ch1PosLeft = "-50px";
        ch2PosTop = "130px";
        ch2PosLeft = "-60px";
        ch3PosTop = "170px";
        ch3PosLeft = "80px";
        ch4PosTop = "60px";
        ch4PosLeft = "-40px";
        ch5PosTop = "120px";
        ch5PosLeft = "70px";
        ch6PosTop = "50px";
        ch6PosLeft = "0px";
        ch7PosTop = "130px";
        ch7PosLeft = "-90px";
        ch8PosTop = "150px";
        ch8PosLeft = "100px";
        ch9PosTop = "120px";
        ch9PosLeft = "120px";

    }

    window.setTimeout(txtGrow, 500, modSize);

  }

  function txtGrow (fsStore) {

      console.log(txtSize);

    if (!selection) {

    console.log(fsStore);

    if (grow) {
        fsStore = fsStore + 1;
        if (fsStore <= txtSize) {
            document.getElementById("champion-name-sport").style.fontSize = fsStore + "pt";
        }
        else {
            /* window.setTimeout(5000); */
            grow = false;
        }
    } else {
        fsStore = fsStore - 1;
        if (fsStore < 1) {
            changeChamp();
            return;
        }
            
        document.getElementById("champion-name-sport").style.fontSize = fsStore + "pt";
    }

    }
    
    window.setTimeout(txtGrow, txtGrowDelay, fsStore);
    
  }

  function changeChamp () {

    randomChamp = Math.floor(Math.random() * 9);

    switch (randomChamp) {
        case 0:
            champOnBoard = uBolt.fullName();
            champSport = uBolt.sportName;
            posTop = ch1PosTop;
            posLeft = ch1PosLeft;
            grow = true;
            fontControl ();
        break;
        case 1:
            champOnBoard = nLyles.fullName();
            champSport = nLyles.sportName;
            posTop = ch2PosTop;
            posLeft = ch2PosLeft;
            grow = true;
            fontControl ();
        break;
        case 2:
            champOnBoard = gHolloway.fullName();
            champSport = gHolloway.sportName;
            posTop = ch3PosTop;
            posLeft = ch3PosLeft;
            grow = true;
            fontControl ();
        break;
        case 3:
            champOnBoard = lJames.fullName();
            champSport = lJames.sportName;
            posTop = ch4PosTop;
            posLeft = ch4PosLeft;
            grow = true;
            fontControl ();
        break;
        case 4:
            champOnBoard = mJordan.fullName();
            champSport = mJordan.sportName;
            posTop = ch5PosTop;
            posLeft = ch5PosLeft;
            grow = true;
            fontControl ();
        break;
        case 5:
            champOnBoard = kAbdulJabbar.fullName();
            champSport = kAbdulJabbar.sportName;
            posTop = ch6PosTop;
            posLeft = ch6PosLeft;
            grow = true;
            fontControl ();
        break;
        case 6:
            champOnBoard = mPhelps.fullName();
            champSport = mPhelps.sportName;
            posTop = ch7PosTop;
            posLeft = ch7PosLeft;
            grow = true;
            fontControl ();
        break;
        case 7:
            champOnBoard = mSpitz.fullName();
            champSport = mSpitz.sportName;
            posTop = ch8PosTop;
            posLeft = ch8PosLeft;
            grow = true;
            fontControl ();
        break;
        case 8:
            champOnBoard = iThorpe.fullName();
            champSport = iThorpe.sportName;
            posTop = ch9PosTop;
            posLeft = ch9PosLeft;
            grow = true;
            fontControl ();
        break;
    }

  }

let year1 = document.getElementById("yr1");
let achievement1 = document.getElementById("ach1");
let year2 = document.getElementById("yr2");
let achievement2 = document.getElementById("ach2");
let year3 = document.getElementById("yr3");
let achievement3 = document.getElementById("ach3");
let year4 = document.getElementById("yr4");
let achievement4 = document.getElementById("ach4");

/* Function to populate section 2 with giphy's and section 3 with achievements */

    let person = "";
    let shortPerson = "";

function populateS2S3(champ) {

    let elementExists1 = document.querySelector(".giphy-display-1 img");
    let elementExists2 = document.querySelector(".giphy-display-2 img");
    let elementExists3 = document.querySelector(".giphy-display-3 img");

    if (elementExists1 !== null) {
        elementExists1.remove();
    }

    if (elementExists2 !== null) {
        elementExists2.remove();
    }

    if (elementExists3 !== null) {
        elementExists3.remove();
    }


/* Switch to determine which champion has been selected from the 'select champion' dropdown */

switch (champ) {

    case "20":
        person = "Usain Bolt";
        selection = true;
        popS2S3(person, uBolt);
    break;

    case "21":
        person = "Noah Lyles";
        selection = true;
        popS2S3(person, nLyles);
    break;

    case "22":
        person = "Grant Holloway";
        selection = true;
        popS2S3(person, gHolloway);
    break;

    case "23":
        person = "Lebron James";
        selection = true;
        popS2S3(person, lJames);
    break;

    case "24":
        person = "Michael Jordan";
        selection = true;
        popS2S3(person, mJordan);
    break;

    case "25":
        person = "Kareem Abdul-Jabbar";
        selection = true;
        popS2S3(person, kAbdulJabbar);
    break;

    case "26":
        person = "Michael Phelps";
        selection = true;
        popS2S3(person, mPhelps);
    break;

    case "27":
        person = "Mark Spitz";
        selection = true;
        popS2S3(person, mSpitz);
    break;

    case "28":
        person = "Ian Thorpe";
        selection = true;
        popS2S3(person, iThorpe);
    break;

    default:
        person = "Michael Jordan";
        popS2S3(person, mJordan);
}

}

/* Get champion Giphys */

const giphyKey = "OLpTHOryvi0O75NZk6w0kgJs01Z0mlw4";

const giphy1 = document.querySelector(".giphy-display-1");
const giphy2 = document.querySelector(".giphy-display-2");
const giphy3 = document.querySelector(".giphy-display-3");

async function getGiphys(sportsman){

      //event.preventDefault();

      const gipho = sportsman;
      const giphyResponse = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${gipho}`);
      const giphyData = await giphyResponse.json();

       for (let i = 0; i < 10; i++) {

          const addresses = giphyData.data[i].images.fixed_width.url;
          const image = document.createElement('img');

          image.setAttribute('src', addresses);
          if (i === 2) {
            giphy1.appendChild(image);
          }
          if (i === 3) {
            giphy2.appendChild(image);
          }
          if (i === 4) {
            giphy3.appendChild(image);
          }
          
  }
}

/* Function to populate section 2 with champion Giphy's & the section 3 table with champion achievements */

function popS2S3(person, shortPerson) {

    year1.innerHTML = shortPerson.achieveYear[0];
    achievement1.innerHTML = shortPerson.achievement[0];
    year2.innerHTML = shortPerson.achieveYear[1];
    achievement2.innerHTML = shortPerson.achievement[1];
    year3.innerHTML = shortPerson.achieveYear[2];
    achievement3.innerHTML = shortPerson.achievement[2];
    year4.innerHTML = shortPerson.achieveYear[3];
    achievement4.innerHTML = shortPerson.achievement[3];

    document.getElementById("champion-name").innerHTML = person;
    document.getElementById("champion-sport").innerHTML = shortPerson.sportName;
    document.getElementById("champion-name-sport").style.fontSize = txtSize + "pt";

    getGiphys (person);

}

/* Blog */

/* Section so users can add their posts to the blog */

document.addEventListener('DOMContentLoaded', () => {

    const postForm = document.getElementById('post-form');
    const blogPostsDiv = document.getElementById('posts-list');

    /* Function to get the current date */
    function getFormattedDate() {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${month}/${day}/${year} ${hours}:${minutes}`;
    }

    /* Function to create a new post and add it to the top of the blog */
    function addNewPost(title, content, date) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('blog-post');

        postDiv.innerHTML = `
            
            <p class="post-date">Posted by ${title} on: ${date}</p>
            <p>${content}</p>
        `;

        blogPostsDiv.prepend(postDiv);
    }

    /* Form submission */
    postForm.addEventListener('submit', (event) => {

        event.preventDefault();

        const title = document.getElementById('username').value;
        const content = document.getElementById('comment').value;
        const date = getFormattedDate();

        /* Add the new post to the top */
        addNewPost(title, content, date);

        /* Reset the form fields */
        postForm.reset();

    });

});

/* Add more posts to bottom of blog */

document.addEventListener('DOMContentLoaded', () => {

    const blogPostsSection = document.getElementById('blog-posts');
    
    const posts = [
        {
            date: "10/07/2024 3:45",
            author: "Some Person",
            content: "This is an older post loaded for viewing"
        },
        {
            date: "10/06/2024 12:42",
            author: "Another Poster",
            content: "This recent post says that Usain Bolt is the best of the best"
        }
    ];

    /* Function to load more posts */

    function loadMorePosts() {

        posts.forEach(post => {

            const postArticle = document.createElement('article');
            postArticle.classList.add('blog-post');
            
            const postMeta = document.createElement('p');
            postMeta.classList.add('post-meta');
            postMeta.textContent = `Posted by ${post.author} on ${post.date}`;
            
            const postContent = document.createElement('p');
            postContent.classList.add('post-content');
            postContent.textContent = post.content;
            
            postArticle.appendChild(postMeta);
            postArticle.appendChild(postContent);
            
            blogPostsSection.appendChild(postArticle);

        });
    }

    /* Load new posts when button is clicked */
    const loadMoreButton = document.getElementById("loadMore");
    loadMoreButton.addEventListener('click', loadMorePosts);

});

