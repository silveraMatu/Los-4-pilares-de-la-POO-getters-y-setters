class Producto {
  nombre: string
  precio: number
  categoria: string
  stock: number

  constructor(nombre: string, precio: number, categoria: string, stock: number) {
    this.nombre = nombre
    this.precio = precio
    this.categoria = categoria
    this.stock = stock
  }

  describir(): string {
    return `${this.nombre} ($${this.categoria}): $${this.precio} — ${this.stock} unidades`
  }

  hayStock(cantidad: number): boolean {
    return cantidad > 0 && cantidad <= this.stock
  }

  // Lanzo Error porque un intento de venta sin stock es un fallo que quien llama debe manejar
  venderUnidades(cantidad: number): void {
    if (!this.hayStock(cantidad)) {
      throw new Error(`No hay stock suficiente de ${this.nombre} para vender ${cantidad}`)
    }
    this.stock -= cantidad
  }

  // Devuelve el precio simulado sin tocar this.precio
  aplicarDescuento(porcentaje: number): number {
    return this.precio * (1 - porcentaje / 100)
  }
}

const teclado = new Producto("Teclado", 10000, "electrónica", 5)
console.log(teclado.describir())
console.log("¿Hay 3?", teclado.hayStock(3))
console.log("¿Hay 10?", teclado.hayStock(10))

teclado.venderUnidades(2)
console.log(teclado.describir())

try {
  teclado.venderUnidades(10)
} catch (e) {
  console.log((e as Error).message)
}

console.log("Con 20% off:", teclado.aplicarDescuento(20))
console.log("Precio original:", teclado.precio)
