import Post from './Post';
import fs from 'fs';


class PostSystem{
    posts:Array<Post> = new Array<Post>();
    postBase:string;
    run(){
        fs.readFile('POSTS.TXT', 'utf8', function(err, contents) {
            this.postBase
            console.log(contents);
        });
    }


}


export default PostSystem;