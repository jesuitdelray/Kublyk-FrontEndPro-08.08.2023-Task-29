const fs = require("fs")
const path = require("path")

const imageFolder = "images"

fs.readdir(imageFolder, (err, files) => {
    if (err) {
        console.error("Помилка при отриманні списку файлів:", err)
        return
    }

    const imageFiles = files.filter(file => path.extname(file).toLowerCase() === ".jpg")

    const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)]

    console.log("Випадкове зображення:", randomImage)
})
