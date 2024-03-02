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
      "https://images.squarespace-cdn.com/content/v1/584738ff20099e6c2da92f74/1507719298557-EXEIU4CAUW4XB1S6GUY2/sustainable+cotton",
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
    content: [
      "It’s never been easier to recycle your unwanted clothes, it would seem. Major retailers now have handy drop-off points.",
      "Globally though, only 20 per cent of clothing waste is collected for reuse and recycling, while the majority ends up in landfill or is incinerated.",
      "Once you’ve decluttered your wardrobe and have made the necessary drop-offs to your local charity shops or recycling points, so begins the complex journey of your unwanted clothes.",
      "Around 20 per cent of these reusable clothes are sold domestically, while the remainder is sold to textile merchants who sort and ship them to countries such as Uganda, Kenya, Hungary, India, Bangladesh, Ghana, and Pakistan. Once they’ve reached overseas, only 70 per cent of this clothing is actually reused, while the rest is recycled into lower-value products—such as insulation material or cleaning cloths—or sent to landfill or incineration.",
      "However, importers of second-hand clothing are becoming overwhelmed by the sheer volume of garments being sent to them… 40 per cent of what the country receives goes straight into landfill.",
      "Garments are sorted by fibre and colour for recycling, but clothing made from blended fibres such as polycotton (a mixture of cotton and polyester) presents another major challenge. Along with dyed fabrics and other contaminants, the different materials in these garments cannot be separated so the majority of this textile waste goes to landfill or incinerators.",
      "Mixtures [of different fibres] are problematic for [current] recycling processes. A polyester-cotton blend is a blend on the yarn level and extremely hard to separate. Luckily, various chemical recycling techniques are being developed to cope with blended textiles.",
      "When we dispose our clothes, they either end up in landfills or are sold again. However, now there are many recycling mills where second-hand clothing and fabrics from all over the world are segregated, torn apart to remove buttons, zippers and labels, and then treated to be re-purposed and used as yarn.",
      "This yarn is used to create inexpensive blankets and carpets that are sold at rock-bottom prices.",
    ],
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
    content: [
      "Today I’m returning to the topic of textile circularity. After having looked into total textile waste volumes and types of textile waste in previous think pieces, today’s article sheds some light on the fibre-to-fibre recycling challenges.",
      "Recycling comes to everybody’s mind first when thinking about circularity. And we know it is possible across many material sectors from paper to glass to metals, so why not for textiles too? The answer in a way is the same as to the question of why we make books, glass bottles or aluminium cans fully automatically, but not clothing. It is just much more complex.",
      "I will dig into these complexities and discuss:",
      "- differences between open-loop and closed loop circularity",
      "- potential and limitations of mechanical and chemical textile recycling",
      "- feedstock needs and availability",
      "- recycling scales for some common textile fibres",
      "- pre-conditions for making fibre-to-fibre recycling viable",
      "- regulatory drivers and inhibitors for textile recycling",
      "I conclude by stating that fibre-to-fibre recycling only makes sense if integrated into a complete textile and clothing manufacturing value chain operating at regional scale and able to produce on demand, which as far as Europe is concerned is much farther away than 2030.",
      "As usual all comments, constructive criticism and links to useful further reading material on the subject are highly welcome.",
    ],
  },
};
