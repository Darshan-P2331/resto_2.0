export const convertToCurrency = (value: number) => {
  return new Intl.NumberFormat(import.meta.env.VITE_LOCALES, {
                style: "currency",
                currency: import.meta.env.VITE_CURRENCY,
              }).format(value)
}