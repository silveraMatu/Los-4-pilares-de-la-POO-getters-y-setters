class Persona {
  private readonly dni: string
  nombre: string
  private _edad: number = 0
  private _email: string = ""

  constructor(dni: string, nombre: string, edad: number, email: string) {
    this.dni = dni
    this.nombre = nombre
    // Paso por los setters para que la validación también aplique al construir
    this.edad = edad
    this.email = email
  }

  get edad(): number {
    return this._edad
  }

  set edad(valor: number) {
    if (valor < 0) throw new Error("La edad no puede ser negativa")
    if (valor > 120) throw new Error("La edad no puede superar 120")
    this._edad = valor
  }

  get email(): string {
    return this._email
  }

  set email(valor: string) {
    if (!valor.includes("@")) throw new Error("El email debe contener @")
    this._email = valor
  }

  // Se calcula al leerlo, no se guarda
  get esMayorDeEdad(): boolean {
    return this._edad >= 18
  }

  get datosPublicos(): string {
    return `${this.nombre} — mayor de edad: ${this.esMayorDeEdad}`
  }
}

const p = new Persona("40123456", "Valeria", 25, "vale@mail.com")
console.log(p.datosPublicos)
console.log("Edad:", p.edad, "Email:", p.email)

p.edad = 15
console.log(p.datosPublicos)

try {
  p.edad = -3
} catch (e) {
  console.log((e as Error).message)
}

try {
  p.edad = 130
} catch (e) {
  console.log((e as Error).message)
}

try {
  p.email = "sin-arroba"
} catch (e) {
  console.log((e as Error).message)
}
