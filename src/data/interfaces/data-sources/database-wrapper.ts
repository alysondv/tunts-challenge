export interface DatabaseWrapper { 
  find(query: object): Promise<any[]>
}