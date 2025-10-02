// Interface que representa um processo
export interface Processo {
    origem: string;      // Origem do processo
    filial: string;      // Filial relacionada ao processo
    codigo: string;      // Código identificador do processo
    descricao: string;   // Descrição do processo
    $selected: boolean;  // Indica se o processo está selecionado
}

// Função que retorna um objeto Processo com valores padrão
export const getProcessoDefault = (): Processo => {
    return {
        $selected: false, // Inicialmente não selecionado
        origem: '',       // Origem vazia
        filial: '',       // Filial vazia
        codigo: '',       // Código vazio
        descricao: '',    // Descrição vazia
    }
}

// Interface que representa uma lista de processos
export interface ProcessoList {
    items: Array<Processo>; // Array de objetos Processo
}


//Interface = contrato de estrutura de dados, garantindo que os objetos usados tenham as propriedades e tipos definidos.