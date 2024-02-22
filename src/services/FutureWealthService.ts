export class FutureWealthService {
    private baseUrl: string;
  
    constructor() {
      this.baseUrl = "";
    }

    setUrl(baseUrl: string) {
      this.baseUrl = baseUrl;
    }

    async getFutureWealth(options: FutureWealthOptions): Promise<FutureWealthResults> {
      const url = `${this.baseUrl}/future-wealth-simulation`;
  
      const headers = new Headers();
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
  
      const requestData: FutureWealthOptions = options;
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify(requestData),
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const result = await response.json() as FutureWealthResults;
        return result;
      } catch (error) {
        console.error('Error fetching future wealth:', error);
        throw error; // Vous pourriez choisir de propager ou gérer l'erreur ici en fonction de votre logique
      }
    }
  }