# EZ Media Uploader
A drag &amp; drop media uploader plugin

## Uses
### JS
```

// Initialize the uploader
var ezMediaUploader = new EzMediaUploader({
  containerID: "thumbnail-uploader"
});

ezMediaUploader.init();

// Use on a form
var form = document.getElementById("uploader-form");
form.addEventListener("submit", function(e) {
  e.preventDefault();

  var files_meta    = ezMediaUploader.getFilesMeta();
  var the_files     = ezMediaUploader.getTheFiles();
  var hasValidFiles = ezMediaUploader.hasValidFiles();

  if ( hasValidFiles ) {
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

```

### HTML
```
<div id="thumbnail-uploader" class="ez-media-uploader"
    data-type="images"
    data-min-file-items="0"
    data-max-file-items="1"
    data-max-file-size="10"
    data-max-total-file-size="0"
    data-allow-multiple="1"
    data-show-alerts="1"
    data-show-file-size="1"
    data-featured="false"
    data-allow-sorting="1"
    data-show-info="1"
    data-uploader-type="file"
    >
    <!-- Loading Image -->
    <div class="ezmu__loading-section ezmu--show">
        <span class="ezmu__loading-icon">
            <span class="ezmu__loading-icon-img-bg"></span>
        </span>
    </div>

    <!-- If the uploader has old files -->
    <div class="ezmu__old-files">
        <span
            class="ezmu__old-files-meta"
            data-attachment-id="1"
            data-url="https://images.unsplash.com/photo-1501183007986-d0d080b147f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            data-size="5"
            data-type="image"
        ></span>
        <span
            class="ezmu__old-files-meta"
            data-attachment-id="2"
            data-url="https://images.unsplash.com/photo-1575761410364-8a3eb7e4edfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            data-size="200"
            data-type="image"
        ></span>
        <span
            class="ezmu__old-files-meta"
            data-attachment-id="3"
            data-url="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjF9&auto=format&fit=crop&w=750&q=80"
            data-size="200"
            data-type="image"
        ></span>
    </div>

    <!-- For customizing the alert text -->
    <div class="ezmu-dictionary">
        <!-- Label Texts -->
        <span class="ezmu-dictionary-label-featured">Featured</span>
        <span class="ezmu-dictionary-label-drag-n-drop">Drag & Drop</span>
        <span class="ezmu-dictionary-label-drop-here">Drag Files Here</span>
        <span class="ezmu-dictionary-label-or">or</span>
        <span class="ezmu-dictionary-label-select-files">Choose</span>
        <span class="ezmu-dictionary-label-add-more">Add More</span>
        <span class="ezmu-dictionary-label-change">Change</span>

        <!-- Alert Texts -->
        <span class="ezmu-dictionary-alert-max-file-size">
            The maximum limit for a file is __DT__
        </span>
        <span class="ezmu-dictionary-alert-max-total-file-size">
            The maximum limit for total file size is __DT__
        </span>
        <span class="ezmu-dictionary-alert-min-file-items">
            The minimum limit for total file is __DT__
        </span>
        <span class="ezmu-dictionary-alert-max-file-items">
            The maximum limit for total file is __DT__
        </span>
            
        <!-- Info Text -->
        <span class="ezmu-dictionary-info-max-file-size" data-show='1'>
            The maximum allowed file size is __DT__
        </span>
        <span class="ezmu-dictionary-info-max-total-file-size" data-show='1'>
            The maximum total allowed file size is __DT__
        </span>
        <span class="ezmu-dictionary-info-min-file-items" data-show='1'>
            The minimum __DT__ files are required
        </span>
        <span class="ezmu-dictionary-info-max-file-items" data-show='1' data-featured="1" data-pin="1">
            Unlimited files are allowed
        </span> 
        <span class="ezmu-dictionary-info-type" data-show='1'>
            Allowed file types are __DT__
        </span>
    </div>
</div>
```
