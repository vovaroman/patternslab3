
class Post{
    title:string;
    body:string;
    date:Date;
    composedPost:string;

    constructor(title,body,date){

        this.composedPost =
        `
            <div class="container">
            <div class="col-md-12">
            <h1>${title}</h1>
            <p>${body}</p>
            <div>
            <span class="badge">${date}</span>
        `
    }
    getPost = () => { return this.composedPost }


}

export default Post;