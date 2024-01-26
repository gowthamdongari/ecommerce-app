export function fetchAllProducts() {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server url here
    const response = await fetch('http://localhost:8000/products')
    const data = await response.json()
    resolve({data})
  }
  );
}

export function fetchProductsByFilters(filter) {
// filter = {"category":"smartphone"}
let queryString = '';  
for(let key in filter){
  queryString += `${key}=${filter[key]}&`
  }

  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server url here
    const response = await fetch('http://localhost:8000/products?'+queryString)
    const data = await response.json()
    resolve({data})
  }
  );
}
