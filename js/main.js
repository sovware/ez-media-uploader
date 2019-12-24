/* eslint-disable */
var ezMediaUploader = new ezMediaUploader({
  containerID: "thumbnail-uploader",
  allowedFileFormats: ["images"],
  maxTotalFileSize: 4096,
  _oldFiels: [
    {
      url:
        "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      type: "image",
    },
    {
      url:
        "https://images.unsplash.com/photo-1575761410364-8a3eb7e4edfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      type: "image"
    },
    {
      url:
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=750&q=80",
      type: "image"
    }
  ]
});
ezMediaUploader.init();

var form = document.getElementById("uploader-form");
form.addEventListener("submit", function(e) {
  e.preventDefault();

  var files = ezMediaUploader.getFiles();
  var hasValidFiles = ezMediaUploader.hasValidFiles();

  if ( hasValidFiles ) {
    console.log("Uplaoder has valid files");
    console.log("files", files);

    alert("Uplaoder has valid files");
  } else {
    console.log("Uplaoder has invalid files");
    console.log("files", files);

    alert("Uplaoder has invalid files");
  }
});
