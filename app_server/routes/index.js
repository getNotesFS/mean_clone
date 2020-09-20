/*AQUI VAN LAS RUTAS*/

const express = require('express');
const router = express.Router();

/*Importar controladores */

const ctrlHomepage = require('../controllers/homepage');
const ctrlAbout = require('../controllers/about');
const ctrlContact = require('../controllers/contact');
const ctrlShopping= require('../controllers/shopping');
const ctrlMenu= require('../controllers/menu');

const ctrlOfferts= require('../controllers/offerts');

/* Definir las rutas de mis páginas*/

/*1.- Locations*/

router.get('/', ctrlHomepage.homepage);
 
/*2.- About*/
router.get('/about', ctrlAbout.about);

/*3.- Contact*/
router.get('/contact', ctrlContact.contact);

/*34.- Menu*/
router.get('/menu', ctrlMenu.menu);

/*34.- Offerts*/
router.get('/offerts', ctrlOfferts.offerts);
/*7.- Checkout*/
router.get('/shopping-cart', ctrlShopping.cart);
router.get('/checkout', ctrlShopping.checkout);
router.get('/tracking', ctrlShopping.tracking);
router.get('/ordercomplete', ctrlShopping.ordercomplete);




module.exports = router;
