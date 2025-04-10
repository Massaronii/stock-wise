# Sistema de Gerenciamento de Estoque

## Visão Geral
Este sistema de gerenciamento de estoque foi desenvolvido utilizando os princípios de **Domain-Driven Design (DDD)** e **Clean Architecture** para garantir uma solução modular, escalável e de fácil manutenção. O sistema permite o rastreamento individual de produtos, controle de estoque, geração de alertas, análise de vendas e integração com fornecedores.

---

## 📌 **Entidades de Domínio**

1. **Produto**
   - Identificador único (ID)
   - Nome
   - Descrição
   - Tamanho
   - Cor
   - Valor de custo
   - Valor de venda
   - Categoria

2. **Estoque**
   - Identificador único (ID)
   - Produto associado (ID)
   - Quantidade atual
   - Quantidade mínima

3. **Vendas**
   - Identificador único (ID)
   - Produto vendido (ID)
   - Quantidade
   - Data da venda
   - Preço unitário
   - Total da venda

4. **Compras**
   - Identificador único (ID)
   - Produto adquirido (ID)
   - Quantidade
   - Data da compra
   - Custo unitário
   - Custo Total
   - Fornecedor associado

5. **Fornecedor**
   - Identificador único (ID)
   - Nome
   - Email
   - Celular
   - Endereço
   - Prazos médios de entrega

---

## ✅ **Requisitos Funcionais (RFs)**

### 📦 Gerenciamento de Produtos
- **RF01**: O sistema deve permitir o cadastro, edição e exclusão de produtos.
- **RF02**: Cada produto deve possuir um identificador único e atributos como nome, tamanho, cor e categoria.

### 📊 Controle de Estoque
- **RF03**: O sistema deve registrar a quantidade de cada produto em estoque.
- **RF04**: O usuário deve poder definir um limite mínimo de estoque para cada produto.
- **RF05**: O sistema deve monitorar o estoque e alertar o usuário quando um produto estiver abaixo do mínimo.

### 📈 Histórico e Relatórios
- **RF06**: O sistema deve permitir a consulta do histórico de vendas por período.
- **RF07**: Deve ser possível visualizar tendências de vendas e estoque.
- **RF08**: O sistema deve gerar relatórios de lucro por produto.

### 🔄 Gestão de Compras e Fornecedores
- **RF09**: O sistema deve permitir a criação e gerenciamento de ordens de compra.
- **RF10**: As ordens de compra podem ser geradas automaticamente com base nas quantidades mínimas de estoque.
- **RF11**: Deve ser possível integrar o sistema com fornecedores para atualização de prazos de entrega.

---

## ⚖️ **Regras de Negócio (RNs)**

- **RN01**: Nenhum produto pode ser vendido se a quantidade disponível no estoque for menor que a quantidade da venda.
- **RN02**: Um alerta deve ser enviado ao usuário sempre que um produto atingir o limite mínimo de estoque.
- **RN03**: O sistema deve calcular automaticamente o lucro de cada venda.
- **RN04**: Ordens de compra devem ser sugeridas automaticamente quando um produto atingir o estoque mínimo e houver tendência de alta nas vendas.
- **RN05**: As integrações com fornecedores devem garantir que os prazos de entrega estejam sempre atualizados.

---

## ⚙️ **Requisitos Não Funcionais (RNFs)**

- **RNF01**:  A senha do usuário deve ser criptografada.
- **RNF02**:  O usuário deve ser identificado por um JWT( JSON Web Token);

---
