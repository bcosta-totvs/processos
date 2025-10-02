import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcessoComponent } from './processo.component';
import { AppModule } from '../../app.module';
import { ProcListService } from '../services/proces-service';

// Bloco de testes para o componente ProcessoComponent
describe('LoteListaComponent', () => {
  let component: ProcessoComponent; // Instância do componente a ser testado
  let fixture: ComponentFixture<ProcessoComponent>; // Utilitário para manipular o componente durante o teste

  // Configuração do ambiente de teste antes de cada teste
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessoComponent ] // Declara o componente a ser testado
    })
    .compileComponents(); // Compila os componentes para teste

    await TestBed.configureTestingModule({
      imports: [
        AppModule // Importa o módulo principal da aplicação
      ],
      providers: [
        ProcListService // Fornece o serviço de processos para o teste
      ]
    }).compileComponents(); // Compila os componentes para teste

    fixture = TestBed.createComponent(ProcessoComponent); // Cria uma instância do componente
    component = fixture.componentInstance; // Obtém a instância do componente
    fixture.detectChanges(); // Dispara a detecção de mudanças
  });

  // Teste: verifica se o componente ProcessoComponent é criado corretamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica se a instância existe (foi criada)
  });
});

/*
Explicação dos testes:
Este arquivo testa o componente de processos (ProcessoComponent). 
O teste principal garante que o componente é criado corretamente, ou seja, que a instância do componente existe após a inicialização. 
Isso assegura que a configuração básica do componente e suas dependências estão funcionando conforme esperado.
*/
