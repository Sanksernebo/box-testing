document.getElementById('contactForm').addEventListener('submit', function(event) {
          event.preventDefault(); // Tühistame vormi tavalise esitamise
      
          // Kõigi veateadete tühjendamine
          document.getElementById('nameError').textContent = '';
          document.getElementById('emailError').textContent = '';
          document.getElementById('messageError').textContent = '';
      
          // Vormiväljade väärtused
          let name = document.getElementById('name').value.trim();
          let email = document.getElementById('email').value.trim();
          let message = document.getElementById('message').value.trim();
      
          let isValid = true;
      
          // Nime valideerimine
          if (name === '' || name.length < 2) {
              document.getElementById('nameError').textContent = 'Nimi peab olema vähemalt 2 tähemärki pikk.';
              isValid = false;
          }
      
          // E-posti valideerimine (lihtne regex)
          let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
          if (!emailPattern.test(email)) {
              document.getElementById('emailError').textContent = 'Palun sisestage korrektne e-posti aadress.';
              isValid = false;
          }
      
          // Sõnumi valideerimine
          if (message === '' || message.length < 10) {
              document.getElementById('messageError').textContent = 'Sõnum peab olema vähemalt 10 tähemärki pikk.';
              isValid = false;
          }
      
          // Kui kõik on kehtiv, kuvame edusõnumi (võiks olla näiteks edasine tegevus)
          if (isValid) {
              alert('Vorm esitati edukalt!');
          }
      });
      