const desktopBtn = document.querySelector('.desktop-btn');
const webBtn = document.querySelector('.web-btn');
const mobileBtn = document.querySelector('.mobile-btn');
const scriptsBtn = document.querySelector('.scripts-btn');

const educationBtn = document.getElementById('education-btn');
const missionBtn = document.getElementById('mission-btn');
const skillsBtn = document.getElementById('skills-btn');

const desktopText = document.querySelector('.desktop-proj');
const webText = document.querySelector('.web-proj');
const mobileText = document.querySelector('.mobile-proj');
const scriptsText = document.querySelector('.scripts-proj');

const educationDiv = document.getElementById('education-div');
const missionDiv = document.getElementById('mission-div');
const skillsDiv = document.getElementById('skills-div');

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

educationBtn.addEventListener('click', function(e) {
    if(!(educationBtn.classList.contains('active'))) {
        educationBtn.classList.toggle('active');
        educationDiv.classList.remove('hidden');

        if(missionBtn.classList.contains('active'))
            missionBtn.classList.remove('active');

        if(skillsBtn.classList.contains('active'))
            skillsBtn.classList.remove('active');
    
        missionDiv.classList.add('hidden');
        skillsDiv.classList.add('hidden');

    }

});

missionBtn.addEventListener('click', function(e) {
    if(!(missionBtn.classList.contains('active'))) {
        missionBtn.classList.toggle('active');
        missionDiv.classList.remove('hidden');

        if(educationBtn.classList.contains('active'))
            educationBtn.classList.remove('active');

        if(skillsBtn.classList.contains('active'))
            skillsBtn.classList.remove('active');
    
        educationDiv.classList.add('hidden');
        skillsDiv.classList.add('hidden');
    }
});

skillsBtn.addEventListener('click', function(e) {
    console.log(skillsBtn.classList.contains('active'));
    
    if(!(skillsBtn.classList.contains('active'))) {
        skillsBtn.classList.toggle('active');
        skillsDiv.classList.remove('hidden');

        if(educationBtn.classList.contains('active'))
            educationBtn.classList.remove('active');

        if(missionBtn.classList.contains('active'))
            missionBtn.classList.remove('active');
    
        educationDiv.classList.add('hidden');
        missionDiv.classList.add('hidden');
    }
});
