"use server";

import { ddbDocClient } from "@/utils/dbconfig";
 import { PutCommand } from "@aws-sdk/lib-dynamodb";

export interface UserItem {
  elementId: string;
  email:string;
  numeroAgente: string;
  nombreAgente: string;
  isActive: boolean;
  userType: string;
}

export const addUser = async (numeroAgente: string, nombreAgente:string, email:string) => {
  try {
    const params = {
      TableName: "crmTable",
      Item: {
        elementId: `${Math.floor(Math.random() * 10000)}`,
        email:email,
        numeroAgente: numeroAgente,
        nombreAgente: nombreAgente,
        isActive:true,
        userType:"comercial"
      },
    };
    await ddbDocClient.send(new PutCommand(params));
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(
      "Database Error: Failed to create User."
    );
  }
};