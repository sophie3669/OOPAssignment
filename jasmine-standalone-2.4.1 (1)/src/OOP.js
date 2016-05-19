    var NoteApplication = function (author){
    this.author = author;
    var notelist=[];
    this.create = function(note_content)
            {
             notelist.push(note_content);
             
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