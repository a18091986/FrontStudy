const url = "https://www.cbr-xml-daily.ru/daily_json.js";

const reponse = fetch(url);


async function getCurrency() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const usd = data.Valute.USD.Value.toFixed(1);
    const eur = data.Valute.EUR.Value.toFixed(1);
    console.log(`1 USD = ${usd} RUB`);
    console.log(`1 EUR = ${eur} RUB`);


    document.getElementById("usd").textContent = usd;
    document.getElementById("eur").textContent = eur;


  } catch (error) {
    console.log(error);
  }
}

getCurrency();


