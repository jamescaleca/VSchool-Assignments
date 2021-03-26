class Player {
    constructor(name){
        this.name = name
        this.totalCoins = 0;
        this.status = "small"
        this.hasStar = false;
        if (this.hasStar === true) {
            console.log("You got a star!")
        }
    }
    gameActive = true
    setName(namePicked){
        this.name = namePicked
    }
    gotHit(){
        if (this.hasStar === false) {
            this.status = "Dead"
            this.gameActive = false
            console.log("You died!")
            return
        } else if (this.hasStar === true) {
            this.status = "small"
            this.hasStar = false
        }
    }
    gotPowerup(){
        this.hasStar = true
        this.status = "Powered Up!"
    }
    
    addCoin(){
        this.totalCoins += 1
    }
    print(){
        console.log(`Name: ${this.name}, \nStatus: ${this.status}, \nTotal Coins: ${this.totalCoins}\n`)
    }
    setInterval = () => {
        const getRandomArbitrary = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        this.print()
        while (this.gameActive === true) {
            let gameChance = getRandomArbitrary(0, 2)
            // console.log(gameChance)
            if (gameChance === 0) {
                this.gotHit()
                this.print()
            }
            if (gameChance === 1) {
                this.gotPowerup()
                this.print()
            }
            if (gameChance === 2) {
                this.addCoin()
                this.print()
            }
        }
    }
}

const mario = new Player("Mario")

mario.setInterval()