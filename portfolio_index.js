const desktopBtn = document.querySelector('.desktop-btn');
const webBtn = document.querySelector('.web-btn');
const mobileBtn = document.querySelector('.mobile-btn');
const scriptsBtn = document.querySelector('.scripts-btn');

const educationBtn = document.getElementById('education-btn');
const missionBtn = document.getElementById('mission-btn');

const desktopText = document.querySelector('.desktop-proj');
const webText = document.querySelector('.web-proj');
const mobileText = document.querySelector('.mobile-proj');
const scriptsText = document.querySelector('.scripts-proj');

const educationDiv = document.getElementById('education-div');
const missionDiv = document.getElementById('mission-div');

const resumeBtn = document.querySelector('.resume-btn');
const resumeText = document.querySelector('.resume-text');

const btnRow = document.querySelector('.button-row');

btnRow.childNodes.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        let btn = e.currentTarget;
        
        if(btn == desktopBtn) {
            desktopText.classList.remove('hidden');
            webText.classList.add('hidden');
            mobileText.classList.add('hidden');
            scriptsText.classList.add('hidden');
        }
        else if(btn == webBtn) {
            webText.classList.remove('hidden');
            desktopText.classList.add('hidden');
            mobileText.classList.add('hidden');
            scriptsText.classList.add('hidden');
        }
        else if(btn == mobileBtn) {
            mobileText.classList.remove('hidden');
            desktopText.classList.add('hidden');
            webText.classList.add('hidden');
            scriptsText.classList.add('hidden');
        }
        else if(btn == scriptsBtn) {
            scriptsText.classList.remove('hidden');
            desktopText.classList.add('hidden');
            webText.classList.add('hidden');
            mobileText.classList.add('hidden');
        }
        else {
            console.log("This shouldn't happen, but it did");
        }
    });
});

resumeBtn.addEventListener('click', function (e) {
    resumeText.classList.toggle('hidden');
});

educationBtn.addEventListener('click', function(e) {
    if(!(educationBtn.classList.contains('active'))) {
        educationBtn.classList.toggle('active');
        missionBtn.classList.toggle('active');
        educationDiv.classList.remove('hidden');
        missionDiv.classList.add('hidden');
    }

});

missionBtn.addEventListener('click', function(e) {
    if(!(missionBtn.classList.contains('active'))) {
        missionBtn.classList.toggle('active');
        educationBtn.classList.toggle('active');
        missionDiv.classList.remove('hidden');
        educationDiv.classList.add('hidden');
    }

})
