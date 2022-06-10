const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
]


const titleCased = () => {
  const newTutorial = []
  tutorials.map(value => {
    const name1 = value.split("")

    for(let i =0 ; i < name1.length; i++){
      name1[i]=name1[i].charAt(0).toUpperCase()+ name1[i].slice(1)
    }
    const name2 = name1.join("")
    newTutorial.push(name2)
  })

  return newTutorial
}
