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

loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});
