export default (err, req, res, next) => {
  const code = res.statusCode  === 200 ? 500 : res.statusCode
  res.status(code).send(err.message)
}