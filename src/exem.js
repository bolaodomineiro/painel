
// collection - Resultados
[
    {
        created: new Date("2025-02-20T15:19:03.000Z"), // data de criacao
        jogo_id: 1,// relaçao com o bolão,
        results: [    
            {
                created: new Date("2025-02-20T15:19:03.000Z"), // data do sorteio
                prizeDraw: 1, // usar esse campo para saber o numero do sorteio e validar as regras do primeiro sorteio
                awards: [ // array de premios
                    {isAward: 1, num: 23689}, // isAward diz a ordem do premios, num diz o numero do premio
                    {isAward: 2, num: 87564},
                    {isAward: 3, num: 17569},
                    {isAward: 4, num: 97964},
                    {isAward: 5, num: 37534}, 
                ]   
            },
            {
                created: new Date("2025-02-20T15:19:03.000Z"), // data do sorteio
                prizeDraw: 2, 
                awards: [
                    {isAward: 1, num: 23689}, 
                    {isAward: 2, num: 87564},
                    {isAward: 3, num: 17569},
                    {isAward: 4, num: 97964},
                    {isAward: 5, num: 37534}, 
                ]   
            },
            // .........................
            // ...}...............
        ]
    }
]

// collection - Rules | Regras
[
    {
        created: new Date("2025-02-20T15:19:03.000Z"),
        jogo_id: 1, // relaçao com o bolão
        rules: [ // array de regras
            {prizeDraw: null, pts: 10, money: 1000, winner: false}, 
            {prizeDraw: null, pts: 9, money: 500, winner: false},
            {prizeDraw: null, pts: 8, money: 300, winner: false},
            {prizeDraw: 1, pts: 6, money: 200, winner: true}, // prizeDraw usado para  condiçao da regra do primeiro sorteio 
            {prizeDraw: 1, pts: 5, money: 100, winner: true}, // prizeDraw usado para  condiçao da regra do primeiro sorteio 
        ]
    }
]
