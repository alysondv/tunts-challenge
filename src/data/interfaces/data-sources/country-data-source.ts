import { Country } from "../../../domain/entities/country";
export interface CountryDataSource {
    getAll(): Promise<Country[]>;
}