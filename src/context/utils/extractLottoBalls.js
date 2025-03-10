// Extrair dígitos do resultado da loteria
export const extractLottoBalls = async (jogoId, resultados,  setSorteios) => {

    const getResults = await resultados.find(result => result.jogo_id === jogoId);

    if (!getResults || !getResults.results) {
        console.error("Nenhum resultado encontrado para o jogoId:", jogoId);
        return;
    }

    console.log("Resultados encontrados: em extractLottoBalls", getResults);

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
            prizeDraw: result.prizeDraw,
            drawDate: result.drawDate,
            extraction: result.extraction
        };
    });
    console.log("Novos sorteios extraídos: em extractLottoBalls", novosSorteios);
    // Adiciona ao estado sem sobrescrever o anterior
    setSorteios(prevState => [...prevState, ...novosSorteios]);
}; 