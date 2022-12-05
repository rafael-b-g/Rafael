function switchTheme() {
    let r = document.querySelector(':root');
    if (getComputedStyle(r).getPropertyValue('--theme1') == "#ffffff") {
        r.style.setProperty('--theme1', '#191919');
        r.style.setProperty('--theme2', '#3B3B3B');
        r.style.setProperty('--theme3', '#5E5E5E');
        r.style.setProperty('--theme4', '#808080');
        r.style.setProperty('--theme5', '#A3A3A3');
        r.style.setProperty('--highlight', '#00E3AA');
        r.style.setProperty('--selection', '#009C75');

        r.style.setProperty('--theme1-70', "rgba(25, 25, 25, 0.7)");
        r.style.setProperty('--anti-theme1', '#ffffff');
        r.style.setProperty('--anti-theme2', '#DDDDDD');
        r.style.setProperty('--anti-theme3', '#BABABA');
        r.style.setProperty('--anti-theme4', '#979797');
        r.style.setProperty('--anti-theme5', '#757575');
    } else {
        r.style.setProperty('--anti-theme1', '#191919');
        r.style.setProperty('--anti-theme2', '#3B3B3B');
        r.style.setProperty('--anti-theme3', '#5E5E5E');
        r.style.setProperty('--anti-theme4', '#808080');
        r.style.setProperty('--anti-theme5', '#A3A3A3');
        r.style.setProperty('--highlight', '#009C75');
        r.style.setProperty('--selection', '#00E3AA');

        r.style.setProperty('--theme1-70', "rgba(255, 255, 255, 0.7)");
        r.style.setProperty('--theme1', '#ffffff');
        r.style.setProperty('--theme2', '#DDDDDD');
        r.style.setProperty('--theme3', '#BABABA');
        r.style.setProperty('--theme4', '#979797');
        r.style.setProperty('--theme5', '#757575');
    }
    document.getElementById("footer").style.color = "var(--theme1)";
}

function calculateLastUpdate() {
    let lastUpdate = new Date("2022-12-05").getTime();
    let now = Date.now();
    let days = Math.floor((now - lastUpdate) / 86400000);
    document.getElementById("last-updated").innerHTML = "Last updated " + days + " day" + (days == 1 ? "" : "s") + " ago.";
}

function calculateAge() {
    let birth = new Date(1159646400000).getTime();
    let now = Date.now();
    let milliseconds = now - birth;
    let years = Math.trunc(milliseconds / 31536000000);
    document.getElementById("age").innerHTML = milliseconds.toString() + " milliseconds (" + years + " years) old";
}