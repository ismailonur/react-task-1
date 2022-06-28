import getData from "./getData.js";

(async () => {
    const data = await getData(1);
    console.log(data);
})()