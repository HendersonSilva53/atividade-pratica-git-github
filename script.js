document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const mensagemDiv = document.getElementById('mensagem');

    // DESENVOLVEDOR A: CAPTURE O VALOR DO INPUT DE EMAIL AQUI
    const email = document.getElementById('email').value;


    // DESENVOLVEDOR B: CAPTURE O VALOR DA SENHA E FAÇA A VALIDAÇÃO DE TAMANHO AQUI
    const senhaInput = document.getElementById('senha');
    const senha = senhaInput.value;

    senhaInput.classList.remove('erro');
    if (senha.length < 6) {
        senhaInput.classList.add('erro');
        mensagemDiv.innerText = 'A senha deve ter pelo menos 6 caracteres.';
        mensagemDiv.style.color = 'red';
        return;
    }

    // LÓGICA DE EXIBIÇÃO
    // Ambos os alunos precisarão ajustar esta mensagem conforme suas respectivas tarefas
    mensagemDiv.innerText = `Usuário ${nome} com o e-mail ${email} cadastrado com sucesso!`;
    mensagemDiv.style.color = "green";
});