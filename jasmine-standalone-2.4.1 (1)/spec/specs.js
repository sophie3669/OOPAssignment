    var NoteApplication = function (author){
    this.author = author;
    var notelist=[];
    this.create = function(note_content)
            {
               if (note_content == ""){

                console.log("you need to insert a string value")
              }
              else{
                 notelist.push(note_content);
              }
            
             
             }
     this.listNotes = function(){
         for (x = 0 ; x < notelist.length ; x++){

          return "Note ID = " + notelist[x], this.note_content , "By author =" + this.author;
         }


     }

   this.get = function(note_id){
          var result = this.notelist[note_id];
              return result;
             }

  this.search = function(search_text, searchstring){
    var str = "searchstring";
    var n = str.search(search_text);
    return search_text, this.listNotes;

  }

   this.delete = function(note_id){
    var content = this.notelist[note_id];
       delete content;


   }
   this.edit = function(note_id,new_content){

    var prev = note_content[note_id];
    var newcont  = new_content;

    prev.replace(prev,newcont)
   }

};

     var newAuthor = new NoteApplication("sophie");
     newAuthor.create("i am a new author");

describe("NoteApplication", function() {
 // this checks the existence of the function   

 it("should have create property", function(){
    expect(newAuthor.hasOwnProperty("create")).toBe(true);

 });
 it("should have a listNotes property", function(){
    expect(newAuthor.hasOwnProperty("listNotes")).toBe(true);

 });

 it("should have get property", function(){
    expect(newAuthor.hasOwnProperty("get")).toBe(true);

 });

 it("should have search property", function(){
    expect(newAuthor.hasOwnProperty("search")).toBe(true);

 });
  it("should have delete property", function(){
    expect(newAuthor.hasOwnProperty("delete")).toBe(true);

 });
it("should have edit property", function(){
    expect(newAuthor.hasOwnProperty("edit")).toBe(true);

 });

  // this checks if these properties are functions

it("should have a property which is a function called create", function(){
    expect(typeof newAuthor.create).toBe(typeof (function(){}));

 });

it("should have a property which is a function called listNotes", function(){
    expect(typeof newAuthor.listNotes).toBe(typeof (function(){}));

 });

it("should have a property which is a function called get", function(){
    expect(typeof newAuthor.get).toBe(typeof (function(){}));

 });

it("should have a property which is a function called search", function(){
    expect(typeof newAuthor.search).toBe(typeof (function(){}));

 });

it("should have a property which is a function called delete", function(){
    expect(typeof newAuthor.delete).toBe(typeof (function(){}));

 });
it("should have a property which is a function called search", function(){
    expect(typeof newAuthor.edit).toBe(typeof (function(){}));

 });









  it("should return a name of an author", function() {
    expect(newAuthor.author).toBe("sophie");
  });
  
   it("should return an empty notelist at instantiation", function(){
   
     expect(newAuthor.listNotes().length).toBeGreaterThan(1);
   });
   
   it("should return a string on the create function call", function(){
   
         expect( newAuthor.create("i am a new author")).toBeUndefined();
   }); 


   
  
   
  

});
