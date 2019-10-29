if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js')
		.then(function(registration){
			// alert('Registered');
			// Registration was successful
			console.log("registered");
		})
		.catch(function(err){
			// registration failed :(
			console.log('Failed');
			console.log('ServiceWorker registration failed: ', err);
		});
}
