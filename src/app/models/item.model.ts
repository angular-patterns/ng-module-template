export interface Item { 
    Id: string; 
    Text: string; 
    Highlight: string, 
    Cursor: number, 
    Description: string, 
    Next: string 
}

export interface Items {
    Items: Item[]
}