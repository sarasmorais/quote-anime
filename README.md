# 🎌 Quote Anime

Um gerador simples de frases de animes, desenvolvido com HTML, CSS e JavaScript. Ideal para fãs de anime que desejam se inspirar com citações icônicas de seus personagens favoritos.

🔗 Acesse a aplicação: [sarasmorais.github.io/quote-anime](https://sarasmorais.github.io/quote-anime/)

---

## 🎯 Objetivo da Aplicação

O objetivo da aplicação **Quote Anime** é proporcionar aos fãs de animes uma maneira simples e divertida de visualizar citações inspiradoras, emocionantes ou memoráveis ditas por personagens icônicos.  
A aplicação consome uma API pública para exibir frases aleatórias a cada clique, incentivando o usuário a explorar diferentes animes e personagens.

---

## ✨ Funcionalidades

- Exibe frases aleatórias de personagens de anime.
- Interface limpa e responsiva.
- Atualização da frase ao clicar em um botão.

---

## 🛠️ Tecnologias Utilizadas

- HTML
- CSS
- JavaScript
- [Animechan API](https://animechan.xyz) – Fornece citações aleatórias de animes.

---

## 🔌 API Utilizada

**Animechan API**

- 🌐 Site: [https://animechan.xyz](https://animechan.xyz)
- 📘 Documentação: [https://animechan.xyz/docs](https://animechan.xyz/docs)

### Endpoint Principal

```http
GET https://animechan.xyz/api/random
```

**Resposta Exemplo:**
```json
{
  "anime": "Naruto",
  "character": "Kakashi Hatake",
  "quote": "The next generation will always surpass the previous one."
}
```

---

## 🚀 Como Executar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/sarasmorais/quote-anime.git
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd quote-anime
   ```

3. Abra o arquivo `index.html` em seu navegador preferido.

---

## 📁 Estrutura do Projeto

- `index.html` – Estrutura principal da página.
- `style.css` – Estilos e layout da aplicação.
- `script.js` – Lógica para consumir a API e exibir frases.

---

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais informações.

---

## 🙋‍♀️ Autora

- Desenvolvido por [Sara Morais](https://github.com/sarasmorais).
- Orientado por Luan Oliveira
