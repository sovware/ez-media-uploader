/* eslint-disable */
var ezMediaUploader = new EzMediaUploader({
  containerID: "thumbnail-uploader",
  allowedFileFormats: ["images"],
  maxTotalFileSize: 4096,
  _oldFiels: [
    {
      attachmentID: '1',
      url:
        "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      type: "image"
    },
    {
      attachmentID: '2',
      url:
        "https://images.unsplash.com/photo-1575761410364-8a3eb7e4edfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      type: "image"
    },
    {
      attachmentID: '3',
      url:
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=750&q=80",
      type: "image"
    },
    {
      attachmentID: '4',
      url:
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=750&q=80",
      type: "image"
    },
    {
      attachmentID: '5',
      url:
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=750&q=80",
      type: "image"
    },
    {
      attachmentID: '3',
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
