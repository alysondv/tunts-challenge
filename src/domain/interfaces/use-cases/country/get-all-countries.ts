import { Country } from "../../../entities/country";
export interface GetAllCountriesUseCase { 
    execute(): Promise<Country[]>; 
}