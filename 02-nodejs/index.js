/*
0 Obter um usuario
1 Obter o numero de telefone de um usuario a partir de seu Id
2 Obeter o endereco do usuario pelo id 
*/

function obterUsuario(callback) {
    setTimeout(function () {
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null,{
            telefone: '1199002',
            ddd: 11
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
        rua: 'dos bobos',
        numero: 0
    })
    }, 2000);
}

function resolverUsuario(error, usuario) {
    console.log('usuario', usuario)

}


})
//const telefone = obterTelefone(usuario.id)

//console.log('telefone', telefone)