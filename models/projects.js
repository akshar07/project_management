var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var schema=new Schema({
    client:{type:String,required:false},
    start_date:{type:Date,required:true},
    end_date:{type:Date,required:true},
    manager:{type:String,required:true},
    title:{type:String,required:true},
    users:{type:Schema.Types.ObjectId,ref:'User'},
    tasks:[{type:Schema.Types.ObjectId, ref:'Task'}]
});

module.exports=mongoose.model('Project',schema);