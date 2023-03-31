export const makeFindByIdHelper = (items: any[]) => {
  return (id: string) => items.find((item: any) => item.id === id)
}

export const makeFilterByHelper = (items: any[], filterByProp: string) => {
  return (filterByValue: string) =>
    items.filter((item: any) => item[filterByProp] === filterByValue)
}
