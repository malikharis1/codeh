window.onload = (event) => {
	let spans = document.querySelectorAll('span');
	setTimeout(() => {
		spans.forEach(element => {
			element.classList.remove('is-loading')
		});
		setTimeout(() => {
			document.getElementById('button').classList.add('is-hidden');
		}, 1000)
	}, 3800)
}
