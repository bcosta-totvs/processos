import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

// Bloco de testes para o componente AppComponent
describe(AppComponent.name, () =>{
    let fixture: ComponentFixture<AppComponent>; // Utilitário para manipular o componente durante o teste
    let component: AppComponent; // Instância do componente a ser testado

    // Configuração do ambiente de teste antes de cada teste
    beforeEach(async () => {
        await TestBed.configureTestingModule({
          imports: [
            AppModule // Importa o módulo principal da aplicação
             // Importa módulo de rotas para ambiente de teste
          ],
          declarations: [AppComponent] // Declara o componente a ser testado
        }).compileComponents(); // Compila os componentes para teste
    
        fixture = TestBed.createComponent(AppComponent); // Cria uma instância do componente
        fixture.detectChanges() // Dispara a detecção de mudanças
        component = fixture.componentInstance; // Obtém a instância do componente
    });
    
    // Teste: verifica se o componente AppComponent é criado corretamente
    it("Should create App Component When inicialize", () => {
        expect(component).toBeTruthy(); // Verifica se a instância existe (foi criada)
    });

    // Teste: verifica se o método getMenu cria dois itens no menu 
    it("Should create PoMenuItems When getMenu", () => {
        component.getMenu(); // Executa o método getMenu

        expect(component.poMenuItems).toHaveSize(2); // Verifica se o array de itens do menu tem tamanho 2
    });
});

/*
Explicação dos testes:
Este arquivo testa o componente principal da aplicação (AppComponent). O primeiro teste garante que o componente é criado corretamente. O segundo teste verifica se, ao executar o método getMenu, são criados dois itens no menu quando o ERP é Protheus. Isso assegura que a lógica de inicialização e configuração do menu está funcionando conforme esperado.
*/