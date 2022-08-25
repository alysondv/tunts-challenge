import express from 'express'
import { Request, Response } from 'express'
import { GetAllCountriesUseCase } from "../../domain/interfaces/use-cases/country/get-all-countries";


export default function ContactsRouter(
    GetAllCountriesUseCase: GetAllCountriesUseCase,
) {
    const router = express.Router()

    router.get('/', async (req: Request, res: Response) => {
        try {
            const countries = await GetAllCountriesUseCase.execute()
            res.send(countries)
        } catch (err) {
            res.status(500).send({ message: "Error fetching data" })
        }
    })
}