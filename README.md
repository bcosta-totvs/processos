# Processo

Aplicação Angular para gerenciamento de processos, utilizando PO-UI para componentes visuais e integração com Protheus.

## Requisitos

- Node.js >= 18.x
- npm >= 9.x
- Angular CLI >= 19.2.17

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/bcosta-totvs/processos
npm install
```

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
ng serve
```

Acesse [http://localhost:4200](http://localhost:4200) no navegador.

## Build

Para gerar o build de produção:

```bash
ng build
```

Os artefatos serão gerados na pasta `dist/`.

## Testes

### Unitários

Execute os testes unitários com Karma:

```bash
ng test
```

### End-to-End

Para testes e2e (caso configurado):

```bash
ng e2e
```

## Estrutura do Projeto

```
src/
  app/                # Código principal da aplicação
  assets/             # Arquivos estáticos
  styles.css          # Estilos globais
  index.html          # HTML principal
```

## Contribuição

1. Fork este repositório
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob licença MIT.

## Recursos Adicionais

- [Documentação Angular CLI](https://angular.dev/tools/cli)
- [PO-UI](https://po-ui.io/documentation/po-dialog?view=doc)