import Moment from 'moment';

export const verifyPhoneMask = (phone: string) => {
  return phone.length <= 14 ? "(99) 9999-99999" : "(99) 99999-9999";
}

export const formatReqDate = (date: string) => {
  return Moment(date).format('MM/DD/YYYY');
}

export const formatLocalDate = (date: string) => {
  return Moment(date).format('DD/MM/YYYY');
}

export const formatCalendarDate = (date: string) => {
  return Moment(date).format('YYYY-MM-DD');
}

export const sum = (array: any, key: string) => {
  return array.reduce((a: any, b: any) => a + (b[key] || 0), 0);
}

export const filteredSum = (array: any, key: string, filterArray: any) => {
  return array.reduce((acc: any, obj: any) => {
    if (obj[filterArray[0]] === filterArray[1])
        return acc + (obj[key] || 0)
    else 
        return acc
  }, 0);
}

export const formatCurrency = (value: any, precision=2) => {
  var translation = localStorage.getItem('translation');
  var currency = 'BRL';

  if (translation) {
    translation = translation.replace('_', '-');
    if (translation === 'en') currency = 'USD';
    else if (translation === 'es') currency = 'EUR';
  } else translation = 'pt-BR';
  
  return new Intl.NumberFormat(translation, {
    style: 'currency',
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
    currency}).format(value);
}

export const formatDecimal = (value: any, precision=2) => {
  var translation = localStorage.getItem('translation');
  
  if (translation){
    translation = translation.replace('_', '-');
  } else translation = 'pt-BR';

  return new Intl.NumberFormat(translation, {
    style: 'decimal',
    minimumFractionDigits: precision,
    maximumFractionDigits: precision}).format(value);
}

export const currencyToFloat = (value: string) => {
    return parseFloat(value.replace('R$', '').replaceAll('.', '').replace(',', '.'))
}

export const groupBy = (xs: any, key: any) => {
  return xs.reduce((rv: any, x: any) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const checkCpf = (cpf : string) => {
  cpf = cpf.replace(/[^\d]+/g,'');

  if ( !cpf || cpf.length !== 11 ||
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999" 
  ) return false;

  var soma = 0;
  var resto;
  for (var i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);
  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) resto = 0;
  if (resto !== parseInt(cpf.substring(9, 10)) ) return false;

  soma = 0
  for (i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);
  resto = (soma * 10) % 11;

  if ((resto === 10) || (resto === 11)) resto = 0;
  if (resto !== parseInt(cpf.substring(10, 11) )) return false;
  return true;
}

export const checkCnpj = (cnpj : string) => {
  cnpj = cnpj.replace(/[^\d]+/g,'');
  
  if ( !cnpj || cnpj.length !== 14
    || cnpj === "00000000000000" 
    || cnpj === "11111111111111" 
    || cnpj === "22222222222222" 
    || cnpj === "33333333333333" 
    || cnpj === "44444444444444" 
    || cnpj === "55555555555555" 
    || cnpj === "66666666666666" 
    || cnpj === "77777777777777" 
    || cnpj === "88888888888888" 
    || cnpj === "99999999999999") return false;
    
  // Valida DVs
  let tamanho = cnpj.length - 2
  let numeros = cnpj.substring(0,tamanho);
  let digitos = cnpj.substring(tamanho);
  let soma = 0;
  let pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2)
          pos = 9;
  }
  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado !== parseInt(digitos.charAt(0)))
      return false;
        
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0,tamanho);
  soma = 0;
  pos = tamanho - 7;
  for (let i = tamanho; i >= 1; i--) {
    soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado !== parseInt(digitos.charAt(1))) return false;
          
  return true;
}

export const checkBirth = (birth: string) => {
  const dateNow = new Date()
  const birthdate = new Date(birth)

  return !(dateNow.getFullYear() - birthdate.getFullYear() < 18 || 
    (dateNow.getFullYear() - birthdate.getFullYear() === 18 && 
    dateNow.getMonth() - birthdate.getMonth() > 0) ||
    (dateNow.getFullYear() - birthdate.getFullYear() === 18 && 
    dateNow.getMonth() - birthdate.getMonth() === 0 &&
    dateNow.getDate() - birthdate.getDate() > 0));
}

export const checkEmail = (email: string) => {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var valid = regex.test(String(email).toLowerCase());
  
  return valid;
}

export const checkPhone = (phone: string) => {
  return phone.length === 11 || phone.length === 10;
}

export const removePhoneMask = (phone: string) => {
  return phone.replace('(', '').replace(')', '').replace('-', '').replace(' ', '');
}

export const reduceCharLength = (name: string) => {
  if (name.length > 20) return `${name.substring(0, 20)} ...`;
  else return name;
}