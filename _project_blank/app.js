/*
    Project Name : Main App,
    Date : 04/11/2021,
    Creator : Tanvir Jishan,
    version : 1.0,
    GitHub Project Link : https://github.com/Tanvirmehedi/JavascriptProject,
    GitHub : https://github.com/Tanvirmehedi,
    Linkedin :  www.linkedin.com/in/tanvirjisn
*/
const title = document.title = 'Hide Search Bar';
const h1 = document.querySelector('main h1');
h1 ? h1.textContent = title : document.querySelector('body').textContent = "No Title";