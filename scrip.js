function mostrarInfo(opcao) {
    const caixaMensagem = document.getElementById('mensagem-interativa');
    caixaMensagem.style.display = 'block';

    if (opcao === 'lei') {
        caixaMensagem.innerHTML = "<strong>Lei Maria da Penha (Lei nº 11.340/2006):</strong> É a principal legislação no Brasil para prevenir e combater a violência doméstica e familiar contra a mulher.";
    } else if (opcao === 'denuncia') {
        caixaMensagem.innerHTML = "<strong>Como Denunciar:</strong> Ligue para o <strong>180</strong> (Central de Atendimento à Mulher). A ligação é gratuita, anônima e funciona 24h em todo o país.";
    } else if (opcao === 'apoio') {
        caixaMensagem.innerHTML = "<strong>Rede de Apoio:</strong> Procure a DEAM (Delegacia Especializada de Atendimento à Mulher), CRAS/CREAS ou centros de acolhimento locais.";
    }
}
