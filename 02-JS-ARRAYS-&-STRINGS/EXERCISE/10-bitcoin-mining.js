function solve(mined) {
    // 1 BITCOIN = 11949.16 LV
    // 1 g of gold = 67.51 lv
    // 1 BITCOIN = 11949.16 / 67.51 GOLD => 1 BITCOIN = 176.99837 GOLD

    const bitcoin_price = 11949.16
    const gold_price = 67.51

    let mined_gold = 0
    let gold_in_lv = 0
    let total_bitcoins = 0
    let counter_days = 0
    let first_bitcoin = 0

    for (let i = 0; i < mined.length; i++) {
        counter_days++;
        if (counter_days % 3 === 0) {
            mined[i] = mined[i] * 0.7
        }

        mined_gold += mined[i]
        gold_in_lv += mined_gold * gold_price
        mined_gold = 0

        if (gold_in_lv >= bitcoin_price) {

            if (first_bitcoin === 0){
                first_bitcoin = i + 1;
            }

            while (gold_in_lv >= bitcoin_price){
                total_bitcoins++;
                gold_in_lv -= bitcoin_price;
            }

        }
    }

    console.log(`Bought bitcoins: ${total_bitcoins}`)
    if (first_bitcoin > 0){
        console.log(`Day of the first purchased bitcoin: ${first_bitcoin}`)
    }
    console.log(`Left money: ${gold_in_lv.toFixed(2)} lv.`)
}

// solve([100, 200, 300])
// solve([50, 100])
solve([3124.15, 504.212, 2511.124])