const defaultData = [
  {
    id: 1,
    name: "Luke SkyWaler",
    gender: "male",
    homeworld: "Tattoine"
  },
  {
    id: 2,
    name: "C-3PO",
    gender: "bot",
    homeworld: "Tattoine"
  }
]

const person = {
  Query: {
    allPeople: () => {
      return defaultData
    },
    person: (root, { id }) => {
        return defaultData.filter(item => item.id === id)[0];
    },
  },
}

export default person;
