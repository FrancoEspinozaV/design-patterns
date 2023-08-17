//@ts-ignore
class Document {
  public title: string
  public subject: string
  public body: string

  constructor() {
    this.title = ''
    this.subject = ''
    this.body = ''
  }

  showDocument() {
    return `
---------------
${this.title}
${this.subject}
${this.body}
---------------
`
  }
}

interface DocumentBuilder {
  setTitle(title: string): void
  setSubject(subject: string): void
  setBody(body: string): void
}

class DocumentBuilderImp implements DocumentBuilder {
  private document: Document = new Document()

  setTitle(title: string): void {
    this.document.title = title
  }

  setSubject(subject: string): void {
    //@ts-ignore
    this.document.subject = subject
  }
  setBody(body: string): void {
    //@ts-ignore
    this.document.body = body
  }

  getResult() {
    return this.document
  }
}

class DocumentDirector {
  constructor(private builder: DocumentBuilder) {}

  constructorEmailDocument() {
    this.builder.setTitle('Email Document')
    this.builder.setSubject('Subject Email Document')
    this.builder.setBody('Body Document')
  }
  constructorCVDocument() {
    this.builder.setTitle('CV Document')
    this.builder.setSubject('Franco Espinoza V.')
    this.builder.setBody(`Generador de CV de prueba!`)
  }
}
//@ts-ignore
const builder = new DocumentBuilderImp()
//@ts-ignore
const director = new DocumentDirector(builder)

director.constructorEmailDocument()
const emailDocument = builder.getResult()
//@ts-ignore
const resultEmail = emailDocument.showDocument()
console.log(resultEmail)

director.constructorCVDocument()
const CVDOC = builder.getResult()
//@ts-ignore
const resultCV = CVDOC.showDocument()
console.log(resultCV)
