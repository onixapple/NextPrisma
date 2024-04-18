const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    minimumFractionDigits: 0,
})

export function formatCurrency (amount: number) {
    return CURRENCY_FORMATTER.format(amount)
}

const NUMBER_FORMATED = new Intl.NumberFormat("en-US") 

export function formatNumber(number: number) {
    return NUMBER_FORMATED.format(number)
}