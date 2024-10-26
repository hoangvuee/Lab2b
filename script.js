
// Mảng chứa đường dẫn đến các hình ảnh
const images = [
    'images/main/image-1.jpg',
    'images/main/image-2.jpg',
    'images/main/image-3.jpg'
];

// Vị trí hiện tại của ảnh
let currentIndex = 0;

// Lấy phần tử .imgcontent
const imgContent = document.querySelector('.imgcontent');

const circles = document.querySelectorAll('.circlechangeimg');

// Hàm cập nhật ảnh
function updateImage() {
    imgContent.style.backgroundImage = `url(${images[currentIndex]})`;
    updateCircle();

}
function updateCircle() {
    circles.forEach((circle, index) => {
        if (index === currentIndex) {
            circle.style.backgroundColor = 'white';
        } else {
            circle.style.backgroundColor = 'black';
        }
    });
}

// Xử lý sự kiện cho nút buttonpre
document.querySelector('.buttonpre').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

// Xử lý sự kiện cho nút buttonnext
document.querySelector('.buttonnext').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Khởi tạo ảnh ban đầu
updateImage();
