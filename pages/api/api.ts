import axios from "axios";
import Papa from "papaparse";

export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  secondImage: string;
  price: number;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list: async (): Promise<Product[]> => {
    return axios
      .get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTU6fDPVr0HMxo5DbowRMfVPhS1TBFqGW8v2XwfzNTAF7aoY_JSQLwolW4pTOonKz78RL4S3uu3n4T_/pub?output=csv",
        {
          responseType: "blob",
        }
      )
      .then((response) => {
        return new Promise<Product[]>((resolve, reject) => {
          Papa.parse(response.data, {
            header: true,
            complete: (results) => resolve(results.data as Product[]),
            error: (error) => reject(error.message),
          });
        });
      });
  },
};
