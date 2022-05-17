export default class User {
  #nome
  #email
  #nascimento
  #role
  #ativo

  constructor(nome, email, nascimento, role, ativo = true) {
      this.#nome = nome
      this.#email = email
      this.#nascimento = nascimento
      this.#role = role || 'estudante'
      this.#ativo =ativo
  }

  get nome() {
      return this.#nome
  }

  get email() {
      return this.#email
  }

  get nascimento() {
      return this.#nascimento
  }

  get role() {
      return this.#role
  }

  get ativo() {
      return this.#ativo
  }

  set nome(nome) {
      this.#nome = nome
  }

  set email(email) {
      this.#email = email
  }

  set nascimento(nascimento) {
      this.#nascimento = nascimento
  }

  set role(role) {
      this.#role = role
  }

  set ativo(ativo) {
      this.#ativo = ativo
  }
  
  #montaObjUser() {
      return ({
          nome: this.#nome,
          email: this.#email,
          nascimento: this.#nascimento,
          role: this.#role,
          ativo: this.#ativo
      })
  }

  exibirInfos() {
      return `${this.#nome}, ${this.#email}`
  }
  
  toString() {
      const ojbUser = this.#montaObjUser()

      return `${ojbUser.nome}, ${ojbUser.email}, ${ojbUser.nascimento}, ${ojbUser.role}, ${ojbUser.ativo}`
  }
}
