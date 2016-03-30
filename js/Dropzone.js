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
    myDropzone = this; // closure

    
    submitButton.addEventListener("click", function(e){
    	e.preventDefault();
    	e.stopPropagation();
    	myDropzone.processQueue();
    });
    this.on("addedfile", function(file, resp ) {
    	console.log( file );
    	console.log( resp );
    });

    this.on("complete", function(file) {
    	//myDropzone.removeFile(file);
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
