document.addEventListener('DOMContentLoaded', function() {
    // Navbar scrolled to add bg color
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const menuIcon = document.getElementById('menuIcon');
    const modal = document.getElementById('modal');
    const closeIcon = document.getElementById('closeIcon');

    menuIcon.addEventListener('click', function() {
        if (modal.classList.contains('show')) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none'; // 等待过渡完成后隐藏
            }, 400);
        } else {
            modal.style.display = 'flex'; // 需要在添加 show 类之前设置 display
            setTimeout(() => modal.classList.add('show'), 10); // 添加 show 类别以触发过渡
        }
        menuIcon.classList.toggle('close');
    });

    closeIcon.addEventListener('click', function() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none'; // 等待过渡完成后隐藏
        }, 400);
        menuIcon.classList.remove('close');
    });

    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none'; // 等待过渡完成后隐藏
            }, 400);
            menuIcon.classList.remove('close');
        }
    });
});
