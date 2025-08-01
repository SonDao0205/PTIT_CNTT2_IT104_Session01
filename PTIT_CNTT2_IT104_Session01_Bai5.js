const response = {
    data: {
        id: 1,
        title: "Destructuring in JavaScript",
        author: {
            name: "Dev",
            email: "Dev@gmail.com",
        },
    },
};

const [author,title] = [response.data.author,response.data.title];
const [name,email] = [author.name,author.email];
console.log(`Title : ${title}`);
console.log(`Author : ${author}`);
console.log(`AuthorName : ${name}`);
console.log(`AuthorEmail : ${email}`);