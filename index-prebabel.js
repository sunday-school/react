/******************************
 * utility functions
 */

// capitalize
String.prototype.capitalize = function () {
  const [firstLetter, ...otherLetters] = this
  console.log({firstLetter, otherLetters})
  return firstLetter.toUpperCase() + otherLetters
}

/*******************************
 * react components
 */

// Header component
const Header = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

// Greeting component
const Greeting = ({people}) => {
  return (
    <p>
      Hello
      {' '}
      {
        people
          .map(person => person.capitalize())
          .join(', ')
      }
      !
    </p>
  )
}

// navigation component
const Nav = ({pages}) => {
  return (
    <nav>
      <ul>
        {
          Object.keys(pages).map(page => (
            <li
              onClick={() => { state.currentPage = page; renderFn()}}
            >
              {page}
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

// page component
const GreetingPage = ({}) => {
  return (
    <div>
      <Nav pages={pages} />
      <Header text='Kowabunga' />
      <Greeting people={['alp', 'mau']} />
    </div>
  )
}

// page component
const AboutPage = ({}) => {
  return (
    <div>
      <Nav pages={pages} />
      <Header text='Kalamazoo' />
      <p>Here are some facts about kalamazoo</p>
    </div>
  )
}

// page component
const ThirdPage = ({}) => {
  return (
    <div>
      <Nav pages={pages} />
      <Header text='The UK Garage Movement' />
      <p>Here are some facts about The UK Garage Movement</p>
    </div>
  )
}

/*******************************
 * state
 */

const pages = {
  GreetingPage,
  AboutPage,
  ThirdPage
}

const state = {
  currentPage: 'GreetingPage',
}

/*******************************
 * rendering
 */

const renderFn = () => {
  const CurrentPageComponent = pages[state.currentPage]
  ReactDOM.render(<CurrentPageComponent />, document.body)
}

renderFn()

console.log('👍')

