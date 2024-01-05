"use server"

export async function fetchBeers(page){
   const perPage = 24;
   const apiurl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${perPage}`;

   try{
    const response = await fetch(apiurl);
    const data = await response.json();
    return data;
   }catch(e){
    console.log(e);
    null
   }
}
