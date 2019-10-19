if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.unregister('/sw.js')
		.then(function(registration){
			// alert('Registered');
			// Registration was successful
			console.log(registration);
		})
		.catch(function(err){
			// registration failed :(
			console.log('Failed');
			console.log('ServiceWorker registration failed: ', err);
		});
}
