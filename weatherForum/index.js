// var joinUsForm = document.getElementsByClassName("join-us")[0];
// var joinUsButton = joinUsForm.querySelector('input[type="button"]');
// joinUsButton.addEventListener("click", function(){
//     window.open("login/login.html", "_blank");
// });

// document.getElementsByClassName("how-this-work").addEventListener("click", function(event){
//     event.preventDefault();

// });

// document.getElementsByClassName("user").addEventListener("mouseover", function(){
    
// });

const aboutThisSite = document.querySelector('.about-this-site');
// 获取menu元素
const menu = document.getElementById('menu');

// 监听about-this-site元素的鼠标悬停事件
aboutThisSite.addEventListener('mouseover', () => {
    // 修改menu元素的高度
    menu.style.height = '200px'; // 或者你认为合适的高度
});

// 监听about-this-site元素的鼠标离开事件
aboutThisSite.addEventListener('mouseout', () => {
    // 恢复menu元素的高度为初始状态
    menu.style.height = ''; // 恢复默认高度
});