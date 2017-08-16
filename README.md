# Itelios frontend Challenge (Bruno Araujo)

[Visualizar online](http://teletilica.com.br/itelios-frontend-challenge/)

---

## Tempo do teste

Início: 11:00 | Término: 20:45 | Total: **9h45m**  

---

## Considerações

- Eu costumo trabalhar com bibliotecas para agilizar o desenvolvimento, principalmente Bootstrap, mas por ser um teste considerei melhor fazer toda a responsividade com CSS.


- Eu costumo trabalhar com múltiplos arquivos durante o desenvolvimento, como fiz com o SASS e os arquivos JS, mas uso eles compilados na hora de servir, sem precisar rodar o sass ou qualquer outro serviço.


- Eu usei o *pattern* **BEM** na estrutura do CSS.


- Eu comentei através dos commits o que foi feito, mas deixo aqui no README um pouco mais detalhado.


### O que foi feito


- Criei o **ajax.js** para ler os arquivos json como se fossem dados vindo de uma api.


- Como os produtos precisavam ser elementos gerados proceduralmente eu criei uma classe com o componente produto no arquivo **product-component.js** para gerar quando eu precisasse, só setando os parametros.


- Criei o arquivo visited.json para usar o produto visitado sem ser *hard coded*.


- Usei o a ferramenta online [realfavicongenerator.net](http://realfavicongenerator.net) para auxiliar na criação dos favicons considerando todas plataformas.


- O arquivo **recommendations.js** é onde tratar os objetos e os dados do json e popula o arquivo html, criei algumas outras funções para auxiliar a interação e a responsividade do carrossel de produtos, somente o que não poderia ser feito com css.

- O restante do trabalho foi agregar os estilos de forma responsiva. Eu costumo criar dois arquivos de base para usar nos outros SASS que são o **_variables.scss** e o  **_mixins.scss**, e reseto alguns elementos, os que são necessários, com o **_reset.scss**.
