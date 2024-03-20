function changeColor(color) {
  const umbrellaImg = document.getElementById("umbrella-img");
  umbrellaImg.src = `assets/${color}_umbrella.png`;
  const loader = document.getElementById("loader");
  loader.style.fill = `${
    color === "Blue" ? "#03c6fc" : color === "Yello" ? "#fcdb03" : "#fc03be"
  }`;
  document.body.style.backgroundColor = `${
    color === "Blue"
      ? "#bfedfa4b"
      : color === "Yello"
      ? "#fbf5cb59"
      : "#f8c1eb45"
  }`;
}

function previewLogo(event) {
  const file = event.target.files[0];
  if (file) {
    const logoImg = document.getElementById("logo-img");
    const uploadLabel = document.getElementById("upload-label");
    const crossIcon = document.getElementById("cross-icon");
    const umbrellaImg = document.getElementById("umbrella-img");
    const loader = document.getElementById("loader");
    const UploadIcon = document.getElementById("upload-icon");

    logoImg.style.display = "none";
    umbrellaImg.style.display = "none";
    loader.style.display = "block";

    UploadIcon.src = "assets/loader_icon.svg";
    UploadIcon.style.animation = "spin 4s linear infinite";

    uploadLabel.textContent = file.name;

    crossIcon.style.cursor = "pointer";
    crossIcon.style.visibility = "visible";
    crossIcon.onclick = function () {
      document.getElementById("logo-upload").value = "";
      uploadLabel.textContent = "Upload Logo";
      crossIcon.style.cursor = "default";
      crossIcon.onclick = null;
      crossIcon.style.visibility = "hidden";

      logoImg.style.display = "none";
      umbrellaImg.style.display = "block";
      loader.style.display = "none";
    };

    if (!logoImg.src || logoImg.src === "") {
      logoImg.style.display = "none";
    }

    setTimeout(function () {
      logoImg.src = URL.createObjectURL(file);
      logoImg.style.display = "block";
      umbrellaImg.style.display = "block";
      loader.style.display = "none";
      crossIcon.style.display = "block";
      UploadIcon.src = "assets/upload_icon.svg";
      UploadIcon.style.animation = "";
    }, 3000);
  }
}
