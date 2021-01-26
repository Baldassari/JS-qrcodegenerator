// Import stylesheets
import "./style.css";
import QRCode from "./qrcode";

function generate() {
  QRCode.generate({
    content: document.getElementById("content").value,
    width: document.getElementById("width").value
  });
}

generate();
window.generate = generate;
