//Twój kod

for (let i = 2; i < process.argv.length; i++){
setTimeout(() => {
    console.log(process.argv[i])
 }, (1000 * Number(process.argv[i])))
}