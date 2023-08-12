class ConnectionManager {
  private static instance: ConnectionManager

  private constructor() {}

  public static getInstance(): ConnectionManager {
    if (!ConnectionManager.instance) {
      ConnectionManager.instance = new ConnectionManager()
    }
    return ConnectionManager.instance
  }

  public setConnection() {
    return 'Established Connection'
  }

  public closeConnection() {
    return 'closed connection'
  }
}

const db1 = ConnectionManager.getInstance()
const db2 = ConnectionManager.getInstance()

console.log(db1 === db2)
console.log(db1.setConnection())
console.log(db1.closeConnection())
