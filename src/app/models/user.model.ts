export class User {
  id: string
  isActive: boolean
  avatar: string
  name: {
    first: string
    last: string
  }
  company: string
  email: string
  phone: string
  address: string
  about: string
  registered: string
  courses: [
    {
      id: string
      percentComplete: number
      isFavorite: boolean
    }
  ]
}
