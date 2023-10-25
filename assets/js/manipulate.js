export function changeTitle() {
    // Change the title of the page to "(Your name)'s Portfolio"

    document.title = "Alok Suman";
}

export function changeHeader() {
    // Change the name in the h1 of the page to your name

    document.getElementById("header").firstElementChild.innerText = "Alok Suman";
}

export function changeAboutMe() {
    /* Update the first paragraph in the About Me section with a small
     passage about yourself */

    document.querySelector('.section :nth-child(2)').innerText = "I am a Passionate Javascript developer";
}
