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
    // Basic Validation
    if(bookName.value=='' && author.value=='' && year.value==''){
        // Creating Element
        alert("Please Input Your Text (Don't Blank Input Field)")
    }else{
        const newRow = document.createElement('tr');
        // Append Node 
        tableRow.appendChild(newRow);

        const createBook = document.createElement('td');
        createBook.textContent=bookName.value;
        newRow.appendChild(createBook);
        bookName.value='';

        const createAuthor = document.createElement('td')
        createAuthor.textContent=author.value;
        newRow.appendChild(createAuthor);
        author.value='';

        const createYear = document.createElement('td')
        createYear.textContent=year.value;
        newRow.appendChild(createYear);
        year.value='';

        const createDeleteBtn = document.createElement('td');
              createDeleteBtn.classList='btn btn-danger text-danger ';
              createDeleteBtn.setAttribute('id','delete_btn')
              createDeleteBtn.textContent="DELETE";
              newRow.appendChild(createDeleteBtn);

            //   delete button
           
        const trl = document.querySelector('#list_row tr');

        newRow.addEventListener('click',function(c){
            if(c.target.id == 'delete_btn'){
                const list = c.target.parentElement;
                newRow.parentNode.removeChild(list);
            }
        })
    }
})

