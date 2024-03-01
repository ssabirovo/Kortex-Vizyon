export interface iAuthor {
  imgUrl: string;
  name: string;
  position: string;
}
export interface iBlog {
  imgUrl: string;
  date: string;
  title: string;

  blogUrl: string;
  author: iAuthor;
  content: string[];
}
export interface iBlogs {
  blog1: iBlog;
  blog2: iBlog;
  blog3: iBlog;
}

export const blogs: iBlogs = {
  blog1: {
    imgUrl:
      "https://nypost.com/wp-content/uploads/sites/2/2023/04/shutterstock_1599713257.jpg",
    date: "3 years ago",
    title: "Is recycled cotton sustainable?",

    blogUrl:
      "https://www.quora.com/Is-recycled-cotton-sustainable/answer/Rudradeep-Sinha",
    author: {
      imgUrl:
        "https://qph.cf2.quoracdn.net/main-thumb-144356137-200-wgtszsvjxmjbgdhsbbdbcspjiosirktm.jpeg",
      name: "Rudradeep Sinha",
      position: "Merchandising Manager",
    },
    content: [
      "Cotton is a resource intensive crop. It requires large amounts of water and chemicals to be grown. Hence, the current cotton production methods are not sustainable for the long run keeping in mind the exorbitant demand.",
      "Hence, there is a need to use recycled yarn and fabric to conserve the environment. Recycled cotton yarn is a combination of pre-consumer and post-consumer cotton: ",
      "1. Pre-consumer cotton comprises cotton droppings (cotton fibre that falls off during spinning of regular yarn) and other cotton waste streamed during the manufacturing process. It constitutes around 10-15% of the recycled cotton.",
      "2. Rest is constituted by post-consumer cotton which comes from discarded textile products.",
      "Following are the steps to make recycled cotton:",
      "a. Post-consumer waste undergoes a ripping process where the fabric and yarn are shredded to fibres.",
      "b. Since the post-consumer waste is a dyed material, it is then neutralised to original colour.",
      "c. This is then mixed with cotton droppings to form new element.",
      "d. Since this material is short in length, some amount of virgin cotton is mixed.",
      "e. Spinning takes up hereafter.",
      "The GRS (Global Recycled Standard) Certificate is an international standard that certifies recycled content on a product. It is the most reliable standard to check the authenticity of recycled cotton as of date. Cotton yarn having 65% of recycled content can be certified as a 100% recycled product by the GRS. Several mills in Southern India spin recycled cotton which is approved as per GRS standards.",
    ],
  },
  blog2: {
    imgUrl: "/src/assets/images/blog-img.png",
    date: "Oct 23, 2023",
    title: "How SaaS Startup Funding Works and Tips to Land It",
    blogUrl: "",
    author: {
      imgUrl: "/src/assets/images/author.png",
      name: "Radheykcotweaving",
      position: "TC Lead & Regional TC Inspector",
    },
    content: [],
  },
  blog3: {
    imgUrl: "/src/assets/images/blog-img.png",
    date: "Oct 23, 2023",
    title: "How SaaS Startup Funding Works and Tips to Land It",
    blogUrl: "",
    author: {
      imgUrl: "/src/assets/images/author.png",
      name: "Md. Mustafizur Rahman",
      position: "TC Lead & Regional TC Inspector",
    },
    content: [],
  },
};
