if (window.File && window.FileReader && window.FileList) {
  

  function loadVideo(inputFile) {
    const video = document.getElementById("videoId");
    validateFileType(inputFile);
    video.onerror = function (e) {
      alert("Error invalid format video. Accepted: MP4 | Webm | Ogg");
    };

    if (inputFile) {
      inputFile.addEventListener("change", function () {
        const file = inputFile.files[0];
        const videourl = URL.createObjectURL(file);
        video.setAttribute("src", videourl);
        alert("Cargando....");
        play(video);
      });
    }
  }

  function play(video) {
    video.play();
  }

  function pause(video) {
    video.pause();
  }

  const fileTypes = ["video/mp4", "video/webm", "video/ogg"];

  function validateFileType(file) {
    return fileTypes.includes(file.type);
  }
       
} else {
    alert("La Api File no es soportado en el navegador.");
}