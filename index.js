document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [{
            name: 'circle',
            img: 'src/circle.jpg'
        },
        {
            name: 'circle',
            img: 'src/circle.jpg'
        },
        {
            name: 'triangle',
            img: 'src/triangle.png'
        },
        {
            name: 'triangle',
            img: 'src/triangle.png'
        }, {
            name: 'square',
            img: 'src/square.jpeg'
        },
        {
            name: 'square',
            img: 'src/square.jpeg'
        },
        {
            name: 'hexagon',
            img: 'src/hexagon.jpg'
        },
        {
            name: 'hexagon',
            img: 'src/hexagon.jpg'
        },
        {
            name: 'heptagon',
            img: 'src/heptagon.png'
        },
        {
            name: 'heptagon',
            img: 'src/heptagon.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    //create game board
    const grid = document.querySelector('.grid')
    const timeDisplay = document.querySelector('#time')
    const resultDisplay = document.querySelector('#result')
    var startDate = new Date()
    var cardsChosen = []
    var cardsChosenID = []
    const cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'src/blank.png')
            card.setAttribute('data-id', i)
            card.setAttribute('width', '256px')
            card.setAttribute('height', '256px')
            card.style.borderRadius = '20%'
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneID = cardsChosenID[0]
        const optionTwoID = cardsChosenID[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            cards[optionOneID].style.opacity = '0'
            cards[optionTwoID].style.opacity = '0'
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneID].setAttribute('src', 'src/blank.png')
            cards[optionTwoID].setAttribute('src', 'src/blank.png')
        }
        cardsChosen = []
        cardsChosenID = []
        display()
    }

    function display() {
        if (cardsWon.length === cardArray.length / 2) {
            var endDate = new Date()
            const time = (endDate - startDate) / 1000
            timeDisplay.style.fontStyle = 'italic'
            timeDisplay.textContent = `It took you ${time.toString()}s to finish the game!`
            resultDisplay.textContent = '🎉Congrats!🎉'
        }
    }
    //flip your card
    function flipCard() {
        var cardID = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardID].name)
        cardsChosenID.push(cardID)
        this.setAttribute('src', cardArray[cardID].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 400)
        } else if (cardsChosen.length > 2) {
            this.setAttribute('src', 'src/blank.png')
        }
    }
    createBoard()

    //Bug score can be increased by clicking on white tiles
    // Learned:
    // push()
    // getAttribute()
    // setAttribute()
    // sort()
    // Math.random()
    // for loops
    // createElement()
    // appendChild()
    // push()
})