import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProAppConfigService } from '@totvs/protheus-lib-core';
import { environment } from './environments/environment';

// Decorador que define metadados do componente principal
@Component({
  selector: 'app-root', // Nome da tag usada para este componente
  templateUrl: './app.component.html', // Template HTML associado
  styleUrls: ['./app.component.css'], // Estilos CSS associados
  standalone: false // Indica que o componente faz parte de um módulo
})

// Classe do componente principal da aplicação
export class AppComponent implements OnInit {

  // Controla se o menu lateral está recolhido ou expandido
  poMenuCollapsed: boolean = true;
  // Lista de itens do menu lateral
  poMenuItems: Array<any> = [];
  
  //erp = environment.ERP; // Variável para armazenar o nome do ERP a partir do ambiente

  // Injeta o serviço de configuração do Protheus
  constructor(
    public protheusAppService: ProAppConfigService
  ) { }

  // Método chamado automaticamente ao inicializar o componente
  ngOnInit() {
    this.getMenu(); // Inicializa os itens do menu
  }

  // Método responsável por carregar a configuração do app e definir os itens do menu
  getMenu() {

    this.protheusAppService.loadAppConfig(); // Carrega configurações do app
    this.poMenuItems = [
      {
        label: 'Processos', // Nome do item do menu
        icon: 'po-icon-document', // Ícone do item
        shortLabel: 'Proc', // Nome curto
      },
      {
        action: () => this.protheusAppService.callAppClose(), // Função para fechar o app
        icon: 'an an-sign-out', // Ícone de sair
        label: 'Sair', // Nome do item
        shortLabel: 'Sair', // Nome curto
      }
    ]
  }

}

