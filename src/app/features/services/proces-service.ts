import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProcessoList } from "../interface/processo";

// Decorador que marca a classe como um serviço injetável no Angular
@Injectable({
    providedIn: 'root' // Disponível em toda a aplicação
})

export class ProcListService {

    url = environment.apiGetProc;

    constructor(
        private httpClient: HttpClient,
    ) {}

     // Método que retorna um Observable com a lista de processos
    getLista(): Observable<ProcessoList> {
        // Opções HTTP, incluindo cabeçalho para bloquear a tela durante a requisição
        const httpOptions = {
            headers: new HttpHeaders({
                'X-PO-Screen-Lock': 'true', // Bloqueia a tela enquanto carrega
            }),
        };

        // Realiza a requisição GET para a API e retorna o resultado tipado
        return this.httpClient.get<ProcessoList>(`${this.url}`, httpOptions);
    }
}

/*O que é Observable?
É uma forma de trabalhar com dados assíncronos (que chegam depois, como requisições HTTP).
Diferente de retornar o valor diretamente, ele retorna um "fluxo de dados".
Você se inscreve (subscribe) nesse fluxo para receber o resultado quando a API responder.  */