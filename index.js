const images = [
    "./images/1.webp",
    "./images/2.webp",
    "./images/3.webp",
    "./images/4.webp",
    "./images/5.webp",
]
const imageElement = document.getElementById("randomImage")
const getRandomImage = () => images[Math.floor(Math.random() * images.length)]
const initialSrc = getRandomImage()

imageElement.src = initialSrc
imageElement.alt = initialSrc

document.getElementById("loadImageButton").addEventListener("click", () => {
    const src = getRandomImage()

    imageElement.src = src
    imageElement.alt = src
})
