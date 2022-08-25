import { Country } from "../../entities/country";
import { CountryRepository } from "../../interfaces/repositories/country-repository";
import { GetAllCountriesUseCase } from "../../interfaces/use-cases/country/get-all-countries";

export class GetAllCountries implements GetAllCountriesUseCase {
    countryRepository: CountryRepository
    constructor(countryRepository: CountryRepository) {
        this.countryRepository = countryRepository
    }

    async execute(): Promise<Country[]> {
        const result = await this.countryRepository.getCountries()
        return result
    }
}