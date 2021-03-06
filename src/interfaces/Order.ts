export interface OrderProducts {
  products: number[],
  id: number,
  username: string
}

export interface Order {
  id: string,
  userId: string
}

export interface OrderWithProducts extends Order {
  products: number[]
}