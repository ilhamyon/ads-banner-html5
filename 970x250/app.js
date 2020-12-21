window.addEventListener('load', mainContent);

function mainContent() {
// frame1

setTimeout(function () {
	document.getElementById('text2').classList.add('slideInUp');}, 2200
);

setTimeout(function () {
	document.getElementById('text3').classList.add('slideInUp');}, 2500
);
setTimeout(function () {
	document.getElementById('text1').classList.add('zoomIn');}, 1300
);

setTimeout(function () {
	document.getElementById('text4').classList.add('fadeIn');}, 600
);
}

// button replay
// document.getElementById('btn-replay').addEventListener('click', resetan);

function resetan() {
// frame1 reset

		document.getElementById('text1').classList.remove('zoomIn');
		document.getElementById('cta').classList.remove('zoomIn');
		// document.getElementById('btn-replay').classList.remove('btn-replay-show');
	setTimeout(mainContent, 10);
}