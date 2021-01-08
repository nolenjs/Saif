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
    cal: [''],
    brand?: [''],
    bulletBrand?: [''],
    bulletType?: [''],
    powderBrand?: [''],
    primerBrand?: ['']
}
