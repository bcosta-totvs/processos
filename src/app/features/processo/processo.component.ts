import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoDialogService, PoNotificationService, PoTableColumn } from '@po-ui/ng-components';
import { Processo } from '../interface/processo';
import { ProcListService } from '../services/proces-service';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrl: './processo.component.css',
  standalone: false
})

export class ProcessoComponent implements OnInit {

  // Título da página exibido no topo
  pageTitle: string = 'Cadastro de Processos';
  
  // Array filtrado para exibição na tabela
  itemsFiltered: Array<Processo> = [];

  // Indica se a tabela de processos deve ser exibida
  lcallProc: boolean = false;

  // Array que armazena todos os itens retornados da API
  items: Array<any> = [];

  actionOptions: Array<string> = []; // Opções de ação para o diálogo
  action: string = ''; // Ação selecionada pelo usuário no diálogo

  // Colunas da tabela de processos, usadas pelo componente po-table
  public readonly colunasProc: Array<PoTableColumn> = [
    { property: 'filial', label: 'Filial', width: "10%" }, // Coluna de filial
    {
      property: 'origem', label: 'Origem', width: "10%", type: "label",
      labels: [
        { value: '1', color: 'color-02', label: 'Processo Padrão', tooltip: 'Processo Padrão' }, // Label para origem 1
        { value: '2', color: 'color-10', label: 'Processo de Usuário', tooltip: 'Processo de Usuário' } // Label para origem 2
      ]
    },
    { property: 'codigo', label: 'Código' }, // Coluna de código
    { property: 'descricao', label: 'Descrição' }, // Coluna de descrição
  ];
  
  constructor(
    private ProcListService: ProcListService, // Serviço para buscar a lista de processos 
    private poNotificationService: PoNotificationService, // Serviço para exibir notificações
    private poAlert: PoDialogService // Serviço para exibir diálogos de alerta
  ) 
  { }
 
  // Método chamado automaticamente ao inicializar o componente
  ngOnInit(): void {
    // Nenhuma ação ao iniciar, pode ser usado para inicializações futuras
  }

  // Breadcrumb de navegação exibido no topo da página
  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: 'Home', link: '/' }, { label: 'Processos' }]
  };

  carregarProc(): void {
    this.lcallProc = true; // Ativa a exibição da tabela de processos

    this.ProcListService.getLista().subscribe({
      next: (ret: any) => {
         // ret é o retorno da API, esperado no formato: { items: [...] }
        // A propriedade "items" do retorno é um array vindo do backend.
        // O .map() percorre cada elemento do array e cria um NOVO array
        // com base na transformação que você retornar.
        // Aqui, usamos o operador spread { ...item } para criar um novo objeto
        // copiando todas as propriedades do item original.
        // Isso garante imutabilidade: não mexemos diretamente no objeto que veio da API.
        this.items = ret.items.map((item: any) => ({ ...item}));

        // Aqui criamos um NOVO array (cópia) a partir de this.items.
        // O operador spread (...) espalha cada elemento de this.items
        // dentro de um novo array [], garantindo que itemsFiltered seja independente
        // e não apenas uma referência ao mesmo array.
        this.itemsFiltered = [...this.items]; // Atualiza a lista filtrada com os itens retornados
      },
      error: (error: any) => {
        const errorMessage = error?.message || 'Erro desconhecido'; // Mensagem de erro padrão
        
      },
      complete: () => {
        this.poNotificationService.success('Requisição de processos concluída');
        console.log('Requisição de processos concluída.'); // Loga a conclusão da requisição
      }
    });
  }

  abrirDoc(): void {
    // Usa o serviço de diálogo do PO-UI (poAlert) para exibir uma caixa de confirmação ao usuário.
    // O método confirm abre um pop-up com título, mensagem e opções de ação (confirmar, cancelar, fechar).
    this.poAlert.confirm({
      literals: { cancel: 'Não', confirm: 'Sim' },
      title: 'Documentação',
      message: 'Documentação do PO-UI será aberta em uma nova aba. Deseja continuar?',
      confirm: () => {
        // Abre a URL da documentação em uma nova aba do navegador.
        // window.open(url, target):
        // - Primeiro parâmetro é o link
        // - Segundo parâmetro '_blank' indica que deve abrir em uma nova aba
        window.open('https://po-ui.io/documentation/po-dialog?view=doc', '_blank'); // Abre a documentação em uma nova aba
      },
      cancel: () => {
       // Verifica se dentro do array "actionOptions" existe a opção "cancel".
        // Se existir, define a propriedade "action" como "Cancel".
        // Se não existir, retorna undefined (não faz nada).
        this.actionOptions.includes('cancel')
          ? (this.action = 'Cancel')
          : undefined
      },
      close: () => { 
        // Verifica se dentro do array "actionOptions" existe a opção "close".
        // Se existir, define a propriedade "action" como "Close".
        // Se não existir, retorna undefined (não faz nada).
        this.actionOptions.includes('close')
          ? (this.action = 'Close')
          : undefined
      } 
    });
  }
}
