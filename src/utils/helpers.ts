export const makeFindByIdHelper = (items: any[]) => {
  return (id: string) => items.find((item: any) => item.id === id)
}
