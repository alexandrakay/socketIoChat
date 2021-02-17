//this schema returns date and content of chats
const mongoose = require("mongoose")


const MessageSchema = mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    content: {
        type: String,
        required: true,
        minLength: 1,
    }
})

MessageSchema.statics.latest = (count) => {
    return MessageModel.find({}).sort({"_id": "desc"}).limit(count)
}

MessageSchema.statics.create = (content) => {
    let message = new MessageModel({
        date: new Date(),
        content: content
    })

    return message.save()
}


const MessageModel = mongoose.model("Message", MessageSchema)

module.exports = {
    Schema: MessageSchema,
    Model: MessageModel
}