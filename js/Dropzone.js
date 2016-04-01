 Dropzone.options.myAwesomeDropzone = { 
  //paramName: "file",
  autoProcessQueue: false,
  uploadMultiple: true,
  parallelUploads: 1,
  maxFiles: 1,
  maxFilesize: 10, //MB
  addRemoveLinks: true,
  previewsContainer: ".dropzone-previews",
  dictRemoveFile: "Eliminar",
  dictCancelUpload: "Cancel",
  dictDefaultMessage: "Arrastra la factura aqui",
  dictFileTooBig: "Archivo demasiado grande: 10 MB",
  dictMaxFilesExceeded: "Solo se puede enviar una factura",
  //acceptedFiles: ".xml",

    init: function() {
    var myDropzone = this;
    
    $("#submit-all").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      myDropzone.processQueue();
    });

    myDropzone.on("addedfile", function (file) {
      console.log(file)
    });
    
    myDropzone.on('sending', function(file, xhr, formData) {
      console.log(file, xhr, formData)
    });

    myDropzone.on("complete", function (file) {
      if (myDropzone.getUploadingFiles().length === 0 && myDropzone.getQueuedFiles().length === 0) {
        //window.location.reload();
        myDropzone.removeFile(file)
        console.log(file)
      }
    });

   }

 }