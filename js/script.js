//console.log("Pretty Mary");

/*    Sign Up Modal    */

let modal = document.getElementById("signUp");

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* let signUpPress =  *//* document.getElementById("signUpPopUp"); */

document.getElementById("signUpPopUp").addEventListener("click", showModal);

function showModal() {
    console.log("its pressed");
    document.getElementById("signUp").style.display = "block";

}

/* Champion details */

const uBolt = new champDetail("Athletics", "Usain", "Bolt", ["2014", "2015", "2016", "2017"], ["2 O G, 1 W C", "3 O G", "2 O G, 1 W C", "1 W C"]);
const nLyles = new champDetail("Athletics", "Noah", "Lyles", ["2014", "2015", "2016", "2017"], ["2 O G, 1 W C", "3 O G", "2 O G, 1 W C", "1 W C"]);
const gHolloway = new champDetail("Athletics", "Grant", "Holloway", ["2014", "2015", "2016", "2017"], ["2 O G, 1 W C", "3 O G", "2 O G, 1 W C", "1 W C"]);
const lJames = new champDetail("Basketball", "Lebron", "James", ["2014", "2015", "2016", "2017"], ["2 O G, 1 W C", "3 O G", "2 O G, 1 W C", "1 W C"]);
const mJordan = new champDetail("Basketball", "Michael", "Jordan", ["2014", "2015", "2016", "2017"], ["2 O G, 1 W C", "3 O G", "2 O G, 1 W C", "1 W C"]);
const kAbdulJabbar = new champDetail("Basketball", "Kareem", "Abdul-Jabbar", ["2014", "2015", "2016", "2017"], ["2 O G, 1 W C", "3 O G", "2 O G, 1 W C", "1 W C"]);
const mPhelps = new champDetail("Swimming", "Michael", "Phelps", ["2014", "2015", "2016", "2017"], ["2 O G, 1 W C", "3 O G", "2 O G, 1 W C", "1 W C"]);
const mSpitz = new champDetail("Swimming", "Mark", "Spitz", ["2014", "2015", "2016", "2017"], ["2 O G, 1 W C", "3 O G", "2 O G, 1 W C", "1 W C"]);
const iThorpe = new champDetail("Swimming", "Ian", "Thorpe", ["2014", "2015", "2016", "2017"], ["2 O G, 1 W C", "3 O G", "2 O G, 1 W C", "1 W C"]);

/* Function to store champion details */

function champDetail (sport, first, last, achyear, ach) {
    this.sportName = sport;
    this.firstName = first;
    this.lastName = last;
    this.achieveYear = achyear;
    this.achievement = ach;
    this.fullName = function() {
        return this.firstName + " " + this.lastName
      };
  }

// Dropdown control //

/* Function to determine which sport is selected & display champion dropdown with matching champions*/

document.getElementById("select-sport").onchange = function() {

    document.getElementById('select-champion').disabled = false; //enabling s2 select
    document.getElementById('select-champion').innerHTML = ""; //clear s2 to avoid conflicts between options values
    document.getElementById('select-champion').style.display = "block";
    let sportSelection = document.getElementById("select-sport").value;
    console.log(sportSelection);
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
    console.log(championSelected);
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
let selection = false;
console.log(championSelected);

window.addEventListener("load", (event) => {

    champOnBoard = uBolt.fullName();
    champSport = uBolt.sportName;
    document.getElementById("champion-name").innerHTML = champOnBoard;
    document.getElementById("champion-sport").innerHTML = champSport;
    fontControl();

  });

    function champBoardControl (display1, display2) {

    if (!selection) {

      changeChamp();

    } else {

      document.getElementById("champion-name").innerHTML = display1;
      document.getElementById("champion-sport").innerHTML = display2;
      document.getElementById("champion-name-sport").style.fontSize = "40pt";

    }

  }
 

  function fontControl () {

    document.getElementById("champion-name").innerHTML = champOnBoard;
    document.getElementById("champion-sport").innerHTML = champSport;

    fontS = document.getElementById("champion-name-sport").style.fontSize;
    modSize = parseInt(fontS);
    document.getElementById("champion-name-sport").style.top = posTop;
    //modTop = parseInt(posTop);
    document.getElementById("champion-name-sport").style.left = posLeft;
    //modLeft = parseInt(posLeft);
    window.setTimeout(txtGrow, 500, modSize);

    console.log(selection);
    //console.log(modLeft);

  }

  function txtGrow (fsStore) {

    console.log(fsStore);

    if (grow) {
        fsStore = fsStore + 1;
        if (fsStore <= 50) {
            document.getElementById("champion-name-sport").style.fontSize = fsStore + "pt";
        }
        else {
            grow = false;
        }
    } else {
        fsStore = fsStore - 1;
        if (fsStore < 1) {
            champBoardControl(display1, display2);
            return;
        }
            
        document.getElementById("champion-name-sport").style.fontSize = fsStore + "pt";
    }

    window.setTimeout(txtGrow, 20, fsStore);

  }

  function changeChamp () {

    randomChamp = Math.floor(Math.random() * 9);

    //console.log(randomChamp);

    switch (randomChamp) {
        case 0:
            champOnBoard = uBolt.fullName();
            champSport = uBolt.sportName;
            posTop = "100px";
            posLeft = "100px";
            grow = true;
            fontControl ();
        break;
        case 1:
            champOnBoard = nLyles.fullName();
            champSport = nLyles.sportName;
            posTop = "30px";
            posLeft = "-60px";
            grow = true;
            fontControl ();
        break;
        case 2:
            champOnBoard = gHolloway.fullName();
            champSport = gHolloway.sportName;
            posTop = "170px";
            posLeft = "100px";
            grow = true;
            fontControl ();
        break;
        case 3:
            champOnBoard = lJames.fullName();
            champSport = lJames.sportName;
            posTop = "60px";
            posLeft = "-40px";
            grow = true;
            fontControl ();
        break;
        case 4:
            champOnBoard = mJordan.fullName();
            champSport = mJordan.sportName;
            posTop = "120px";
            posLeft = "-100px";
            grow = true;
            fontControl ();
        break;
        case 5:
            champOnBoard = kAbdulJabbar.fullName();
            champSport = kAbdulJabbar.sportName;
            posTop = "50px";
            posLeft = "20px";
            grow = true;
            fontControl ();
        break;
        case 6:
            champOnBoard = mPhelps.fullName();
            champSport = mPhelps.sportName;
            posTop = "130px";
            posLeft = "-120px";
            grow = true;
            fontControl ();
        break;
        case 7:
            champOnBoard = mSpitz.fullName();
            champSport = mSpitz.sportName;
            posTop = "150px";
            posLeft = "100px";
            grow = true;
            fontControl ();
        break;
        case 8:
            champOnBoard = iThorpe.fullName();
            champSport = iThorpe.sportName;
            posTop = "120px";
            posLeft = "120px";
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

let display1 = "";
let display2 = "";

function popS2S3(person, shortPerson) {

    year1.innerHTML = shortPerson.achieveYear[0];
    achievement1.innerHTML = shortPerson.achievement[0];
    year2.innerHTML = shortPerson.achieveYear[1];
    achievement2.innerHTML = shortPerson.achievement[1];
    year3.innerHTML = shortPerson.achieveYear[2];
    achievement3.innerHTML = shortPerson.achievement[2];
    year4.innerHTML = shortPerson.achieveYear[3];
    achievement4.innerHTML = shortPerson.achievement[3];

    getGiphys (person);

    display1 = shortPerson.fullName();
    display2 = shortPerson.sportName;

    champBoardControl (display1, display2);

}