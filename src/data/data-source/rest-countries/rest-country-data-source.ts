import { CountryDataSource } from "../../interfaces/data-sources/country-data-source";
import { DatabaseWrapper } from "../../interfaces/data-sources/database-wrapper";
import { Country } from "./models/country";

export class RestCountryDataSource implements CountryDataSource {

    private database: DatabaseWrapper
    constructor(database: DatabaseWrapper) {
        this.database = database
    }
    async getAll(): Promise<Country[]> {
        const result = await this.database.find({})
        return result.map(item => ({
            name: item.name.commom,
            capital: item.capital ? Object.values(item.capital) : '-',
            area: item.area ? item.area : '-',
            currencies: 
              item.currencies ? Object.keys(item.currencies) : '-'
        }));
    }
}