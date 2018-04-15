requestFileSystem()
    .then(fileSystem => getFile(fileSystem, "wtf.txt",true))
    .then(file => createWriter(file))
    .then(writer => writer.write(new Blob(["alpha"], {type: "application/json"}))
    .then(success => console.log("SUCCESS"), failure => console.log("FAILURE"))