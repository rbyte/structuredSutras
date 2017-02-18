/*
	Matthias Graf
	matthias.graf@mgrf.de
	2016
	GNU AGPL v3
*/

var showMoreOn = false
var aboutSummary = document.getElementById("aboutSummary")
var showMore = document.getElementById("showMore")
var aboutFull = document.getElementById("aboutFull")

console.assert(aboutSummary && showMore && aboutFull)

aboutSummary.onclick = function() {
	aboutFull.style.maxHeight = showMoreOn ? "0" : "100em"
	if (showMoreOn) {
		showMore.classList.remove("on")
	} else {
		showMore.classList.add("on")
	}
	showMoreOn = !showMoreOn
}

console.log("done.")