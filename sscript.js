function cripto() {
  let text = document.getElementById('text').value
  let split = text.split("")
  let chars = split.length
  const pre = ['Z','E','N','I','T','P','O','L','A','R','z','e','n','i','t','p','o','l','a','r']

  const pos = ['P','O','L','A','R','Z','E','N','I','T','p','o','l','a','r','z','e','n','i','t']
  let rslt = document.getElementById('result')

  for (i = 0; i < chars; i++) {
      let index = pre.indexOf(split[i])
      
      if(index === -1) {
          split[i] = split [i]
          } else {
              split[i] = pos[index]
      }
      
      const toString = split.join('')
      
      rslt.innerText = toString
      //console.log(split[i])
  }
}





// codificar as palavras  em zeta poloc
//function cripto () {
// aquilo que estiver no "textarea" vai ser mesclado ao elemento "text id " oque vai gerar um novo valor
//let text = document.getElementById('text').value
// para se criptografar mais utiliza-se o slipt onde se corta um elemento e o transforma em outra coisa, quanto mais cortes mais complexo é uma criptografia
//let split = text.split("")
// agora fatiamos o texto devermos contar quantas partes deu
//let chars = split.lenght
//faremos uma determinante  array    que possa estar colocando os caracteres que vamos usar na criptografia
//const pre = ['Z','E','N','I','T','P','O','L','A','R','z','e','n','i','t','p','o','l','a','r']
//Vamos  criar um array pata determinarmos os caracteres escolhidos na cripto
//const pos = ['P','O','L','A','R','Z','E','N','I','T','p','o','l','a','r','z','e','n','i','t']
//Array com os caracteres ja embaralhados
//let rslt = document.getElementById('result')
//for ( i = 0; i < chars; i++) {
// a cripto começa a partir de 0 quando ele recebe vai fazer uma matrix determinante e todo valor que ele vai receber ele ai colocar no mais
//let index = pre.indexOf(split[i])
// vai cortar o pre até o -1
 // if  (index === -1) {
 //split[i] = split [i]
 //} 
// else {
 //split[i] = pos[index]
// Vai cortar e embaralhar o pos 
//const toString = split.join('')
//fazendo um join ele vai "juntar" os arways "join"  e devolver ao site
// rslt.innerText = toString
//vai colocoar dentro de um charactere dentro aparecendo no html aparecendo a partir do 0 e uando chegar no menos 1 ele para de funcionar










