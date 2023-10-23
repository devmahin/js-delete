const lyrues = "Tumi bondu kala Pakhi , amr Ponar Bosonto batase"

// const searchExit = lyrues.includes("amr")
// console.log(searchExit)

const searchString = "Pakhi"
// const search = lyrues.toLowerCase();
const searchvalue = lyrues.toLowerCase().includes(searchString.toLowerCase())
console.log(searchvalue)


////////////////////////////////////////////
console.log(lyrues.indexOf("kala"))
if(lyrues.indexOf("mahin") !== -1){
    console.log("kala exist")

}

else{console.log("kala exist")}


////start width
console.log(lyrues.startsWith("Tumi"))

const fileName = "myimg.pdf";
console.log(fileName.endsWith("pdf"))