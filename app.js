fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=> displayCountries(data))



const displayCountries = countries => {
    const countriesDiv= document.getElementById('countries');
    //practice version
    countries.forEach(country => {
        const countryside= document.createElement('div'); //because of  some problem i use countryside as a alter of countryDiv
        countryside.className ='country'
        const countryInfo=`
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>


        <button src="#countryDetails" onclick="displayCountryDetails('${country.name.common}')" > Details</button>



         `
         countryside.innerHTML=countryInfo;
         countriesDiv.appendChild(countryside);

    });




    //(v2)
    // countries.forEach(country => {
        
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className ='country';
    //     const countryInfo = `
    //     <h3 class='country-name'>${country.name.common}</h3>
    //     <p>${country.capital}<p/>
    //     `;
    //     countryDiv.innerHTML=countryInfo;

    //     countriesDiv.appendChild(countryDiv);
        
    // });




    // shorter version of v1
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement('div');
    //     countryDiv.className ='country';
    //     const countryInfo = `
    //     <h3 class='country-name'>${country.name.common}</h3>
    //     <p>${country.capital}<p/>
    //     `;
    //     countryDiv.innerHTML=countryInfo;

    //     countriesDiv.appendChild(countryDiv);

        //(v1)manually add some tags like h3,p ,li
        // const h3 = document.createElement('h3');
        // const p = document.createElement('p');
        
        // h3.innerText=country.name.common;
        // p.innerText=country.capital;
        // countryDiv.appendChild(h3);
        // countryDiv.appendChild(p);


        
        
        
    
}
const displayCountryDetails= name=>{
    const url=`https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>renderCountryInfo(data[0]))

}
const renderCountryInfo=country=>{
    const countryDiv=document.getElementById('countryDetails');
    countryDiv.innerHTML=`
    
    <h1>Country Name :${country.name.common}</h1>
    <h3> Capital :${country.capital}</h3>
    <h6> Total Area : ${country.area}</h6>
    <h6>Total Population : ${country.population}</h6>

    <img src="${country.flags.png}">
    
    `
}