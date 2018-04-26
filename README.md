# angularjs-learn-by-build
App usado na disciplina Angular JS.

Extensão para Chrome
[ng-inspector](https://chrome.google.com/webstore/detail/ng-inspect-for-angularjs/cidepfmbgngpdapgncfhpecbdhmnnemf)


Código para criação de mockup data no [JSON Generator](https://next.json-generator.com)

#### Criação de usuários
```JSON
[
  {
    'repeat(5, 10)': {
      id: '{{index(1)}}',
      cidade: '{{city()}},{{state(true)}}',
      nome: '{{firstName()}} {{surname()}}'
    }
  }
]
```

#### Criação de cidades
```JSON
[
  {
    'repeat(20)' :'{{city()}},{{state(true)}}'
  }
]
```

#### Criação de produtos
```JSON
[
  {
    'repeat(40)': {
      id: '{{index(1)}}',
      nome: '{{company()}}',
      descricao: '{{lorem(100, "words")}}',
      preco: '{{floating(10000, 500000, 2)}}'
    }
  }
]
```