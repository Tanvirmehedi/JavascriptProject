/*
    Project Name : BookList App With Dom,
    Date : 04/11/2021,
    Creator : Tanvir Jishan,
    version : 1.0,
    GitHub Project Link : https://github.com/Tanvirmehedi/JavascriptProject,
    GitHub : https://github.com/Tanvirmehedi,
    Linkedin :  www.linkedin.com/in/tanvirjisn
*/
const title = document.title = 'BookList App';
const h1 = document.querySelector('main h1');

h1? h1.textContent = title : "";

// select Element
const bookName = document.querySelector('#bookName');
const author = document.querySelector('#author');
const year =document.querySelector('#year');
const SubmitButton =document.querySelector('.btn');
const tableRow = document.querySelector('#list_row');
// Event Listening
SubmitButton.addEventListener('click',function(e){
    e.preventDefault();
    if(bookName.value=='' && author.value=='' && year.value==''){
        console.log("give the Value ")
    }
})
// Basic Validation

// Creating Element

// Append Node 