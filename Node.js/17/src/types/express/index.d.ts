declare global {
    namespace Express {
      interface User {
        id: number;
        email: string;
        token?: string;
      }
  
      interface Request {
        user?: User;
      }
    }
  }
  
  export {}; // <-- NECESSARIO per trattare questo file come un modulo
  