function carregarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const tabela = document.getElementById("lista-carrinho");
    const totalDiv = document.getElementById("total");
  
    tabela.innerHTML = "";
    let total = 0;
  
    carrinho.forEach((item, index) => {
      const precoNum = parseFloat(item.preco.replace("R$", "").replace(".", "").replace(",", "."));
      const subtotal = precoNum * item.quantidade;
      total += subtotal;
  
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><img src="${item.imagem}" alt="${item.nome}" width="50"> ${item.nome}</td>
        <td>${item.preco}</td>
        <td>${item.quantidade}</td>
        <td>R$ ${subtotal.toFixed(2).replace(".", ",")}</td>
        <td><button onclick="removerItem(${index})">Remover</button></td>
      `;
      tabela.appendChild(tr);
    });
  
    totalDiv.textContent = `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
  }
  
  function removerItem(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    carregarCarrinho();
  }
  
  window.onload = carregarCarrinho;