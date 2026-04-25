# Guia de Publicação no GitHub - Coopstar Landing Page

Este documento contém os comandos necessários para conectar seu ambiente local ao repositório remoto criado no GitHub.

## 1. Conectar ao Repositório Remoto

Execute os seguintes comandos no seu terminal (PowerShell ou Bash) dentro da pasta do projeto:

```powershell
# Adiciona o endereço do repositório remoto
git remote add origin https://github.com/Edson-Alves-Git/coopstar-landingpage.git

# Renomeia a branch principal para 'main' (padrão do GitHub)
git branch -M main

# Faz o push inicial dos arquivos
git push -u origin main
```

## 2. Verificações de Segurança Realizadas

Durante a preparação deste repositório, as seguintes ações foram tomadas:
- [x] **Varredura de Segredos**: Nenhuma chave de API ou senha hardcoded foi encontrada.
- [x] **Configuração de Variáveis de Ambiente**: Foi criado o arquivo `.env.example` para documentar as variáveis necessárias sem expor valores reais.
- [x] **Limpeza de Arquivos**: O arquivo `.gitignore` foi configurado para ignorar pastas de build (`dist/`), dependências (`node_modules/`), arquivos sensíveis (`.env`) e backups antigos (`Old/`).

## 3. Manutenção das Imagens

As imagens problemáticas foram substituídas por versões profissionais geradas por IA e armazenadas localmente em `public/images/`.

- Hero: `/images/hero-professional.png`
- Sobre: `/images/about-logistics.png`
- Serviços: `/images/service-motofrete.png`, `/images/service-corporate.png`, `/images/service-long-distance.png`

---
*Preparado por Antigravity AI*
