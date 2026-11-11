// Simple encryption/decryption using AES-like approach with Base64
// For production, use proper crypto libraries like tweetnacl-js or libsodium.js

const SECRET_KEY = "sejarah-indonesia-2026"; // Can be changed

// Caesar Cipher + Base64 for demonstration
export function encryptMessage(message: string, key: string = SECRET_KEY): string {
  try {
    // Simple shift cipher combined with base64
    const shifted = message
      .split("")
      .map((char, index) => {
        const charCode = char.charCodeAt(0);
        const keyChar = key[index % key.length];
        const shift = keyChar.charCodeAt(0) % 256;
        return String.fromCharCode((charCode + shift) % 256);
      })
      .join("");

    return btoa(shifted); // Base64 encode
  } catch (error) {
    console.error("Encryption error:", error);
    return "";
  }
}

export function decryptMessage(encrypted: string, key: string = SECRET_KEY): string {
  try {
    const shifted = atob(encrypted); // Base64 decode

    const decrypted = shifted
      .split("")
      .map((char, index) => {
        const charCode = char.charCodeAt(0);
        const keyChar = key[index % key.length];
        const shift = keyChar.charCodeAt(0) % 256;
        return String.fromCharCode((charCode - shift + 256) % 256);
      })
      .join("");

    return decrypted;
  } catch (error) {
    console.error("Decryption error:", error);
    return "";
  }
}

// Generate encrypted message from plaintext
export function generateEncryptedArchive(plaintext: string): string {
  return encryptMessage(plaintext);
}

// Verify and decrypt message
export function verifyArchiveMessage(encrypted: string): string {
  return decryptMessage(encrypted);
}
