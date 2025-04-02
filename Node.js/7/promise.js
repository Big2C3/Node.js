function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }
  
  luckyDraw("Joe")
    .then((result) => {
      console.log(result);
      return luckyDraw("Caroline");
    })
    .then((result) => {
      console.log(result);
      return luckyDraw("Sabrina");
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error.message);
    });
  
//     $ node promise.js
// Joe won a prize in the draw!
// Caroline won a prize in the draw!
// Sabrina lost the draw.



// async function playLuckyDraw() {
//   try {
//     console.log(await luckyDraw("Joe"));
//     console.log(await luckyDraw("Caroline"));
//     console.log(await luckyDraw("Sabrina"));
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// playLuckyDraw();