const locatorData = {
  "nomeLocador": 'Landstein Santos de Medeiros',
  "nacionalidadeLocador": "brasileiro",
  "estadoCivilLocador": "casado",
  "profissaoLocador": "comerciante",
  "rgLocador": "4.341.213",
  "cpfLocador": "342.123.543-34",
  "enderecoLocador": "Rua 31 de Março",
  "numeroLocador": "241",
  "bairroLocador": "Centro",
  "cidadeLocador": "Nova Floresta",
  "ufLocador": "PB",
  "cepLocador": "58178-000" 
}

const tenantData = {
  "nomeLocatario": 'Renan Luiz de Lima Medeiros',
  "nacionalidadeLocatario": "brasileiro",
  "estadoCivilLocatario": "solteiro",
  "profissaoLocatario": "desenvolvedor de sistemas",
  "rgLocatario": "3.84.910",
  "cpfLocatario": "130.432.540-32",
}

const propertyData = {
  // enum comercial ou residencial, no sistema colocar como input select
  "tipoImovel": "residencial",
  "enderecoImovel": "Rua João Suassuna",
  "numeroImovel": "1043",
  "bairroImovel": "Alves Pinto",
  "cidadeImovel": "Cuité",
  "cepImovel": "58237-000",
  "finalidadeImovel": "residencia familiar"
}

const contractData = {
  "mesesLocacao": "12",
  // formatar esse valor para moeda
  "valorAluguel": "547,00",
  "valorAluguelExtenso": "quintenhos e quarenta e sete reais",
  "diaPagamentoAluguel": "25",
  "itensDevolucaoImovel": "cadeados e campainha",
  // colocar um input date pra ser mais facil de preencher
  // "dataAssinatura": new Date(),
  "diaAssinatura": "24",
  "mesAssinatura": "junho",
  "anoAssinatura": "2022"
}

const replacements = {
  ...locatorData,
  ...tenantData,
  ...propertyData,
  ...contractData
}

module.exports = replacements;