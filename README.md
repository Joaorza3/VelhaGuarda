LAR VELHA GUARDA

> CLONE/FORK

FORK - FAÇA O FORK DO PROJETO
EXEMPLO:  https://www.youtube.com/watch?v=l1rwvDvD1og

CLONE O PROJETO 
git clone [link]

ABRA O PROJETO NO VSCODE E REALIZE A INSTALAÇÃO DA DEPENDENCIA NPM Ou Yarn 

npm install 
ou
Yarn install 

INICIE O PROJETO COM:

expo start
ou
react-native run-android

> USANDO O GIT 

GIT DOC: https://docs.github.com/pt

Crie uma nova branch local faça as alterações, depois de concluido sinalizar no trello em seguida será feito a reunião com todos os menbros para ver o que foi feito, aprovado solicitar o merge... exclua a branch do remote -> doc do git.


> SOBRE O PROJETO

- PROJETO ESTÁ SENDO DESENVOLVIDO POR ALUNOS DA UNIRB, A IDEIA É DESENVOLVER UM APLICATIVO INTERATIVO PARA QUE OS IDOSOS POSSA USAR DURANTE A PANDEMIA, O APLICATIVO CONTA COM UMA SÉRIE DE INTERATIVIDADE.

> FACULDADE

- UNIVERSIDADE REGIONAL DA BAHIA


> MEMBROS

- VANESSA LOPES | 4ª SEMESTRE
- MICHAEL RIBEIRO | 5ª SEMESTRE

> PROFESSOR ORIENTADOR

- IGOR PIMENTA 

> USUÁRIO

- REALIZA CADASTRO - É SOLICITADO ALGUNS DADOS PARA CADASTRO NO APLICATIVO, DEPOIS QUE O USUÁRIO FORNECER AS INFORMAÇÕES É SÓ CLICAR EM ENVIAR, TODOS OS CAMPOS SOLICITADOS SÃO CAMPPOS OBRIGATÓRIOS.

- REALIZA LOGIN - USUÁRIO COLOCADA SEU NOME DE USUÁRIO E SENHA CLICA NO BOTÃO E VAI PARA A TELA HOME/INICIO.

- SOLICITA NOVA SENHA - USUÁRIO COLOCA EMAIL CADASTRADO NA PLATAFORMA OU OUTRO EMAIL E ENVIA A SOLICITAÇÃO, UM EMAIL É ENVIDO PARA ELE COM AS ORIETAÇÕES DE RECUPERAÇÃO DE SENHA.

- SOLICITA MEDICAMENTO - USUÁRIO SOLICITA UM NOVO MEDICAMENTO OU VARIOS MEDICAMENTOS, ADMINISTRADOR/FORNECEDOR LEVA O MEDICAMENTO.

- SOLICITA ATENDIMENTO - O USUÁRIO VERÁ UM CATALOGO DE PROFISSIONAL DA SAUDE DISPONIVEL E SEUS HORARIOS DE ATENDIMETO, ELE SOLICITA UMA VISITA EM SUA RESIDENCIA.

> ADMININSTRADOR 

- RECEBE A SOLICITAÇÃO - DEPOIS QUE O USUÁRIO ENVIA A SOLICITAÇÃO DE MEDICAMENTO O FORNECEDOR OLHARÁ EM SEU ESTOQUE DE PRODUTOS SE TEM ESSE MEDICAMENTO DISPONIVEL SE TIVER ELE IRÁ ENVIAR PARA A RESIDENCIA DO USUÁRIO SE NÃO TIVER ELE RETORNA O STATUS DA SOLICITAÇÃO COMO [SEM ESTOQUE].

- PUBLICA NOTICIAS/NOVOS MEDICAMENTOS/ - ELE CADASTRARÁ OS MEDICAMENTOS E AS NOTICIAS.

- ENVIA MEDICAMENTO - AQUI É NOTIFICADO AO USUÁRIO O TEMPO ESTIMATIVO DE ENTREGA, COM A DATA E O HORARIO COMERCIAL. 

> ATORES

- USUARIOS / ADMINISTRADOR

> METODOLOGIA | LINGUAGEM

- METODOLOGIA KANBAN

- LINGUAGEM JAVASCRIPT | BIBLIOTECA REACT NATIVE | LIBS - ALGUMAS.

> BANCO DE DADOS

- MYSQL

> PROJETO

- GITHUB

> INFORMAÇÃO DO PROJETO

10/04/21 - FEITO O PROTOTIPO NO FIGMA/ ALGUMAS TELAS.
10/04/21 - PROJETO COLOCADO NO GITHUB.
10/04/21 - ESTRUTURA DO PROJETO CRIADA.
10/04/21 - MODELO CONCEITUAL E LOGICO CRIAD0.
10/04/21 - TRELLO COM OS QUADROS

> [CODIGO]

App.js - AQUI É CHAMADO AS ROTAS DO APLICATIVOS

[FOLDER/ROUTES]

src/routes auth.routes.js - AQUI SÃO AS ROTAS QUANDO NÃO TEM UM USUÁRIO LOGADO NO APLICATIVO 

auth.js - QUANDO O USUÁRIO É LOGADO NO APLICATIVO ELE NAVEGARÁ PELAS ROTAS QUE TA NESSE ARQUIVO

[FOLDER/PAGES]

- Todas as Paginas ficará armazenada nesse arquivo.

[FOLDER/COMPONENTS]

- TODOS OS COMPONETES SERÁ ARMAZENADO NESSE AQUIVO

[FOLDER/SERVICES]

BANCO DE DADOS

> [PADRÃO]

- TODAS AS PAGINAS TEM UM ARQUIVO CHAMADO INDEX.JS QUE TERÁ TODO O CÓDIGO E O STYLES.JS É RESPONSÁVEL PELA ESTILIZAÇÃO DO PROJETO.
TODAS AS OUTRAS PAGINAS SEGUIRÁ ESSE MESMO PADRÃO...

> [ASSETS]

- TODAS AS FOTOS QUE SERÁ USADA NO PROJETO FICARÁ NESSA PASTA 


> [NAVEGAÇÕES]

- STACK É A NAVEGAÇÃO PAI 
- TABS SÃO AS NAVEGAÇÕES FILHAS 

SQLLITE
https://sqlitebrowser.org/dl/

