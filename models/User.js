import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    country: String,
})

export default mongoose.model("User", UserSchema)

