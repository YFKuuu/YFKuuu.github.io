// js/navbar-loader.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('../../public/singlePage navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;

            // 重新綁定 toggleMenu 函數到點擊事件
            const menuIcon = document.getElementById('menuIcon');
            const modal = document.getElementById('modal');
            const closeIcon = document.getElementById('closeIcon');

            menuIcon.addEventListener('click', function() {
                if (modal.classList.contains('show')) {
                    modal.classList.remove('show');
                    setTimeout(() => {
                        modal.style.display = 'none'; // 等待過渡完成後隱藏
                    }, 400);
                } else {
                    modal.style.display = 'flex'; // 需要在添加 show 類之前設置 display
                    setTimeout(() => modal.classList.add('show'), 10); // 添加 show 類別以觸發過渡
                }
                menuIcon.classList.toggle('close');
            });

            closeIcon.addEventListener('click', function() {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none'; // 等待過渡完成後隱藏
                }, 400);
                menuIcon.classList.remove('close');
            });

            modal.addEventListener('click', function(event) {
                if (event.target === modal) {
                    modal.classList.remove('show');
                    setTimeout(() => {
                        modal.style.display = 'none'; // 等待過渡完成後隱藏
                    }, 400);
                    menuIcon.classList.remove('close');
                }
            });

            // Navbar scrolled to add bg color
            window.addEventListener('scroll', function() {
                const navbar = document.getElementById('navbar');
                if (window.scrollY > 30) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
        })
        .catch(error => console.error('Error loading navbar:', error));
});
