import { bootstrapApplication } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Inicializa a aplicação Angular usando o AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  // Captura e exibe erros que possam ocorrer durante a inicialização
  .catch(err => console.error(err));