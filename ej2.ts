class CuentaBancaria {
  readonly titular: string
  private saldo: number
  private historial: string[] = []

  constructor(titular: string, saldoInicial: number = 0) {
    if (saldoInicial < 0) throw new Error("El saldo inicial no puede ser negativo")
    this.titular = titular
    this.saldo = saldoInicial
  }

  depositar(monto: number): void {
    if (monto <= 0) throw new Error("El monto a depositar debe ser mayor a 0")
    this.saldo += monto
    this.historial.push(`depósito: +${monto}`)
  }

  retirar(monto: number): void {
    if (monto <= 0) throw new Error("El monto a retirar debe ser mayor a 0")
    if (monto > this.saldo) throw new Error("Saldo insuficiente")
    this.saldo -= monto
    this.historial.push(`retiro: -${monto}`)
  }

  consultarSaldo(): number {
    return this.saldo
  }

  // Devuelvo una copia para que el arreglo interno no se pueda alterar desde afuera
  obtenerHistorial(): string[] {
    return [...this.historial]
  }
}

const cuenta = new CuentaBancaria("Ana", 5000)
cuenta.depositar(2000)
cuenta.retirar(1500)
console.log("Saldo:", cuenta.consultarSaldo())

try {
  cuenta.retirar(100000)
} catch (e) {
  console.log((e as Error).message)
}

try {
  cuenta.depositar(-5)
} catch (e) {
  console.log((e as Error).message)
}

const copia = cuenta.obtenerHistorial()
copia.push("movimiento falso")
console.log("Copia modificada:", copia)
console.log("Historial real:", cuenta.obtenerHistorial())
