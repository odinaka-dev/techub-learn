//working on the navigation click event
const navList = document.querySelector(".list");
const menuBar = document.querySelector(".menu-bar");

menuBar.addEventListener("click", ()=> {
    navList.classList.toggle("show-item");
})


//the todo list click event
const textForm = document.querySelector('.createtodo');
const todosList = document.querySelector('.todos-list');

const generateTemplate = (todo) => {
    const html = `<li class="flex flex-row justify-between py-1 px-2 font-bold"
    >${todo} <i class="fa-solid fa-trash delete"></i>
    </li>`;

    todosList.innerHTML += html;
}

textForm.addEventListener("submit", e => {
    e.preventDefault();

    const todo = textForm.text.value.trim(); 
    if(todo.length){
        generateTemplate(todo);
        textForm.reset()
    }
});

// the delete button 

todosList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    };
});

// the functionality for the sign up click event
// regex patterns
const signHome = document.querySelector(".btn-signs");
const signUpPage = document.querySelector(".signup-page");
const signUp = document.querySelector('.signup');
const submit = document.querySelector(".submit");
const TickGood = document.querySelectorAll('.tick');
const warning = document.querySelectorAll('.warning');
const mainGrid = document.querySelector('.grid-featured');

// regex patterns 
const usernamePattern = /^[a-zA-Z]{6,12}$/;
const passwordPattern = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,16}$/;

signHome.addEventListener("click", () => {
    signUpPage.style.display = 'block';
    mainGrid.style.display = 'none';

})

const welcomeName = document.querySelector('.inname');

submit.addEventListener("click", () => {
    e.preventDefault();

    if(signUp.username.value.length < 6){
        mainGrid.style.display = 'none';
        signUpPage.style.display = 'block';
    } else if(signUp.password.value.length < 6){

        mainGrid.style.display = 'none';
        signUpPage.style.display = 'block';

    }else if(signUp.email.value.indexOf('@') === -1){

        mainGrid.style.display = 'none';
        signUpPage.style.display = 'block';

    }else {
    signUpPage.style.display = 'none';
    mainGrid.style.display = 'block';
    };
    welcomeName.textContent = signUp.username;

})

// the regex pattern key up code

signUp.username.addEventListener("keyup", e => {
    if(usernamePattern.test(e.target.value)){
        signUp.username.style.borderBottom = "1px solid lime";
        TickGood[0].style.display = 'block';
        warning[0].style.display = 'none';
    }else {
        signUp.username.style.borderBottom = "1px solid crimson";
        warning[0].style.display = 'block';
        TickGood[0].style.display = 'none';
    };
});

signUp.password.addEventListener("keyup", e => {
    if(passwordPattern.test(e.target.value)){
        signUp.password.style.borderBottom = '1px solid lime';
        TickGood[1].style.display = 'block';
        warning[1].style.display = 'none';
    }else {
        signUp.password.style.borderBottom = '1px solid crimson';
        warning[1].style.display = 'block';
        TickGood[1].style.display = 'none';
    };
});

signUp.email.addEventListener("keyup", e => {
    if(emailPattern.test(e.target.value)){
        signUp.email.style.borderBottom = '1px solid lime';
        TickGood[2].style.display = 'block';
        warning[2].style.display = 'none';
    }else {
        signUp.email.style.borderBottom = '1px solid crimson';
        warning[2].style.display = 'block';
        TickGood[2].style.display = 'none';
    };
});

// the faq accordion functionality
const faqPlus = document.querySelectorAll(".plus");
const faqMinus = document.querySelectorAll(".minus");
const FaqContent = document.querySelectorAll(".faq-contents")

faqPlus[0].addEventListener("click", ()=>{
    faqPlus[0].style.display ='none';
    faqMinus[0].style.display = 'block';
    FaqContent[0].style.display = 'block';
})
faqMinus[0].addEventListener("click", ()=> {
    faqPlus[0].style.display = 'block';
    faqMinus[0].style.display = 'none';
    FaqContent[0].style.display = 'none';
})

// the second
faqPlus[1].addEventListener("click", ()=>{
    faqPlus[1].style.display ='none';
    faqMinus[1].style.display = 'block';
    FaqContent[1].style.display = 'block';
})
faqMinus[1].addEventListener("click", ()=> {
    faqPlus[1].style.display = 'block';
    faqMinus[1].style.display = 'none';
    FaqContent[1].style.display = 'none';
})

// the third

faqPlus[2].addEventListener("click", ()=>{
    faqPlus[2].style.display ='none';
    faqMinus[2].style.display = 'block';
    FaqContent[2].style.display = 'block';
})
faqMinus[2].addEventListener("click", ()=> {
    faqPlus[2].style.display = 'block';
    faqMinus[2].style.display = 'none';
    FaqContent[2].style.display = 'none';
})

// the fourth

faqPlus[3].addEventListener("click", ()=>{
    faqPlus[3].style.display ='none';
    faqMinus[3].style.display = 'block';
    FaqContent[3].style.display = 'block';
})
faqMinus[3].addEventListener("click", ()=> {
    faqPlus[3].style.display = 'block';
    faqMinus[3].style.display = 'none';
    FaqContent[3].style.display = 'none';
})

// the fifth
faqPlus[4].addEventListener("click", ()=>{
    faqPlus[4].style.display ='none';
    faqMinus[4].style.display = 'block';
    FaqContent[4].style.display = 'block';
})
faqMinus[4].addEventListener("click", ()=> {
    faqPlus[4].style.display = 'block';
    faqMinus[4].style.display = 'none';
    FaqContent[4].style.display = 'none';
})



















