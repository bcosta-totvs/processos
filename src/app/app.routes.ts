import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessoComponent } from './features/processo/processo.component';

export const routes: Routes = [
   {
		// Rota raiz: redireciona para 'processos' ao acessar o caminho vazio
		path: '',
		redirectTo: 'processos',
		pathMatch: 'full'
	},
	{
		// Redireciona 'index.html' para 'processos' (útil para deploys que acessam diretamente o arquivo)
		path: 'index.html',
		redirectTo: 'processos',
		pathMatch: 'full'
	},
	{
		// Rota principal: exibe o componente ProcessoComponent ao acessar 'processos'
		path: 'processos',
		component: ProcessoComponent,
	},
];

// Declaração do módulo de rotas da aplicação
@NgModule({
	imports: [RouterModule.forRoot(routes)], // Importa e configura as rotas principais
	exports: [RouterModule] // Exporta o módulo de rotas para uso em outros módulos
})
export class AppRoutingModule { } // Classe responsável por disponibilizar as rotas na aplicação
