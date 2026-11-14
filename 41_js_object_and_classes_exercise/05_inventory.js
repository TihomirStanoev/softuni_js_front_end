function solve(heroArr) {
    class Hero {
        constructor(heroName, heroLevel) {
            this.heroName = heroName;
            this.heroLevel = heroLevel;
            this.items = [];
        }

        addItem(item) {
            this.items.push(item);
        }

        printInfo() {
            console.log(`Hero: ${this.heroName}`);
            console.log(`level => ${this.heroLevel}`);
            console.log(`items => ${this.items.join(", ")}`);
        }
    }


    function createHero(heroInfo) {
        const [name, level, items] = heroInfo.split(' / ');
        let hero = new Hero(name, Number(level));
        items.split(', ').forEach((i) => hero.addItem(i));
        return hero;
    }

    let heroes = heroArr.map(createHero);
    heroes.sort((a, b) => a.heroLevel - b.heroLevel).forEach((h) => h.printInfo())

}
