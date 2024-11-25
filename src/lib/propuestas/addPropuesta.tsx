"use server";

import { ddbDocClient } from "@/utils/dbconfig";
 import { PutCommand } from "@aws-sdk/lib-dynamodb";

export interface propuestaItem {
  elementId: string;
  lang:string;
  clientId: string;
  products: Product[];
  descuento:number;
  impuesto:string;
  numeroAgente:string
}
export interface Product{
    productId:string;
    productComments:string; 
    productPrice:string;
}

export const addPropuesta = async (lang: string, clientId:string, products:Product[], descuento:number, impuesto:string, numeroAgente:string) => {
  try {

    const params = {
      TableName: "crmTable",
      Item: {
        elementId: `${Math.floor(Math.random() * 10000)}`,
        lang: lang,
        clientId: clientId,
        products:products,
        descuento:descuento,
        impuesto:impuesto,
        numeroAgente:numeroAgente
      },
    };
    await ddbDocClient.send(new PutCommand(params));
  } catch (error) {
    console.error( "Database Error:", error);
     throw new Error(
      "Database Error: Failed to create Propuesta. "
    );
  }
};