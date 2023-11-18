let ele_h1 = document.createElement("h1");
ele_h1.setAttribute("id", "title");
ele_h1.style.textAlign = "center";
ele_h1.innerText = `Weather Forcasting`;
document.body.append(ele_h1);

let ele_div1 = document.createElement("div");
ele_div1.setAttribute("class", "container text-center");
document.body.append(ele_div1);

// //row 1
// let ele_div2_row1=document.createElement("div")
// ele_div2_row1.setAttribute('class','row')
// ele_div1.appendChild(ele_div2_row1)

// //row1 col 1
// let ele_div2_row1_col1=document.createElement("div")
// ele_div2_row1_col1.setAttribute('class','col-lg-4')
// ele_div2_row1.appendChild(ele_div2_row1_col1)

// let label1= document.createElement("label")
// label1.setAttribute('for','city')
// label1.innerText='Choose City'
// ele_div2_row1_col1.appendChild(label1)
// let select1= document.createElement("select")
// select1.setAttribute('id','city')
// select1.setAttribute('name','city')
// select1.setAttribute('onclick','loadCity()')
// select1.setAttribute('onchange','loadTemperature()')
// ele_div2_row1_col1.appendChild(select1)

// //row1 col 2
// let ele_div2_row1_col2=document.createElement("div")
// ele_div2_row1_col2.setAttribute('class','col-lg-4')
// ele_div2_row1.appendChild(ele_div2_row1_col2)

// let label2= document.createElement("label")
// label2.setAttribute('for','city')
// label2.innerText='Choose City'
// ele_div2_row1_col2.appendChild(label2)
// let select2= document.createElement("select")
// select2.setAttribute('id','city')
// select2.setAttribute('name','city')
// select2.setAttribute('onclick','loadCity()')
// select2.setAttribute('onchange','loadTemperature()')
// ele_div2_row1_col2.appendChild(select2)

// //row1 col 3
// let ele_div2_row1_col3=document.createElement("div")
// ele_div2_row1_col3.setAttribute('class','col-lg-4')
// ele_div2_row1.appendChild(ele_div2_row1_col3)

// let label3= document.createElement("label")
// label3.setAttribute('for','city')
// label3.innerText='Choose City'
// ele_div2_row1_col3.appendChild(label3)
// let select3= document.createElement("select")
// select3.setAttribute('id','city')
// select3.setAttribute('name','city')
// select3.setAttribute('onclick','loadCity()')
// select3.setAttribute('onchange','loadTemperature()')
// ele_div2_row1_col3.appendChild(select3)

//row 2
let ele_div2 = document.createElement("div");
ele_div2.setAttribute("class", "row");
ele_div1.appendChild(ele_div2);

//row2 col 1 card 1
let ele_div3 = document.createElement("div");
ele_div3.setAttribute("class", "col-lg-4");
ele_div2.appendChild(ele_div3);

let card1 = document.createElement("div");
card1.setAttribute("class", "card");
ele_div3.appendChild(card1);

let card1_header = document.createElement("div");
card1_header.setAttribute("class", "card-header");
card1_header.innerText = "Card1 header";
card1.appendChild(card1_header);

let card1_image = document.createElement("img");
card1_image.setAttribute("src", " ");
card1_image.setAttribute("class", "card-img-top");
card1_image.setAttribute("alt", " ");
card1.appendChild(card1_image);

let card1_div = document.createElement("div");
card1_div.setAttribute("class", "card-body");
card1.appendChild(card1_div);

let card1_h5 = document.createElement("h5");
card1_h5.setAttribute("class", "card-title");
card1_h5.innerText = "Card1 title";
card1_div.appendChild(card1_h5);

let card1_p = document.createElement("p");
card1_p.setAttribute("class", "card-text");
card1_p.innerText = `Some quick example text to build on the card title and make up the bulk of the card's content.`;
card1_div.appendChild(card1_p);

let card1_a = document.createElement("a");
card1_a.setAttribute("href", "#");
card1_a.setAttribute("class", "btn btn-primary");
card1_a.innerText = `Click for Weather`;
card1_div.appendChild(card1_a);

