// Utility untuk generate encrypted messages

const SECRET_KEY = "sejarah-indonesia-2026";

function encryptMessage(message, key = SECRET_KEY) {
  try {
    const shifted = message
      .split("")
      .map((char, index) => {
        const charCode = char.charCodeAt(0);
        const keyChar = key[index % key.length];
        const shift = keyChar.charCodeAt(0) % 256;
        return String.fromCharCode((charCode + shift) % 256);
      })
      .join("");

    return Buffer.from(shifted, 'binary').toString('base64');
  } catch (error) {
    console.error("Encryption error:", error);
    return "";
  }
}

// Messages to encrypt
const messages = [
  "Aku adalah Soekarno, saya akan memimpin Indonesia menuju masa depan yang cerah",
  "Bersama Soekarno, saya proklamasikan kemerdekaan Indonesia dengan jiwa yang membara",
  "Bangunkan semangat perempuan Indonesia untuk maju dan berkontribusi pada masa depan bangsa",
  "Saya berjuang untuk Jawa dan Indonesia, melawan penjajahan dengan jiwa yang tak pernah tunduk",
  "Saya memilih kemerdekaan atau mati, tidak ada jalan lain untuk nusa dan bangsa"
];

console.log("Encrypted messages:\n");
messages.forEach((msg, idx) => {
  const encrypted = encryptMessage(msg);
  console.log(`${idx + 1}. ${encrypted}\n`);
});
