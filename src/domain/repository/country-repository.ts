import { CountryDataSource } from "../../data/interfaces/data-sources/country-data-source";
import { Country } from "../entities/country";
import { CountryRepository } from "../interfaces/repositories/country-repository";

export class CountryRepositoryImpl implements CountryRepository {
    countryDataSource: CountryDataSource
    constructor(countryDataSource: CountryDataSource) {
        this.countryDataSource = countryDataSource
    }

    async getCountries(): Promise<Country[]> {
        const result = await this.countryDataSource.getAll()
        return result;
    }
}