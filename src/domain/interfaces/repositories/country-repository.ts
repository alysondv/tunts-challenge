import { Country } from "../../entities/country";
export interface CountryRepository { 
    getCountries(): Promise<Country[]>; 
}