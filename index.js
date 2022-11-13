const loginForm = document.getElementById('login')


//Cuentas de clientes

const cuenta001 = {

    cNumb: '123456',
    cPass: 'jimmy123',
    cName: 'James Page',
    balance: 500

}

const cuenta002 = {

    cNumb: '123457',
    cPass: 'abel123',
    cName: 'Abel Tesfaye',
    balance: 500

}

const cuenta003 = {

    cNumb: '123458',
    cPass: 'christian123',
    cName: 'Christian Martinoli',
    balance: 500

}

const cuentas = [cuenta001,cuenta002,cuenta003];

//Login

loginForm.addEventListener('submit', (evento)=>{
    evento.preventDefault();

    let logUs = document.getElementById("userNum").value;
    let logPass = document.getElementById("userPass").value;

    validateId(logUs,logPass)

})


function invalidData(e){
    let error = document.getElementById('errorLogin');
    error.classList.remove('hide');
    error.classList.add("err");
}


function screenChange(){ // CAMBIO DE PANTALLA
    document.getElementById("loginScreen").classList.add('hide');
    document.getElementById("resumeScreen").classList.remove('hide');
}

function dataRelation(nam,bal){
    document.getElementById("usName").innerHTML = nam;
    document.getElementById("usBalance").innerHTML = bal;
    
}




function validateId(us,pas){

    for(let i = 0; i < cuentas.length ; i++){

        if(us === cuentas[i].cNumb && pas === cuentas[i].cPass){
            
            let accName = cuentas[i].cName;
            let accBal = cuentas[i].balance;


            dataRelation(accName,accBal)

            let error = document.getElementById('errorLogin');
            error.classList.add('hide');
            error.classList.remove("err");
            screenChange()

            break;
        }
        
        else{
            invalidData()
        }       
    }  
}

//Session


//Operations 

function retiro (){

    let montoRetiro = document.getElementById('withdrawInput').value;
    console.log(+montoRetiro)

    let userBalance = document.getElementById("usBalance").innerHTML;

    if ((userBalance - montoRetiro) >= 10){
        userBalance -= montoRetiro;

        document.getElementById("usBalance").innerHTML = userBalance;    
        alert('Por favor retire su dinero');
    }
    else{
        alert('Fondos insuficientes');
    }

 }


 
function deposito (){

    let montoDeposito = document.getElementById('depositInput').value;
    console.log(+montoDeposito)

    let userBalance = document.getElementById("usBalance").innerHTML;
    console.log(+userBalance + +montoDeposito);
    if ((+userBalance + +montoDeposito) >= 901){
        
        alert('Por motivos de seguridad, no puede tener un saldo mayor a 900, consulte con Atención al cliente.');
    }
    else{
        
    userBalance = +userBalance + (+montoDeposito);
    document.getElementById("usBalance").innerHTML = userBalance;    
        alert('Depósito confirmado con éxito, su saldo es de: ' + userBalance);

 }
}
