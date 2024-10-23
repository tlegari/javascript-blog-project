class BlogUser {

    
    /**
     * Constructor for creatin a new User object
     * @param {string} username - The username of the user
     * @param {string} fullName - The full name of the user
     */
    
    constructor(username, fullName) {
        this.username = username;
        this.fullName = fullName;
        this.posts = [];
    }

     
    /**
     * @param {string} title - The title of the post
     * @param {string} content - The content of the post
     */

    createPost(title, content) {
        const newPost = new BlogPost(title, content, this.fullName);
        this.posts.push(newPost);
    }

    editPost(postIndex, newTitle, newContent) {
        if (postIndex >= 0 && postIndex < this.posts.length) {
            this.posts[postIndex].editPost(newTitle, newContent);
        } else {
            console.log("Post index out of range.");
        }
    }

    deletePost() {
        if (this.posts.length > 0) {
            const deletedPost = this.posts.pop();
            console.log(`Deleted post: ${deletedPost.title}`);
        } else {
            console.log("No posts to delete.");
        }
    }

     /**
     * Display all post created by user
     */

    displayPosts() {
       
        this.posts.forEach((post, index) => {
            console.log(`Post: ${index + 1} \n${post.showPost()}\n`);
        });
    }
}


class BlogPost {

     /**
     * Constructor of creating a new post object
     * @param {string} title - the title of the post's creator
     * @param {string} content - the content of the post
     * @param {string} author - the author of the post
     */
    constructor(title, content, author) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.createdAt = new Date();
    }

    editPost(newTitle, newContent) {
        this.title = newTitle;
        this.content = newContent;
    }


    showPost() {
        return `Title: ${this.title}\nContent: ${this.content}\nAuthor: ${this.author}\nCreated At: ${this.createdAt.toLocaleString()}`;
    }
}


// creating users
const user1 = new BlogUser("thabo_sethole", "Thabo Sethole");
const user2 = new BlogUser("Lebo_mokwena", "Lebo Mokwena");

// creating posts for user1
user1.createPost("First day at Gym", "10 steps to kick-start you Gym routine.");
user1.createPost("How to bulk-up", "How much protein you should eat to bulk-up.");

// creating posts for user2
user2.createPost("Jane's budget diaries", "This is how i stick to my budget through out the month.");
user2.createPost("Saving Tips 2024", "100 Envelop challeng is a fun challenge to keep you on track.");

// Display posts for both users
console.log("Posts by Thabo Sethole:");
user1.displayPosts();

console.log("Posts by Lebo Mokwena:");
user2.displayPosts();

// Edit a post 
user1.editPost(0, "My Edited Post", "This is the edited content of my first post.");

console.log("After editing Thabo's first post:");
user1.displayPosts();

// Delete  post
user1.deletePost();
console.log("After deleting the last post by Thabo:");
user1.displayPosts();
