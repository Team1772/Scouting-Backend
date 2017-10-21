module.exports = function (res, err) {
  console.log(err);
  res.send({ "message": err.message} );
}