let weatherDisplay = document.createElement("p");
weatherDisplay.setAttribute("id", "weatherDisplay");
card1_div.appendChild(weatherDisplay);

//row2 col 2 card 2
let ele_div4 = document.createElement("div");
ele_div4.setAttribute("class", "col-lg-4");
ele_div2.appendChild(ele_div4);

let card2 = document.createElement("div");
card2.setAttribute("class", "card");
ele_div4.appendChild(card2);

let card2_header = document.createElement("div");
card2_header.setAttribute("class", "card-header");
card2_header.innerText = "Card1 header";
card2.appendChild(card2_header);

let card2_image = document.createElement("img");
card2_image.setAttribute("src", " ");
card2_image.setAttribute("class", "card-img-top");
card2_image.setAttribute("alt", " ");
card2.appendChild(card2_image);

let card2_div = document.createElement("div");
card2_div.setAttribute("class", "card-body");
card2.appendChild(card2_div);

let card2_h5 = document.createElement("h5");
card2_h5.setAttribute("class", "card-title");
card2_h5.innerText = "Card2 title";
card2_div.appendChild(card2_h5);

let card2_p = document.createElement("p");
card2_p.setAttribute("class", "card-text");
card2_p.innerText = `Some quick example text to build on the card title and make up the bulk of the card's content.`;
card2_div.appendChild(card2_p);

let card2_a = document.createElement("a");
card2_a.setAttribute("href", "#");
card2_a.setAttribute("class", "btn btn-primary");
card2_a.innerText = `Click for Weather`;
card2_div.appendChild(card2_a);

let weatherDisplay2 = document.createElement("p");
weatherDisplay2.setAttribute("id", "weatherDisplay2");
card2_div.appendChild(weatherDisplay2);

//row2 col 3 card 3
let ele_div5 = document.createElement("div");
ele_div5.setAttribute("class", "col-lg-4");
ele_div2.appendChild(ele_div5);

let card3 = document.createElement("div");
card3.setAttribute("class", "card");
ele_div5.appendChild(card3);

let card3_header = document.createElement("div");
card3_header.setAttribute("class", "card-header");
card3_header.innerText = "Card1 header";
card3.appendChild(card3_header);

let card3_image = document.createElement("img");
card3_image.setAttribute("src", " ");
card3_image.setAttribute("class", "card-img-top");
card3_image.setAttribute("alt", " ");
card3.appendChild(card3_image);

let card3_div = document.createElement("div");
card3_div.setAttribute("class", "card-body");
card3.appendChild(card3_div);

let card3_h5 = document.createElement("h5");
card3_h5.setAttribute("class", "card-title");
card3_h5.innerText = "Card3 title";
card3_div.appendChild(card3_h5);

let card3_p = document.createElement("p");
card3_p.setAttribute("class", "card-text");
card3_p.innerText = `Some quick example text to build on the card title and make up the bulk of the card's content.`;
card3_div.appendChild(card3_p);

let card3_a = document.createElement("a");
card3_a.setAttribute("href", "#");
card3_a.setAttribute("class", "btn btn-primary");
card3_a.innerText = `Click for Weather`;
card3_div.appendChild(card3_a);

let weatherDisplay3 = document.createElement("p");
weatherDisplay3.setAttribute("id", "weatherDisplay3");
card3_div.appendChild(weatherDisplay3);

var apiKey = "2558952ed209b7b24ab70f771c61ff65";
var cityName = "Afghanistan";

