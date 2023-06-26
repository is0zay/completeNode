// const doWorkPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		// resolve([7, 4, 1])
// 		reject('Things went wrong')
// 		resolve([2,4,6,8])
// 	}, 2000)
// });

const { resolve } = require("path")

// doWorkPromise.then((result) => {
// 	console.log('Success', result)
// }).catch((error) => {
// 	console.log('Error!', error)
// })

//
//									 fulfilled
//									/
// Promise	-- pending  ---->
//									\
//									 rejected
//


const add = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(a + b)
		}, 2000)
	})
}

// add(2,4).then((sum) => {
// 	console.log(sum)

// 	add(sum, 8).then((sum2) => {
// 		console.log(sum2)
// 	}).catch((err) => {
// 		console.log(err)
// 	})
// }).catch((err) =>{
// 	console.log(err)
// })

add(2,2).then((sum) => {
	console.log(sum);
	return add(sum, 7)
}).then((sum2 => {
	console.log(sum2)
})).catch((err) => {
	console.log(err)
})