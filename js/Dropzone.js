Dropzone.options.uploadWidget = {
  autoProcessQueue: false,
  paramName: 'file',
  maxFilesize: 2, // MB
  maxFiles: 1,
  dictDefaultMessage: 'Arrastra una factura',
  acceptedFiles: 'application/xml',
  init: function() {
    /*this.on('addedfile', function( file, resp ){
      console.log( file );
      console.log( resp );
    });
*/
var submitButton = document.querySelector("#submit")
    myDropzone = this; 
    submitButton.addEventListener("click", function(e){
    	myDropzone.processQueue();
    });

    this.on("addedfile", function(file, resp ) {
    	console.log( file );
    	console.log( resp );
      var removeButton = Dropzone.createElement("<button>Remove file</button>");
      
      removeButton.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        myDropzone.removeFile(file);
      });
      file.previewElement.appendChild(removeButton);

    });

    this.on("complete", function(file) {
    	
    });

    this.on("success", 
    	myDropzone.processQueue.bind(myDropzone)
    );

    var cleanButton=document.querySelector("button#clear")
    cleanButton.addEventListener("click", function(e) {
      myDropzone.removeAllFiles();
    });

  }
  
};
