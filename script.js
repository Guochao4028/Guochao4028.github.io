

// 获取 logo-and-title 元素
const logoAndTitle = document.getElementById('logoAndTitle');

// 为元素添加点击事件监听器
if (logoAndTitle) {
    logoAndTitle.addEventListener('click', function () {
        // 这里可以添加你想要执行的代码，例如跳转到首页
        window.location.href = '/';
    });
}
