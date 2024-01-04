import { Item} from "./Types"


const url = "https://www.bestbuy.ca/api/v2/json/search?categoryid=&currentRegion=AB&include=facets%2C%20redirects&lang=en-CA&page=1&pageSize=24&path=lcdmonitorscreensize0enrchrange%3A27%20inch&query=monitors&exp=labels%2Csearch_abtesting_100%3Ab1&token=864abfcc107b08001b919365cc020000c09b0000&sortBy=relevance&sortDir=desc" 


const getProducts = async ()=> {
  let products = await fetch (url)
  let data = <Item> await products.json()
  return data  
}

const Filter = async ()=> {
 let Item = await getProducts();
 //Item.pageSize = 100;
  for(let i = 0; i < Item.pageSize; i++ ){
    let name = Item.products[i].name
    console.log(name)
  } 
} 

Filter()
