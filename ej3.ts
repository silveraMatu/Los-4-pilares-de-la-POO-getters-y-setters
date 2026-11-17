class Empleado {
  protected nombre: string
  protected antiguedad: number

  constructor(nombre: string, antiguedad: number) {
    this.nombre = nombre
    this.antiguedad = antiguedad
  }

  calcularSueldo(): number {
    return 0
  }

  // Funciona para cualquier subclase porque calcularSueldo se resuelve en tiempo de ejecución
  describir(): string {
    return `${this.nombre} (${this.antiguedad} años) — sueldo: $${this.calcularSueldo()}`
  }
}

class EmpleadoFijo extends Empleado {
  sueldoBase: number

  constructor(nombre: string, antiguedad: number, sueldoBase: number) {
    super(nombre, antiguedad)
    this.sueldoBase = sueldoBase
  }

  override calcularSueldo(): number {
    const bono = this.sueldoBase * 0.02 * this.antiguedad
    return this.sueldoBase + bono
  }
}

const juan = new EmpleadoFijo("Juan", 3, 100000)
console.log(juan.describir())

const nuevo = new EmpleadoFijo("Lucía", 0, 120000)
console.log(nuevo.describir())

const generico = new Empleado("Pedro", 1)
console.log(generico.describir())
