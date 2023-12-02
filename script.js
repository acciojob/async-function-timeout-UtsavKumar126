//your JS code here. If required.
const btn=document.getElementById("btn");
const output=document.getElementById("output")

btn.addEventListener('click',display);

async function display(){
	const time=document.getElementById("delay").value*1000
	const text=document.getElementById("text").value
	setTimeout(()=>{
		output.innerText=text;
	},time)
}