async function restCountriesAPI() {
  let response = await fetch("https://restcountries.com/v3.1/all");
  let data = await response.json();
  console.log(data);
  //city 1 data
  let city1 = data.filter((item) => item.name.common == "Afghanistan");
  console.log(city1);
  let cityName = city1[0].name.common;
  let cityRegion = city1[0].region;
  let cityCapitol = city1[0].capital[0];
  let cityCode = city1[0].fifa;
  let cityFlag =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Flag_of_Afghanistan_%282004%E2%80%932021%2C_variant%29.svg/800px-Flag_of_Afghanistan_%282004%E2%80%932021%2C_variant%29.svg.png?20191102020257";
  console.log(cityName);
  console.log(cityRegion);
  console.log(cityCapitol);
  console.log(cityCode);
  console.log(cityFlag);

  //setting values to card 1
  document.getElementsByClassName("card-header")[0].innerText = cityName;
  document
    .getElementsByClassName("card-img-top")[0]
    .setAttribute("src", cityFlag);
  document.getElementsByClassName(
    "card-title"
  )[0].innerText = `Capital:${cityCapitol}`;
  document.getElementsByClassName(
    "card-text"
  )[0].innerHTML = `Region:${cityRegion} <br/> Country Code:${cityCode}`;
  document
    .getElementsByClassName("btn btn-primary")[0]
    .addEventListener("click", () => {
      let city1weather =
        document.getElementsByClassName("card-header")[0].textContent;
      loadTemperature(city1weather);
    });

  //city 2 data
  let city2 = data.filter((item) => item.name.common == "Uzbekistan");
  let city2Name = city2[0].name.common;
  let city2Region = city2[0].region;
  let city2Capitol = city2[0].capital[0];
  let city2Code = city2[0].fifa;
  let city2Flag = city2[0].flags.png;
  console.log(city2Name);
  console.log(city2Region);
  console.log(city2Capitol);
  console.log(city2Code);
  console.log(city2Flag);

  //setting values to card 2
  document.getElementsByClassName("card-header")[1].innerText = city2Name;
  document
    .getElementsByClassName("card-img-top")[1]
    .setAttribute("src", city2Flag);
  document.getElementsByClassName(
    "card-title"
  )[1].innerText = `Capital:${city2Capitol}`;
  document.getElementsByClassName(
    "card-text"
  )[1].innerHTML = `Region:${city2Region} <br/> Country Code:${city2Code}`;
  document
    .getElementsByClassName("btn btn-primary")[1]
    .addEventListener("click", () => {
      let city2weather =
        document.getElementsByClassName("card-header")[1].textContent;
      loadTemperature(city2weather);
    });

  //city 3 data
  let city3 = data.filter((item) => item.name.common == "Albania");
  let city3Name = city3[0].name.common;
  let city3Region = city3[0].region;
  let city3Capitol = city3[0].capital[0];
  let city3Code = city3[0].fifa;
  let city3Flag = city3[0].flags.png;
  console.log(city3Name);
  console.log(city3Region);
  console.log(city3Capitol);
  console.log(city3Code);
  console.log(city3Flag);

  //setting values to card 3
  document.getElementsByClassName("card-header")[2].innerText = city3Name;
  document
    .getElementsByClassName("card-img-top")[2]
    .setAttribute("src", city3Flag);
  document.getElementsByClassName(
    "card-title"
  )[2].innerText = `Capital:${city3Capitol}`;
  document.getElementsByClassName(
    "card-text"
  )[2].innerHTML = `Region:${city3Region} <br/> Country Code:${city3Code}`;
  document
    .getElementsByClassName("btn btn-primary")[2]
    .addEventListener("click", () => {
      let city3weather =
        document.getElementsByClassName("card-header")[2].textContent;
      loadTemperature(city3weather);
    });
}
restCountriesAPI();

async function loadTemperature(cityName) {
  let res1 = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  );
  let data1 = await res1.json();
  console.log(data1);
  console.log(
    `${cityName}'s maximum temperature is ${data1.main.temp_max.toFixed()}°C`
  );
  if (cityName == "Afghanistan") {
    document.getElementById(
      "weatherDisplay"
    ).innerHTML = `<b>${cityName}'s maximum temperature is ${data1.main.temp.toFixed()}°C</b>`;
  } else if (cityName == "Uzbekistan") {
    document.getElementById(
      "weatherDisplay2"
    ).innerHTML = `<b>${cityName}'s maximum temperature is ${data1.main.temp.toFixed()}°C</b>`;
  } else if (cityName == "Albania") {
    document.getElementById(
      "weatherDisplay3"
    ).innerHTML = `<b>${cityName}'s maximum temperature is ${data1.main.temp.toFixed()}°C</b>`;
  }
}
