const seenEl = document.querySelector('#lastseen');

// set up a.d and span.underline
const color = "#949494";
const aEle = document.createElement("a");
aEle.classList.add("d");
aEle.target = "_blank";
aEle.style.color = color;
const underlineEle = document.createElement("span");
underlineEle.classList.add("underline");
underlineEle.style.backgroundColor = "color";
            
async function updateSeen() {
    seenEle.innerHTML = "";
    const response = await fetch(`seen.json?nocache=${Math.random().toString().substring(2)}`).catch(console.log);
    const { project, project_href } = await response.json();
    if (!project) return seenEl.textContent = "I'm not working on anything right now.";
    if (!project_href) return seenEl.textContent = `I was last seen working on ${project}.`;
    aEle.href = project_href;
    aEle.textContent = project;
    seenEl.append("I was last seen working on ", aEle, underlineEle);
}

setInterval(updateSeen, 60 * 1000);
updateSeen();
