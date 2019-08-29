// ==UserScript==
// @version      1.0.20190829
// @author       Anjolo96
// @name         (B) GoGoAnime.io - Anime List
// @description  Anime List...
// @namespace    https://github.com/Anjolo96/Gogoanime-AnimeList
// @homepageURL  https://github.com/Anjolo96/Gogoanime-AnimeList
// @updateURL    https://gist.githubusercontent.com/Anjolo96/6e0b5ce2056dd428da78765151303f78/raw/ab8ec519f33aa5dd8e9762205e0d3e00992672b8/Main.JS
// @downloadURL  https://gist.githubusercontent.com/Anjolo96/6e0b5ce2056dd428da78765151303f78/raw/ab8ec519f33aa5dd8e9762205e0d3e00992672b8/Main.JS
// @include      *.gogoanime.*
// @include      *.animego.*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';


    //any css added with this function afect entire web page
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    // this is just the styling, wont detail here :|
    addGlobalStyle('.libraryButton { cursor: pointer; background-color: #363636; line-height: 25px; padding: 0 10px; }');
    addGlobalStyle('.libraryButton:hover { background-color: #d29b06; color: #fff; }');


    if (document.getElementsByClassName("last_episodes")[0])
    {
        SpawnLibrary_Recent();
    }


    ///////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////
    // Create the div for button (FULLSCREEN) itself
    //var btnFullscreen = document.createElement("div");
    //btnFullscreen.classList.add('customButton');
    //btnFullscreen.id = "btnFullscreen";
    // the icon...
    //var iconFullscreen = document.createElement("i");
    //iconFullscreen.classList.add('fa');
    //iconFullscreen.classList.add('fa-toggle-off');
    //iconFullscreen.style.padding = "0px 5px 0px 0px";
    // the text...
    //var spanFullscreen = document.createElement("i");
    //spanFullscreen.innerHTML = "FullScreen OFF";


    ///////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////
    // Append the Fullscreen Mode button
    //var appendFullscreen = document.getElementsByClassName('favorites_book')[0].parentNode;
    //appendFullscreen.appendChild(btnFullscreen);
    //btnFullscreen.appendChild(iconFullscreen);
    //btnFullscreen.appendChild(spanFullscreen);


    ///////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////
    // Cliking button is the same as clicking the dark overlay...
    //darkOverlay.addEventListener ("click", function() { SwitchLight(); });


    ///////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////
    //Functions list..

    function SpawnLibrary_Recent(){
        var listContainer = document.getElementsByClassName("last_episodes")[0].children[0];
        listContainer = listContainer.getElementsByTagName("li");
        var i = 0
        for (i = 0; i < listContainer.length; i++) {
            //get anime title
            var title = listContainer[i].children[1].innerText;
            var episode = listContainer[i].children[2].innerText;
            var listed = localStorage.getItem(title);
            console.log(listed);
            // Create the div for button (LIBRARY) itself
            var btnTest = document.createElement("div");
            btnTest.classList.add('libraryButton');
            btnTest.id = "btnLibrary" + i;
            // the icon...
            var iconTest = document.createElement("i");
            iconTest.classList.add('fa');
            iconTest.classList.add('fa-plus');
            iconTest.style.padding = "0px 5px";
            // the text...
            var spanTest = document.createElement("i");
            spanTest.innerHTML = "ADD...";
            // Append the LIBRARY button
            var appendTest = listContainer[i];
            appendTest.insertBefore(btnTest, appendTest.childNodes[2]);
            btnTest.appendChild(iconTest);
            btnTest.appendChild(spanTest);
        }
    }

    function AddToLibrary(title, episode){
        localStorage.setItem(title, episode);
    }

    function ReadFromLibrary(title){
        var X = localStorage.getItem(title);
    }
})();
