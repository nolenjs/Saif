export interface AmmoTicket {
    cal: string,
    date: string,
    brand?: string,
    bulletWeight?: number,
    bulletType?: string,
    powderWeight?: number,
    powderBrand?: string,
    primerBrand?: string,
    rounds: number,
    price?: number
}

export interface TicketOpts {
    cal: string[],
    brand?: string[],
    bulletBrand?: string[],
    bulletType?: string[],
    powderBrand?: string[],
    primerBrand?: string[]
}
