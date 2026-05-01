describe('template spec', () => {
  const selectorsList = 
  {
    menuPessoas: ':nth-child(4) > .block',
    menuCategorias: ':nth-child(3) > .block',
    menuTransacoes: ':nth-child(2) > .block',
    menuDashboard: ':nth-child(1) > .block',
    menuRelatorios: ':nth-child(5) > .block',
  }
  
  it('AdicionarPessoa_specE2E', () => {
    cy.visit('http://localhost:5173/')
    cy.get(selectorsList.menuPessoas).click() // Clica no menu "Pessoas"
    cy.get('[type="button"]').click() // Clica no botão "Adicionar Pessoa"
    cy.get('[name="nome"]').type('NomeTeste') // Preenche o campo "Nome" com "NomeTeste"
    cy.get('[name="dataNascimento"]').type('2000-03-06') // Preenche o campo "Data de Nascimento" com "2000-03-06"
    cy.get('.justify-end > .bg-primary').click() // Clica no botão "Salvar"
  })

  it('AdicionarCategoria_specE2E', () => {
    cy.visit('http://localhost:5173/')
    cy.get(selectorsList.menuCategorias).click() // Clica no menu "Categorias"
    cy.get('.inline-flex').click() // Clica no botão "Adicionar Categoria"
    cy.get('[name="descricao"]').type('CategoriaTeste') // Preenche o campo "Descrição" com "CategoriaTeste"
    cy.get('[type="submit"]').click() // Clica no botão "Salvar"
  })

  it.only('AdicionarTransacao_specE2E', () => {
    cy.visit('http://localhost:5173/')
    cy.get(selectorsList.menuTransacoes).click() // Clica no menu "Transações"
    cy.get('.bg-primary').click() // Clica no botão "Adicionar Transação"
    cy.get('[name="descricao"]').type('TransacaoTeste') // Preenche o campo "Descrição" com "TransacaoTeste"
    cy.get('[name="valor"]').type('100') // Preenche o campo "Valor" com "100"
    cy.get('[name="data"]').type('2024-06-01') // Preenche o campo "Data" com "2024-06-01"
    cy.get('#categoria-select').type('CategoriaTeste') // Seleciona a categoria "CategoriaTeste"
    cy.get('#categoria-select-options > :nth-child(3)').click() // Clica na opção da categoria selecionada
    cy.get('.mt-1').should('be.visible') // Clica no campo de seleção de pessoa para abrir as opções
    cy.get('#pessoa-select').type('NomeTeste') // Seleciona a pessoa "NomeTeste"
    cy.get('#pessoa-select-options > :nth-child(3)').click() // Clica na opção da pessoa selecionada
    cy.get('.justify-end > .bg-primary').click() // Clica no botão "Salvar"
  })
})
