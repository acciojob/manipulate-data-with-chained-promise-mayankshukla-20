//your JS code here. If required.
let arr = [1,2,3,4];
function filter(data){
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			resolve(data.filter((item) => item%2 == 0));
		},1000)
	})
};
function multiply(data){
	return new Promise((resolve,reject) => {
		setTimeout(() => {
			resolve(data.map((item) => item*2);
		},2000)
	})
}

async function xyz(){
	let data1 = await filter(arr);
	document.getElementById("output").innerHTML += `<p>${data1}</p>`;
	let data2 = await multiply(data1);
	document.getElementById("output").innerHTML += `<p>${data2}</p>`;
}
xyz();