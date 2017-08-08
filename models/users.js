var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var validator=require('mongoose-unique-validator')

var schema=new Schema({
    displayName:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    imageurl:{type:String,required:false},
    manager_acces:{type:Boolean,required:false},
    admin_acces:{type:Boolean,required:false},
    projects:[{type:Schema.Types.ObjectId,ref:'Projects'}]
});
schema.plugin(validator)
module.exports=mongoose.model('User',schema);