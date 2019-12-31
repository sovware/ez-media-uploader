/* eslint-disable */
var ezMediaUploader = new EzMediaUploader({
  containerID: "thumbnail-uploader"
});
ezMediaUploader.init();

var form = document.getElementById("uploader-form");
form.addEventListener("submit", function(e) {
  e.preventDefault();

  var files_meta = ezMediaUploader.getFilesMeta();
  var the_files = ezMediaUploader.getTheFiles();
  var hasValidFiles = ezMediaUploader.hasValidFiles();

  if (hasValidFiles) {
    console.log("Uplaoder has valid files");
    console.log("files", files_meta);
    console.log("the_files", the_files);

    alert("Uplaoder has valid files");
  } else {
    console.log("Uplaoder has invalid files");
    console.log("the_files", the_files);

    alert("Uplaoder has invalid files");
  }
});
