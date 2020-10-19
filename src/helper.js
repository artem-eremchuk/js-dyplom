export function menuActiveBtn(){
    const menu = Array.from(document.querySelector('.header__menu').children);
    menu.forEach((e) => {
        e.addEventListener('click', () => {
            menu.forEach((el) => { 
                if (el.classList.contains('active-menu')){
                    el.classList.remove('active-menu');
                }
            })
            e.classList.add('active-menu');
        });
    })
}

export function findOS() {
    let OS = ''; 
    if (navigator.userAgent.indexOf("Win") !== -1) { OS = "Windows"; };
    if (navigator.userAgent.indexOf("Mac") !== -1) { OS =  "Macintosh" }; 
    if (navigator.userAgent.indexOf("Linux") !== -1) { OS = "Linux" }; 
    if (navigator.userAgent.indexOf("Android") !== -1) { OS = "Android" }; 
    if (navigator.userAgent.indexOf("like Mac") !== -1) { OS = "iOS" }; 
    return OS;
}

export const browser = (function() {
    const test = function(regexp) {
        return regexp.test(window.navigator.userAgent)
    }
    switch (true) {
        case test(/edg/i): return "Microsoft Edge";
        case test(/trident/i): return "Microsoft Internet Explorer";
        case test(/firefox|fxios/i): return "Mozilla Firefox";
        case test(/opr\//i): return "Opera";
        case test(/ucbrowser/i): return "UC Browser";
        case test(/samsungbrowser/i): return "Samsung Browser";
        case test(/chrome|chromium|crios/i): return "Google Chrome";
        case test(/safari/i): return "Apple Safari";
        default: return "Other";
    }
})();