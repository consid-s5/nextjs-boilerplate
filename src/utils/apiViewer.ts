export const apiViewer = () => {
	if (typeof document === 'undefined') {
		return null;
	}

	const keystrokeDelay = 400;
	let numKeyPresses = 0;
	let lastKeyTime = Date.now();

	document.addEventListener('keydown', event => {
		if (event.key === 'Escape') {
			const currentTime = Date.now();
			if (currentTime - lastKeyTime > keystrokeDelay) {
				numKeyPresses = 0;
			} else {
				numKeyPresses++;
			}
			lastKeyTime = currentTime;

			if (numKeyPresses >= 2) {
				let path = window.location.pathname;
				const url = `${process.env.NEXT_PUBLIC_API_HOST}${process.env.NEXT_PUBLIC_API_ENDPOINT}${path}.json`;

				fetchFromApi(url);
			}
		}
	});
};

const fetchFromApi = async (url: string) => {
	console.groupCollapsed('FETCH FROM API', url);
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);

	console.groupEnd();
};
