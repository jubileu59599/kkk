function adicionarAoCarrinho(nome, preco, imagem) {
    const produto = { nome, preco, imagem, quantidade: 1 };
  
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
    const existente = carrinho.find(item => item.nome === nome);
  
    if (existente) {
      existente.quantidade += 1;
    } else {
      carrinho.push(produto);
    }
  
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  
    alert(`"${nome}" foi adicionado ao carrinho!`);
  }
  