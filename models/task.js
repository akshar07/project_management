var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var schema=new Schema({
    task_name:{type:String,required:true},
    category:{type:String,required:true},
    task_name:{type:String,required:true},
    assigned_to:{type:String,required:true},
    start_date:{type:Date,required:true},
    end_date:{type:Date,required:true},
    assigned_to:{type:Number,required:true},
    description:{type:String,required:false},
    project:{type:Schema.Types.ObjectId,ref:'Project'}
});

module.exports=mongoose.model('Task',schema);