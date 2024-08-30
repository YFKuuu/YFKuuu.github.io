document.addEventListener("DOMContentLoaded", function() {
    // 判斷當前頁面語言
    const isEN = window.location.pathname.includes('/EN/');
    const navbarFile = isEN ? '../../public/navbar_EN.html' : '../../public/navbar.html';

    fetch(navbarFile)
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;

            // 動態添加 selected 標籤
            const currentUrl = window.location.pathname;
            console.log('Current URL:', currentUrl); // 檢查當前 URL
            const navLinks = document.querySelectorAll('.navbar-item a');

            navLinks.forEach(link => {
                const href = link.getAttribute('href');
                const fullPath = new URL(href, window.location.origin).pathname; // 將相對路徑轉換為絕對路徑
                console.log('Checking link:', fullPath); // 檢查每個 link 的 fullPath


                // 根據 href 的不同情況來進行匹配
                if ((currentUrl === fullPath) ||
                    (currentUrl === '/' && fullPath === '/index.html') ||
                    (currentUrl === '/EN/' && fullPath === '/EN/index.html') ||
                    (currentUrl.endsWith('/index.html') && fullPath === '/index.html') ||
                    (currentUrl.endsWith('/about.html') && fullPath === '/about.html')) {
                    console.log('Match found:', fullPath); // 當找到匹配的 link
                    link.parentElement.classList.add('selected');
                }
            });

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

            // Tab functionality
            const tabButtons = document.querySelectorAll('.tab-button');
            const projectCards = document.querySelectorAll('.project-card');

            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');

                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');

                    projectCards.forEach(card => {
                        if (card.getAttribute('data-category') === category) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });

            // 初始化顯示 UI/UX 項目
            document.querySelector('.tab-button[data-category="ui-ux"]').click();
        })
        .catch(error => console.error('Error loading navbar:', error));
});
