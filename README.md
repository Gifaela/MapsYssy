## Objetivo do Sistema.
<p>O projeto é um teste proposto pela empresa Yssy com o intuito de identificar endereços no map utilizando a API do google.</p>

## Requisitos Server
<p>Visual Studio Code ou similar para visualização: <a href="https://code.visualstudio.com/">Visual Studio Code.</a></p>

<h3>Instalação do json-server para simular um Server local.</h3>

````bash
npm install -g json-server
````

<p>Utilização do Server.</p> 

<ol>
<li>Abrir o localarquivopelocmdou shell e rodar o comando:( example: cd C:\Users\Giu\Downloads\google-maps-marker-from-json-Giulia\google-maps-marker-from\server).</li>
  
````bash
json-server --watch db.json
````

<li>Parar o Server:</li>
<p>Ctrl + C </p>
</ol>

<h3>Rotas do Server: </h3>

<table border="1">
    <tr>
        <td>GET</td>
        <td>/enderecos</td>
        <td>Buscar todos os enderecos</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/enderecos/1</td>
        <td>Buscar todos os enderecos pelo o id</td>
    </tr>
</table>

## Documentação de apoio para processo de criação e requisição de API. 
<p>Processo para Requisição URL.</p>
<ul>
<li><a href="https://zetcode.com/javascript/jsonurl/">Zetcode</a></li>
<li><a href="https://www.educative.io/answers/how-to-read-a-json-file-from-a-url-in-javascript">Educative</a><//li>
</ul>

<p>Este projeto pretendeu seguir as boas práticas na programação JS.</p>
<ul>
<li><a href="https://www.devmedia.com.br/boas-praticas-de-programacao-em-javascript/34215">Devmedia</a></li>
</ul>
<p>Por orientação foi seguido o método para melhor funcionalidade e adaptações para o projeto obter o resultado desejado.</p>
<ul>
<li><a href="https://uxdesign.blog.br/a-origem-do-keep-it-simple-stupid-kiss-b24085dc1327">Uxdesign</a></li>
</ul>

<p>Criação da API foi utilizada a documentação do Google.</p>
<ul>
<li><a href="https://developers.google.com/maps/premium/apikey/maps-javascript-apikey?hl=pt-br#:~:text=Acesse%20a%20p%C3%A1gina%20Plataforma%20Google%20Maps%20%3E%20Credenciais.&text=Na%20p%C3%A1gina%20Credenciais%2C%20clique%20em,Clique%20em%20Fechar.">Chave API Google</a></li>
</ul>

