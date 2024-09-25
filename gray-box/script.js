document.getElementById('calculatorForm').addEventListener('submit', function(event) {
          event.preventDefault();
      
          // Sisendväärtuste hankimine
          let num1 = parseFloat(document.getElementById('num1').value);
          let num2 = parseFloat(document.getElementById('num2').value);
          let operation = document.getElementById('operation').value;
          let result = 0;
      
          // Valideerimine
          if (isNaN(num1) || isNaN(num2)) {
              document.getElementById('result').textContent = 'Sisesta kaks kehtivat numbrit!';
              return;
          }
      
          // Tehete sooritamine vastavalt valikule
          switch (operation) {
              case 'add':
                  result = num1 + num2;
                  break;
              case 'subtract':
                  result = num1 - num2;
                  break;
              case 'multiply':
                  result = num1 * num2;
                  break;
              case 'divide':
                  if (num2 === 0) {
                      document.getElementById('result').textContent = 'Jagamine nulliga ei ole lubatud!';
                      return;
                  }
                  result = num1 / num2;
                  break;
          }
      
          // Tulemus ekraanile
          document.getElementById('result').textContent = 'Tulemus: ' + result;
      });
      