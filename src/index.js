/* Seção 33, aula 409. O objetivo do código é criar uma página simples, com um header, uma barra amarela com um título dentro,
e duas linhas de texto depois. Primeiro é feita a sintaxe básica de import abaixo e a de render. Até agora
também foi importado esse elemento root, que fica no arquivo html, pelo que entendi, serve para operar o jsx. 
Importante ressaltar que os arquivos estão salvos com jsx e não js, pois é considerado que assim será mais
fácil reconhecer que não é só javascript, mas JS com React, no entanto, não é obrigatório e o arquivo pode
ser salvo como js. Nesse código, o estilo foi salvo em styles.css, na pasta components foram salvos os componentes
da página como o header, o footer e outros. A lógica é criar cada elemento da página em arquivos separados,
usar o comando export ao final do arquivo, juntar todos os elementos,através do import no App.jsx e importar
esse APP para esse index.js. Para rodar o arquivo é preciso ir no terminal e comandar nom start e ele
irá gerar o número do localhost e até abrir o navegador. 
Importante, para salvar uma cópia no pen drive, vou excluir o pacote de módulos que está pesando muito o arquivo
portanto, se quiser ve ro site novamente, tem que reinsta-lar*/

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

