const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('foo');
	}, 1000);
});

myPromise
	.then(handleFulfilledA, handleRejectedA)
	.then(handleFulfilledB, handleRejectedB)
	.then(handleFulfilledC, handleRejectedC);
