const Header = (props) => {
  return (
    <div>
      <p>Hello {props.course}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {/* <p>You are on {props.part1} {props.part2} {props.part3}</p> */}
      <Part name={props.name1} num={props.num1}/>
      <Part name={props.name2} num={props.num2}/>
      <Part name={props.name3} num={props.num3}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name}, number of exercises: {props.num}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises: {props.total}</p>
    </div>
  )
  
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content name1={part1} num1={exercises1} name2={part2} num2={exercises2} name3={part3} num3={exercises3} />
      <Total total={exercises1} />
    </div>
  )
}

export default App