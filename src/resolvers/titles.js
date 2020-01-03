const defaultData = [
  {
    id: 1,
    title: "Luke SkyWaler",
  },
  {
    id: 2,
    title: "C-3PO",
  }
]

const titles = {
  Query: {
    allTitle: () => {
      return defaultData
    },
    title: (root, { id }) => {
      return defaultData.filter(item => item.id === id)[0];
    },
  },
}

export default titles;
