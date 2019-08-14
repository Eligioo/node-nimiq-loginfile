import Nimiq from "@nimiq/core"
import LoginFile from "./keyguard/LoginFile"

(async () => {

	const entropy = Nimiq.Entropy.generate()
	const encryptedKey = new Nimiq.SerialBuffer(56)
	encryptedKey.writeUint8(1) // Version
	encryptedKey.writeUint8(6) // KDF rounds log2
	encryptedKey.write(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])) // Salt
	encryptedKey.writeUint32(242) // Purpose ID
	entropy.serialize(encryptedKey) // Secret (usually encrypted)
	encryptedKey.writeUint16(0) // Checksum
	console.log('Encrypted Key:', encryptedKey)
	const encryptedString = Nimiq.BufferUtils.toBase64(encryptedKey)
	const loginFile = new LoginFile(encryptedString, Math.floor(Math.random() * 10))
	const dataUrl = await loginFile.toDataUrl()

	var base64Data = dataUrl.replace(/^data:image\/png;base64,/, "");
	require("fs").writeFile("out.png", base64Data, 'base64', () => {});
	
})()