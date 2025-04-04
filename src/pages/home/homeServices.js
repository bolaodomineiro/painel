

export const verificarTimedrawDate = async (drawDate) => {
    const agora = new Date(); // Obtém a data e hora atual
    const dataEvento = new Date(drawDate?.seconds * 1000); // Converte a string do banco para Date 
    // Subtrai 2 horas da data do evento
    const duasHorasAntes = new Date(dataEvento.getTime() - 2 * 60 * 60 * 1000);

    console.log(agora);
    console.log(duasHorasAntes);

     // Verifica se o horário atual é menor que 2 horas antes do evento
    if (agora > duasHorasAntes) return true
    return false
}
