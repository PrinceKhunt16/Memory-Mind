import { useEffect, useState } from "react"
import Fries from '../assets/images/fries.png'
import CheeseBurger from '../assets/images/cheeseburger.png'
import HotDog from '../assets/images/hotdog.png'
import IceCreame from '../assets/images/icecream.png'
import MilkShake from '../assets/images/milkshake.png'
import Pizza from '../assets/images/pizza.png'
import Blank from '../assets/images/blank.png'
import Plain from '../assets/images/plain.png'

const cardsArray = [
  {
    name: 'fries',
    img: Fries,
    show: true
  },
  {
    name: 'cheeseburger',
    img: CheeseBurger,
    show: true
  },
  {
    name: 'hotdog',
    img: HotDog,
    show: true
  },
  {
    name: 'icecreame',
    img: IceCreame,
    show: true
  },
  {
    name: 'milkshake',
    img: MilkShake,
    show: true
  },
  {
    name: 'pizza',
    img: Pizza,
    show: true
  },
  {
    name: 'fries',
    img: Fries,
    show: true
  },
  {
    name: 'cheeseburger',
    img: CheeseBurger,
    show: true
  },
  {
    name: 'hotdog',
    img: HotDog,
    show: true
  },
  {
    name: 'icecreame',
    img: IceCreame,
    show: true
  },
  {
    name: 'milkshake',
    img: MilkShake,
    show: true
  },
  {
    name: 'pizza',
    img: Pizza,
    show: true
  },
  {
    name: 'hotdog',
    img: HotDog,
    show: true
  },
  {
    name: 'icecreame',
    img: IceCreame,
    show: true
  },
  {
    name: 'hotdog',
    img: HotDog,
    show: true
  },
  {
    name: 'icecreame',
    img: IceCreame,
    show: true
  },
]

export default function MemoryGamePlayGround() {
  const [score, setScore] = useState(0)
  const [cards, setCards] = useState([])
  const [choosenCards, setChoosenCards] = useState([])
  const [choosenCardsIds, setChoosenCardsIds] = useState([])

  function filpCard(id) {
    if(!cards[id].show){
      return
    }

    const e = document.getElementsByClassName(id)
    e[0].setAttribute('src', cards[id].img)
    
    setChoosenCardsIds((prev) => [...prev, id])
    setChoosenCards((prev) => [...prev, cards[id]])
  }

  useEffect(() => {
    if(choosenCards.length === 2){
      if(choosenCards[0].name === choosenCards[1].name){
        setScore((prev) => prev += 1)
      } else {
        setScore((prev) => prev -= 1)
      }

      setChoosenCards([])
      setChoosenCardsIds([])
    }
  }, [choosenCards])

  useEffect(() => {
    if(choosenCards.length === 2){
      if(choosenCards[0].name === choosenCards[1].name){
        let n = 2

        setTimeout(() => {
          while(n--){
            const e = document.getElementsByClassName(choosenCardsIds[n])
            e[0].setAttribute('src', Plain)
          }

          const newCards = cards.map((card, id) => {
            if(choosenCardsIds[0] === id){
              return {
                ...card,
                show: false
              }
            } else if(choosenCardsIds[1] === id) {
              return {
                ...card,
                show: false
              }
            } else {
              return card
            }
          })

          setCards(newCards)
        }, [500])
      } else {
        let n = 2 

        setTimeout(() => {
          while(n--){
            const e = document.getElementsByClassName(choosenCardsIds[n])
            e[0].setAttribute('src', Blank)
          }
        }, [500])
      }
    }
  }, [cards, choosenCards, score, choosenCardsIds])

  useEffect(() => {
    const sortedCards = cardsArray.sort(() => 0.5 - Math.random())
    setCards(sortedCards)
  }, [])

  return (
    <div className="board">
      <h3 className="score">Score {score}</h3>
      <div className="cardsBody">
        {cards?.map((card, i) => {
          return (
            <div className="card" onClick={() => filpCard(i)} key={i}>
              <img src={Blank} className={i} alt={card.name} />
            </div>
          )   
        })}
      </div>
    </div>
  )
}