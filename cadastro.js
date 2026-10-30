    function funcaoCadastrarCliente() {
        const nome = document.getElementById('nome').value
        const email = document.getElementById('email').value
        const telefone = document.getElementById('telefone').value

        if (!nome || !email || !telefone) {
            alert('Por favor, preencha todos os campos.')
            return
        }

        // Cria uma variável com os dados do cliente.
        const novoCliente = { nome,email,telefone}

        let listarCliente = JSON.parse(localStorage.getItem('clientes')) ||[]

        // Adiciona um novo cliente na lista.
        listarCliente.push(novoCliente)

        // Salva no localStorage
        localStorage.setItem('clientes', JSON.stringify(listarCliente))

        // Mensagem do navegador confirmando salvamento.
        alert('Cliente cadastrado com sucesso!')

        // Limpo o formulário.
        document.getElementById('formulario-cadastro').reset()

    }