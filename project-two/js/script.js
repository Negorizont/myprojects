var activeVideo = document.querySelector('.video-active');
var activeImage = activeVideo.querySelector('img');
var activeButton = activeVideo.querySelector('input');
var activeVideo = activeVideo.querySelector('video');

var previewVideo = document.querySelector('.video-preview1');
var previewImage = previewVideo.querySelector('img');
var previewButton = previewVideo.querySelector('input');
var previewVideo = previewVideo.querySelector('video');

var previewVideoTwo = document.querySelector('.video-preview2');
var previewImageTwo = previewVideoTwo.querySelector('img');
var previewButtonTwo = previewVideoTwo.querySelector('input');
var previewVideoTwo = previewVideoTwo.querySelector('video');

//Меняем видео
var swapVideo = function (button, image, video) {
	button.addEventListener('click', function () {
		var imgSrc = activeImage.src;
		var videoSrc = activeVideo.src;
		
		activeImage.src = image.src;
		activeVideo.src = video.src;

		image.src = imgSrc;
		video.src = videoSrc;

		activeImage.classList.remove('visibility-class');
		activeButton.classList.remove('visibility-class');
		activeVideo.style.visibility = 'hidden';
	});
};
swapVideo(previewButton, previewImage, previewVideo);
swapVideo(previewButtonTwo, previewImageTwo, previewVideoTwo);

//Запуск видео
var playVideo = function () {
		activeButton.addEventListener('click', function () {
		activeImage.classList.add('visibility-class');
		activeButton.classList.add('visibility-class');
		activeVideo.style.visibility = 'visible';
		activeVideo.play();
	});
};
playVideo(); 

