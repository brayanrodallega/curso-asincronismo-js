import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

async function getData(urlApi) {
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}

const anotherFunction = async (urlApi) => {
    try {
        const products = await getData(`${urlApi}/products`);
        const product = await getData(`${urlApi}/products/${products[1].id}`);
        const category = await getData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);
        
    } catch (error) {
        console.error(error);
    }
}

anotherFunction(API);