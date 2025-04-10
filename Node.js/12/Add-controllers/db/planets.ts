export interface Planet {
    id: number;
    name: string;
  }
  
  // Invece di esportare direttamente il valore,
  // esporto un oggetto modificabile.
  export const db = {
    planets: [
      { id: 1, name: "Earth" },
      { id: 2, name: "Mars" },
    ] as Planet[],
  };
  