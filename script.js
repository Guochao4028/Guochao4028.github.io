

// 获取 logo-and-title 元素
const logoAndTitle = document.getElementById('logoAndTitle');

// 为元素添加点击事件监听器
if (logoAndTitle) {
    logoAndTitle.addEventListener('click', function () {
        // 这里可以添加你想要执行的代码，例如跳转到首页
        window.location.href = './index.html';
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll('.service-item');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    serviceItems.forEach(item => {
        observer.observe(item);
    });
});
