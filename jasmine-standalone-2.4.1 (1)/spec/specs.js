    var NoteApplication = function (author){
    this.author = author;
    this.notelist=[];
    this.create = function(note_content)
            {
             this.notelist[this.notelist.length] = this.note_content;
             
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

describe("NoteApplication", function() {
    
     var newAuthor = new NoteApplication("sophie");
  newAuthor.author;
  newAuthor.notelist;
  newAuthor.create;
  
  
  it("should return a name of an author", function() {
    expect(newAuthor.author).toBe("sophie")
  });
  
   it("should return an empty notelist at instantiation", function(){
   
     expect(newAuthor.notelist.length).toBe(0)
   });
   
   it("should return an unempty notelist on the create function call", function(){
   
   
   }); 
   
  
   
  

});