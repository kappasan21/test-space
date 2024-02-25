// get element my-image to show and delete by clicking about-me
let myImage = document.getElementById('my-image');
// get element about-me as the switch to display my-image above
// let aboutMe = document.getElementById('about-me');
let aboutMe = document.getElementById('aboutMe-title');

function showMyImage () {

    if(myImage.style.display === '') {
        myImage.style.display = 'block';
    } else {
        myImage.style.display = '';
    }
}


aboutMe.addEventListener('mouseover', showMyImage);
// make sure the image hides when the cursor left from the target
aboutMe.addEventListener('mouseleave', (event)=>{myImage.style.display=''});



// Show and hide the project list by clicking the area
let htmlList = document.getElementById('html-list');
let htmlTitle = document.getElementById('html');

function showHtmlList() {

    if(htmlList.style.display === '') {
        htmlList.style.display = 'block';
    } else {
        htmlList.style.display = '';
    }
}

htmlTitle.addEventListener('click', showHtmlList);


let domList = document.getElementById('dom-list');
let domTitle = document.getElementById('dom');

function showDomList() {

    if(domList.style.display === '') {
        domList.style.display = 'block';
    } else {
        domList.style.display = '';
    }
}

domTitle.addEventListener('click', showDomList);



let jsList = document.getElementById('js-list');
let jsTitle = document.getElementById('javascript');

function showJsList() {

    if(jsList.style.display === '') {
        jsList.style.display = 'block';
    } else {
        jsList.style.display = '';
    }
}


jsTitle.addEventListener('click', showJsList);