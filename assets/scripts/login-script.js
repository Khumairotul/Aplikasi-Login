/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

/** @module Login-Script*/
/**
* Membuat variabel loginForElement untuk tampilan form
* @constan {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
* Membuat variabel inputEmailElement untuk tampilan input email
* @constan {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
* Membuat variabel inputPasswordElement untuk tampilan input password
* @constan {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');


/**
* Membuat variabel expectedEmail untuk menyimpan informasi email sementara
* @constan {string}
*/
const expectedEmail = 'admin@dicoding.com';

/**
* Membuat variabel expectedPassword untuk menyimpan informasi password sementara
* @constan {string}
*/
const expectedPassword = 'superpassword';

// Comment : menambahkan aksi pada button
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  * Membuat variable email untuk menyimpan nilai email saat button ditekan
  * @constan {string}
  */
  const email = inputEmailElement.value;
  
  /**
  * Membuat variable password untuk menyimpan nilai password saat button ditekan
  * @constan {string}
  */
  const password = inputPasswordElement.value;
  
  /* Comment : memastikan bahwa nilai email dan password sesuai dengan nilai yang disimpan */
  if (email == expectedEmail && password == expectedPassword) {
    
    /* Comment : Jika sesuai maka program akan ke halaman home */
    goToHome();
 
  } else {
    
    /* Comment : namun jika tudak sesuai maka akan menampilkan informasi bahwa input salah */
    showPopUp();
  }
});
