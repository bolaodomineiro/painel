
 // Extrair dígitos do resultado da loteria
export const extractLottoBalls = (resultados, jogoId, setSorteios) => {
    const getResults = resultados.find(result => result.jogo_id === jogoId);

    if (!getResults || !getResults.results) {
        console.error("Nenhum resultado encontrado para o jogoId:", jogoId);
        return;
    }

    // console.log("Resultados encontrados:", getResults);

    // Processa cada sorteio dentro de `results`
    const novosSorteios = getResults.results.map(result => {
        const extractedNumbers = result.awards.map(award => {
            const digits = String(award.num).split('');
            const dezenaLeft = digits.slice(0, 2).join('');
            const dezenaRight = digits.slice(-2).join('');
            return [dezenaLeft, dezenaRight];
        });
        return {
            balls: extractedNumbers.flat(), // Une todas as dezenas
            prizeDraw: result.prizeDraw
        };
    });
    // Adiciona ao estado sem sobrescrever o anterior
    setSorteios(prevState => [...prevState, ...novosSorteios]);
};