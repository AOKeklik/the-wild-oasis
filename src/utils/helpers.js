export default function formatCurrency (price) {
    return Intl.NumberFormat("pl", {style: "currency", currency: "pln"}).format(price)
}