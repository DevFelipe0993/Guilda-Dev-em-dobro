// let stones = ['stone1', 'stone2', 'stone3']

// let stoneExtraidas = stones.splice(0)

// console.log(stoneExtraidas);

// console.log(stones);


let stones = {
    obj: 'Stones',
    remover: function () {
        console.log(`As ${this.obj} foram removidas!`)
    }
}

stones.remover()