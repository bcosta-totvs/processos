import { RouterModule } from '@angular/router';
import { AppRoutingModule, routes } from './app.routes';
import { DEFAULT_CURRENCY_CODE, importProvidersFrom, LOCALE_ID, NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { PoModule } from '@po-ui/ng-components';
import { registerLocaleData } from '@angular/common';
import localePtBr from '@angular/common/locales/pt'
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { ProtheusLibCoreModule } from '@totvs/protheus-lib-core';
import { ProcessoComponent } from './features/processo/processo.component';

registerLocaleData(localePtBr)


// Decorador que define o módulo principal da aplicação Angular
@NgModule({
  // Declaração dos componentes que pertencem a este módulo
  declarations: [
    AppComponent, // Componente raiz da aplicação
    ProcessoComponent
  ],
  
  // Importação de módulos necessários para funcionamento da aplicação
  imports: [
    BrowserModule, // Necessário para aplicações web
    AppRoutingModule, // Módulo de rotas da aplicação
    PoModule, // Módulo de componentes PO UI
    FormsModule, // Suporte a formulários
    RouterModule.forRoot([]), // Configuração de rotas (vazio aqui, pois AppRoutingModule já gerencia)
    PoTemplatesModule, // Módulo de templates PO UI
    ProtheusLibCoreModule, // Módulo de integração com Protheus
  ],

  // Provedores de serviços e configurações globais
  providers: [
    provideHttpClient(withInterceptorsFromDi()), // Configura o HttpClient com interceptadores
    { provide: LOCALE_ID, useValue: 'pt-BR' }, // Define o locale padrão para português do Brasil
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }, // Define a moeda padrão como Real
    {
      provide: 'ICONS_DICTIONARY', // Dicionário de ícones para PO UI
      useValue: 'PoIconDictionary'
    },
  ],
  // Define o componente inicial da aplicação
  bootstrap: [AppComponent] 
})

// Classe principal do módulo da aplicação
export class AppModule { }
