const desktopBtn = document.querySelector('.desktop-btn');
const webBtn = document.querySelector('.web-btn');
const mobileBtn = document.querySelector('.mobile-btn');
const scriptsBtn = document.querySelector('.scripts-btn');

const desktopText = document.querySelector('.desktop-proj');
const webText = document.querySelector('.web-proj');
const mobileText = document.querySelector('.mobile-proj');
const scriptsText = document.querySelector('.scripts-proj');

const resumeBtn = document.querySelector(".resume-btn");
const resumeText = document.querySelector(".resume-text");

//could use Event Delegation here, but...
desktopBtn.addEventListener('click', function(e) {
    if(document.querySelector('.desktop-proj.hidden')) {
        document.querySelector('.desktop-proj.hidden').classList.remove('hidden');
        webText.classList.add('hidden');
        mobileText.classList.add('hidden');
        scriptsText.classList.add('hidden');
    }
});

webBtn.addEventListener('click', function(e) {
    if(document.querySelector('.web-proj.hidden')) {
        document.querySelector('.web-proj.hidden').classList.remove('hidden');
        desktopText.classList.add('hidden');
        mobileText.classList.add('hidden');
        scriptsText.classList.add('hidden');
    }
});

mobileBtn.addEventListener('click', function(e) {
    if(document.querySelector('.mobile-proj.hidden')) {
        document.querySelector('.mobile-proj.hidden').classList.remove('hidden');
        desktopText.classList.add('hidden');
        webText.classList.add('hidden');
        scriptsText.classList.add('hidden');
    }
});

scriptsBtn.addEventListener('click', function(e) {
    if(document.querySelector('.scripts-proj.hidden')) {
        document.querySelector('.scripts-proj.hidden').classList.remove('hidden');
        desktopText.classList.add('hidden');
        webText.classList.add('hidden');
        mobileText.classList.add('hidden');
    }
});


resumeBtn.addEventListener("click", function (e) {
    resumeText.classList.toggle("show-text");
});