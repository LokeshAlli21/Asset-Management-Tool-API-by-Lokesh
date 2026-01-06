export const logger = (req, res, next) => {
    console.log(`${req.metod} ${req.url}`)
    next()
}