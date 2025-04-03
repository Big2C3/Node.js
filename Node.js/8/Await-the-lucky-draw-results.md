Crea una getResultsfunzione che usa asynce await. All'interno della funzione, chiama la luckyDrawfunzione per ciascuno dei giocatori: Tina, Jorge, Julien

Disconnettere il valore risolto per ogni promessa e gestire eventuali rifiuti di promessa.

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
