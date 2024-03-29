import { config } from "dotenv";

config();

export const PORT:number = parseInt(process.env.PORT || "5000",10) ;
export const DB_HOST: string = process.env.DB_HOST || "roundhouse.proxy.rlwy.net";
export const DB_USER: string = process.env.DB_USER || "root";
export const DB_PASSWORD: string = process.env.DB_PASSWORD || "wlTRrUtIaOLBRyGHhbWFedBFasuvySBS";
export const DB_DATABASE: string = process.env.DB_DATABASE || "railway";
export const DB_PORT: number= parseInt(process.env.DB_PORT || "47791",10);
export const DB_DIALECT: string = process.env.DB_DIALECT || 'mysql';

