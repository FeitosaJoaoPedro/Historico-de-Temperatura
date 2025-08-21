# 🌦️ Histórico de Temperatura

A ideia deste projeto é ajudar os viajantes que querem saber o **histórico de clima de um local em uma data específica**.  
Com ele, o usuário pode planejar melhor suas viagens, entendendo como foi o clima no ano anterior.

---

## 🚀 Tecnologias Utilizadas

### Framework

- **Next.js**   
- **React** 

### Bibliotecas

- **MUI (Material UI)**  
- **Axios** 
- **Day.js**

### APIs

- **https://countriesnow.space/**  - Para renderizar todos os países, estados e cidades no componente select.
- **https://nominatim.openstreetmap.org/** - Para obter as coordenadas do local selecionado.
- **https://open-meteo.com/** - Para obter o histórico de temperatura.

---

## 📂 Estrutura do Projeto

- `app/` → páginas e rotas principais  
- `components/` → componentes reutilizáveis (botões, inputs, textos, etc.)  
- `features/` → funcionalidades específicas do sistema  
- `services/` → funções para integração com APIs (ex.: busca de clima, cidades)  
- `public/` → imagens e ícones utilizados no app
- `translation/` → tradução de todos os países para o português

---

## ⚙️ Como Rodar o Projeto

### 1. Clone o repositório
Digite no terminal o seguinte comando para clonar o projeto:
```bash
git clone https://github.com/FeitosaJoaoPedro/Historico-de-Temperatura.git  
```
### 2. Acesse a pasta do projeto
Entre na pasta que acabou de ser clonada:
```bash
cd Historico-de-Temperatura 
```
### 3. Instale as dependências
Baixe todas as bibliotecas necessárias para o projeto rodar:
```bash
npm install
```
Caso use **yarn**, pode rodar:
```bash
yarn install
```
### 4. Inicie o servidor de desenvolvimento
Agora, execute o comando abaixo para rodar o projeto:
```bash
npm run dev
```
Depois, abra o navegador e acesse:
[http://localhost:3000](http://localhost:3000) para visualizar a aplicação.
