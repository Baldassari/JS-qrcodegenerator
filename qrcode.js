var QRCode = require("qrcode");

exports.generate = function generate(code) {
  var opts = {
  type: 'image/jpeg',
  width: 109,
  margin: 0
}
  return QRCode.toCanvas(code, opts, function(err, canvas) {
    if (err) throw err;

    var container = document.getElementById("app");
    container.appendChild(canvas);
  });
};
