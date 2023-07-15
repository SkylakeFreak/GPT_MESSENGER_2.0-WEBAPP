interface Message{
    text:string;
    createdAt:Admin.firestore.Timestamp;
    user:{
        _id:string;
        name:string;
        avatar:string;
    };
}