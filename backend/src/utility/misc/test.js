async function getDetails(country){
  let response = await fetch(`https://restcountries.com/v2/name/${country}`);
  let [data]= await response.json();
  return data
}

(async () => {
	let portugal = await getDetails('portugal');
	console.log(portugal)
})()
