import { Item} from "./Types"
import { SendWebhook } from "./discord-webhook"


const url = "https://www.bestbuy.ca/api/v2/json/search?categoryid=&currentRegion=AB&include=facets%2C%20redirects&lang=en-CA&page=1&pageSize=24&path=lcdmonitorscreensize0enrchrange%3A27%20inch&query=monitors&exp=labels%2Csearch_abtesting_100%3Ab1&token=864abfcc107b08001b919365cc020000c09b0000&sortBy=relevance&sortDir=desc" 


function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message
  return String(error)
}


const getProducts = async ()=> {
  let products = await fetch (url)
  let data = <Item> await products.json()
  return data  
}

export async function Filter(){ 
 let Item = await getProducts();
 //Item.pageSize = 100;
  for(let i = 0; i < Item.pageSize; i++ ){
    let name = Item.products[i].name
    let sku = Item.products[i].sku

    let price = Item.products[i].salePrice

    if(price > 160){
     SendWebhook(name,  )
    }
    // console.log(name, sku, price);
    
    // return back sku attached to specific product
  } 
  

} 


getProducts()
// Filter()






// check if the item is in stock, and return the price

// const isInStock = async () => {
//   let stock = await getProducts()
  
//   if(stock.products)
// }
