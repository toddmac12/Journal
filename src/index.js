import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Entry, LetterCounts } from './entry.js';
$(document).ready(function () {
  $('#entry-checker-form').submit(function (event) {
    event.preventDefault();
    let title = $("#title").val();
    let body = $("#body").val();
    console.log(entry);
    const entry = new Entry(title, body);
    console.log(entry.numberofWords());
    console.log(entry.countVC());
    console.log(entry.getTeaser());
  })
});