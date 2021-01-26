var QRCode = require("qrcode");

exports.generate = function generate({ content, width }) {
  var opts = {
    type: "image/jpeg",
    width: width,
    margin: 0
  };
  return QRCode.toCanvas(content, opts, function(err, canvas) {
    if (err) throw err;

    var container = document.getElementById("app");
    container.innerHTML = `<img src=${canvas.toDataURL()}>`;
  });
};
