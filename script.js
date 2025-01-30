//Cálculadora de IMC - Índice de massa corporal.

function displayText(tag, name){
    let dT = document.querySelector(tag);
    dT.innerHTML = name;
}


function generateData(){
    let name = document.getElementById('name').value.trim();

    let weight = document.getElementById('weight').value;

    let height = document.getElementById('height').value;

    clearCharacters();

    let imc = weight / (height * height);
    
    if (name == '' || weight == '' || height == ''){
        alert('Campo vazio, digite algo válido...');
    }else{
        if (imc < 18.5){
            displayText('ul', `Seus dados abaixo:<br><br>Nome: ${name}<br>Peso: ${weight}kg<br>Altura: ${height}m<br>Seu IMC: ${imc.toFixed(2)}<br>`);
            displayText('span', 'Você está abaixo do peso!<br><br>');
        }else{
            if (imc >= 18.5 && imc < 25){
                displayText('ul', `Seus dados abaixo:<br><br>Nome: ${name}<br>Peso: ${weight}kg<br>Altura: ${height}m<br>Seu IMC: ${imc.toFixed(2)}<br>`);
                displayText('span', 'Você está no peso ideal!<br><br>');
            }else{
                if (imc >= 25 && imc < 30){
                    displayText('ul', `Seus dados abaixo:<br><br>Nome: ${name}<br>Peso: ${weight}kg<br>Altura: ${height}m<br>Seu IMC: ${imc.toFixed(2)}<br>`);
                    displayText('span', 'Você está com sobrepeso!<br><br>');
                }else{
                    if (imc >= 30 && imc < 35){
                        displayText('ul', `Seus dados abaixo:<br><br>Nome: ${name}<br>Peso: ${weight}kg<br>Altura: ${height}m<br>Seu IMC: ${imc.toFixed(2)}<br>`);
                        displayText('span', 'Você está com obesidade grau I!<br><br>');
                    }else{
                        if (imc >= 35 && imc < 40){
                            displayText('ul', `Seus dados abaixo:<br><br>Nome: ${name}<br>Peso: ${weight}kg<br>Altura: ${height}m<br>Seu IMC: ${imc.toFixed(2)}<br>`);
                            displayText('span', 'Você está com obesidade grau II!<br><br>');
                        }else{
                            if (imc >= 40){
                                displayText('ul', `Seus dados abaixo:<br><br>Nome: ${name}<br>Peso: ${weight}kg<br>Altura: ${height}m<br>Seu IMC: ${imc.toFixed(2)}<br>`);
                                displayText('span', 'Você está com obesidade móbida!!!<br><br>');
                            }
                        }
                    }
                }
            }
        }
    }
}


function clearCharacters(){
    let name = document.getElementById('name');
    name.value = '';
    let weight = document.getElementById('weight');
    weight.value = '';
    let height = document.getElementById('height');
    height.value = '';
}