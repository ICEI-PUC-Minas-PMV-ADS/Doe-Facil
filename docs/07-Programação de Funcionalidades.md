# Programação de Funcionalidades

Implementação do sistema descrita por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos com os artefatos criados (código fonte), deverão apresentadas as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

## Funcionalidade 01: Realizar Cadastro (RF-001)

Essa funcionalidade permite que o usuário realize o cadastro e acesse o aplicativo Doe Fácil.

| ID | Descrição do Requisito | Artefato(s) |
|----|-------------------------|--------------|
| RF-001 | O aplicativo deve permitir que o usuário realize o cadastro | - |

`Responsável`: Gabriel

__Instruções de Acesso__
1. Acesse o aplicativo [Doe fácil]()
2. Clique em "Ainda não tem conta? Clique aqui"
3. Forneça seus dados para o cadastro
4. Clique em "Cadastrar"

[Image]()

## Funcionalidade 02: Efetuar Login (RF-002)

Essa funcionalidade permite que o usuário já cadastrado acesse o aplicativo Doe Fácil, fornecendo sua credenciais de acesso, como o e-mail e senha.

| ID | Descrição do Requisito | Artefato(s) |
|----|-----------------------|----------------|
| RF-002 | O aplicativo deve permitir que os usuários efetuem o processo de login | [LoginPage.js](../src/doeFacil/src/pages/LoginPage.js) / [Input.js](../src/doeFacil/src/components/Input.js) |

`Responsável`: Milleny

__Instruções de Acesso__
1. Acesse o aplicativo [Doe fácil]()
2. Forneça suas credenciais de acesso
3. Clique no botão "Login"

[Image]()

## Funcionalidade 03: Pessoas que precisam de doação (RF-005)

Essa funcionalidade permite que o usuário logado pesquise por pessoas que precisam de doações e tenha acesso à algumas informações para poder ajudar.

| ID | Descrição do Requisito | Artefato(s) |
|----|------------------------|----------------|
| RF-005 | O aplicativo deve permitir que os usuários insiram os nomes das pessoas que necessitam de doações | [DonationPointsPage.js](../src/doeFacil/src/pages/DonationPointsPage.js) / [DonorDetails.js](../src/doeFacil/src/pages/DonorDetails.js) / [LocalDonorsListPage.js](../src/doeFacil/src/pages/LocalDonorsListPage.js) |

`Responsável`: Joice

__Instruções de Acesso__
1. Acesse o aplicativo [Doe fácil]()
2. Forneça suas credenciais de acesso
3. Clique no botão "Login"
4. Na página inicial, clique no ícone map (segundo ícone, da esquerda para a direita)
5. Selecione o "Tipo de Busca" como "Pessoas que precisam de doação".
6. Selecione o Estado e a Cidade
7. Clique em "Buscar"

[Image]()

## Funcionalidade 04: Informações sobre o procedimento de doação de sangue (RF-006)

Essa funcionalidade permite que o usuário logado encontre informações sobre o procedimento de doação de sangue.

| ID | Descrição do Requisito | Artefato(s) |
|------|---------------------|-------------|
| RF-003 | O aplicativo deve permitir o acesso a informações detalhadas sobre o procedimento de doação | [HomePage.js](../src/doeFacil/src/pages/HomePage.js) / [InfoBeneficio.js](../src/doeFacil/src/pages/InfoBeneficio.js) / [InfoComoDoar.js](../src/doeFacil/src/pages/InfoComoDoar.js) / [InfoOndeDoar.js](../src/doeFacil/src/pages/InfoOndeDoar.js) / [InfoPreparar.js](../src/doeFacil/src/pages/InfoPreparar.js) / [InfoRequisitos.js](../src/doeFacil/src/pages/InfoRequisitos.js) |

`Responsável`: Iane

__Instruções de Acesso__
1. Acesse o aplicativo [Doe fácil]()
2. Forneça suas credenciais de acesso
3. Clique no botão "Login"
4. Na página inicial, clique em "Informativo"
5. Clique em algum card para saber mais

[Image]()

## Funcionalidade 05: Acessar locais de doação de sangue (RF-003)

Essa funcionalidade permite que o usuário logado pesquise por locais de doação próximos à ele.

| ID | Descrição do Requisito | Artefato(s) |
|------|------------------------|----------------|
| RF-003 | O aplicativo deve permitir a exibição de uma lista de locais de doação próximos ao usuário | [DonationPointsPage.js](../src/doeFacil/src/pages/DonationPointsPage.js) |

`Responsável`: Joice e Milleny

__Instruções de Acesso__
1. Acesse o aplicativo [Doe fácil]()
2. Forneça suas credenciais de acesso
3. Clique no botão "Login"
4. Na página inicial, clique no ícone map (segundo ícone, da esquerda para a direita)
5. Selecione o "Tipo de Busca" como "Locais que precisam de doação".
6. Selecione o Estado e a Cidade
7. Clique em "Buscar"

[Image]()
