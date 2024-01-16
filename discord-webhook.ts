import { Product } from "./Types";
import { Filter } from "./products";

const { Webhook, MessageBuilder } = require("discord-webhook-node");
const hook = new Webhook(
  "https://discord.com/api/webhooks/1195920801434706040/Vb7FFsMTVNJk_luijUvP3EEspgTnxYsSf-nS5c_vVAjiEWdlPo0N-yiSPS6vb7Aax9We"
);

export function SendWebhook(
  productImage: string,
  ProductName: string,
  ProductDescription: string,
  sku:string,
  url: string
){
  const embed = new MessageBuilder()
  .SetTitle(ProductName)
  .SetThumbnail(productImage)
  .SetDescription(ProductDescription)

  .addField(sku, false)
  hook.send(embed);
}


// const embed = new MessageBuilder()
// .SetTitle("")
// .
