class Food {
  id: number
  title: string
  category: string
  description: string
  image: string
  note: string
  emphasis?: string

  constructor(
    id: number,
    title: string,
    category: string,
    description: string,
    image: string,
    note: string,
    emphasis: string
  ) {
    this.id = id
    this.title = title
    this.category = category
    this.description = description
    this.image = image
    this.note = note
    this.emphasis = emphasis
  }
}

export default Food
