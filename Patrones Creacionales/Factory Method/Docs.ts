//@ts-ignore
abstract class Document {
  abstract getDescription(): string
}

class Presentacion extends Document {
  getDescription(): string {
    return 'Documento de presentación'
  }
}

class HojaCalculo extends Document {
  getDescription(): string {
    return 'Documento Hoja de cálculo'
  }
}

class Texto extends Document {
  getDescription(): string {
    return 'Documento de texto'
  }
}

interface DocumentFactory {
  createDocument(): Document
}

class PresentacionFactory implements DocumentFactory {
  createDocument(): Document {
    return new Presentacion()
  }
}

class HojaCalculoFactory implements DocumentFactory {
  createDocument(): Document {
    return new HojaCalculo()
  }
}

class TextoFactory implements DocumentFactory {
  createDocument(): Document {
    return new Texto()
  }
}

function generarReportes(factory: DocumentFactory): void {
  const document = factory.createDocument()
  //@ts-ignore
  console.log(document.getDescription())
}

generarReportes(new PresentacionFactory())
generarReportes(new HojaCalculoFactory())
generarReportes(new TextoFactory())
