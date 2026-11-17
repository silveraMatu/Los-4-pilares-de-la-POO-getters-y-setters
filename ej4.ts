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
    return this.sueldoBase + this.sueldoBase * 0.02 * this.antiguedad
  }
}

class EmpleadoPorHoras extends Empleado {
  horasTrabajadas: number
  valorHora: number

  constructor(nombre: string, antiguedad: number, horasTrabajadas: number, valorHora: number) {
    super(nombre, antiguedad)
    this.horasTrabajadas = horasTrabajadas
    this.valorHora = valorHora
  }

  override calcularSueldo(): number {
    return this.horasTrabajadas * this.valorHora
  }
}

class EmpleadoPorComision extends Empleado {
  ventasDelMes: number
  porcentajeComision: number

  constructor(nombre: string, antiguedad: number, ventasDelMes: number, porcentajeComision: number) {
    super(nombre, antiguedad)
    this.ventasDelMes = ventasDelMes
    this.porcentajeComision = porcentajeComision
  }

  override calcularSueldo(): number {
    return this.ventasDelMes * (this.porcentajeComision / 100)
  }
}

function calcularNomina(empleados: Empleado[]): number {
  let total = 0
  for (const e of empleados) {
    total += e.calcularSueldo()
  }
  return total
}

const empleados: Empleado[] = [
  new EmpleadoFijo("Juan", 3, 100000),
  new EmpleadoPorHoras("Marta", 2, 120, 1500),
  new EmpleadoPorComision("Carlos", 5, 800000, 5),
  new EmpleadoFijo("Sofía", 10, 90000),
  new EmpleadoPorHoras("Luis", 1, 80, 1800),
]

// El for no pregunta el tipo, cada empleado sabe calcular su sueldo
for (const e of empleados) {
  console.log(e.describir())
}

console.log("Nómina total:", calcularNomina(empleados))
