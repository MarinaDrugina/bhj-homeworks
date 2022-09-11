const tabs = document.querySelectorAll('.tabs');
const content = document.querySelectorAll('.tab__contents');

function removeClass(el, className) {
    for (let i = 0; i < el.length; i++) {
            el[i].classList.remove(className);
    }
}

for(let ind = 1; ind <= tabs.length; ind++) {
    const currentTab = document.getElementById(`tabs${ind}`);
    
    const currentTabNav = currentTab.firstElementChild.children;
    const currentTabContent = currentTab.lastElementChild.children;

    for(let i = 0; i < currentTabNav.length; i++) {
        currentTabNav[i].addEventListener('click', function(event) {
            removeClass(currentTabNav, 'tab_active');
            this.classList.add('tab_active');
    
            removeClass(currentTabContent, 'tab__content_active');
    
            let arr = Array.from(currentTabNav);
            let target = document.querySelector('.tab_active');
            let index = arr.indexOf(target);
    
            for(let i = 0; i < currentTabContent.length; i++){
                currentTabContent[index].classList.add('tab__content_active');
            }
        });
    }
}