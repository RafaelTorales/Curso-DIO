// Funções
function addNumber(x: number, y: number): number {
    return y + x;
}

let soma: number = addNumber(4, 7);

// Funções Multi Tipos
function callToPhone(phone: number | string): number | string {
    return phone;
}
