export interface iAuthor {
  imgUrl: string;
  name: string;
  position: string;
}
export interface iBlog {
  imgUrl: string;
  date: string;
  title: string;
  path: keyof typeof blogs;
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
    path: "blog1",
    imgUrl:
      "https://nypost.com/wp-content/uploads/sites/2/2023/04/shutterstock_1599713257.jpg",
    date: "3 years ago",
    title: "Is recycled cotton sustainable? ",

    blogUrl:
      "https://www.quora.com/Is-recycled-cotton-sustainable/answer/Rudradeep-Sinha",
    author: {
      imgUrl:
        "https://qph.cf2.quoracdn.net/main-thumb-144356137-200-wgtszsvjxmjbgdhsbbdbcspjiosirktm.jpeg",
      name: "Rudradeep Sinha",
      position:
        "Merchandising Manager at Kariwala Industries (company) (2002–present)",
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
    path: "blog2",
    imgUrl:
      "https://cdn.mos.cms.futurecdn.net/TWNva5t3dCzhMsGS56tnEE-1280-80.png",
    date: "August 18, 2022",
    title: "What happens to your old clothes when you discard them?",
    blogUrl:
      "https://www.linkedin.com/pulse/what-happens-your-old-clothes-when-you-discard-them-dayal-ram/",
    author: {
      imgUrl:
        "https://media.licdn.com/dms/image/D4D03AQE1SKiEwpMgIQ/profile-displayphoto-shrink_400_400/0/1674282987244?e=1714608000&v=beta&t=XlmzxGhifwORlU_WVKeK9MBA9TTJRNPEpIIsw_kl0VM",
      name: "Dayal R.",
      position: "Managing Director at DAYALIZE",
    },
    content: [],
  },
  blog3: {
    path: "blog3",
    imgUrl:
      "https://media.licdn.com/dms/image/D4E12AQEwYHzikCjSbA/article-cover_image-shrink_600_2000/0/1686049880087?e=1714608000&v=beta&t=tyWiRPgF_i4u-JhaJx-qa-iKmcpAg5O7K6v_IYBSQEs",
    date: "June 6, 2023",
    title: "The challenges of scaling fibre-to-fibre recycling",
    blogUrl:
      "https://www.linkedin.com/pulse/challenges-scaling-fibre-to-fibre-recycling-lutz-walter/?trackingId=C8xgg9DYQxKhi8OfEPv7fA%3D%3D",
    author: {
      imgUrl:
        "https://media.licdn.com/dms/image/D4E35AQGeyO68Cqs0bg/profile-framedphoto-shrink_200_200/0/1707385469826?e=1709917200&v=beta&t=bQnwoFBK3Bs9sEjaP14UM9ykFCe8NyN0D-2tn_70-Ik",
      name: "Lutz Walter",
      position:
        "Secretary General at European Technology Platform for the Future of Textiles and Clothing",
    },
    content: [],
  },
};
