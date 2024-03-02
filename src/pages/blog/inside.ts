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
  content: number[];
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
    date: "blogs.blog1.date",
    title: "blogs.blog1.title",
    blogUrl:
      "https://www.quora.com/Is-recycled-cotton-sustainable/answer/Rudradeep-Sinha",
    author: {
      imgUrl:
        "https://qph.cf2.quoracdn.net/main-thumb-144356137-200-wgtszsvjxmjbgdhsbbdbcspjiosirktm.jpeg",
      name: "Rudradeep Sinha",
      position: "blogs.blog1.position",
    },
    content: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  blog2: {
    path: "blog2",
    imgUrl:
      "https://cdn.mos.cms.futurecdn.net/TWNva5t3dCzhMsGS56tnEE-1280-80.png",
    date: "blogs.blog2.date",
    title: "blogs.blog2.title",
    blogUrl:
      "https://www.linkedin.com/pulse/what-happens-your-old-clothes-when-you-discard-them-dayal-ram/",
    author: {
      imgUrl:
        "https://media.licdn.com/dms/image/D4D03AQE1SKiEwpMgIQ/profile-displayphoto-shrink_400_400/0/1674282987244?e=1714608000&v=beta&t=XlmzxGhifwORlU_WVKeK9MBA9TTJRNPEpIIsw_kl0VM",
      name: "Dayal R.",
      position: "blogs.blog2.position",
    },
    content: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  blog3: {
    path: "blog3",
    imgUrl:
      "https://media.licdn.com/dms/image/D4E12AQEwYHzikCjSbA/article-cover_image-shrink_600_2000/0/1686049880087?e=1714608000&v=beta&t=tyWiRPgF_i4u-JhaJx-qa-iKmcpAg5O7K6v_IYBSQEs",
    date: "blogs.blog3.date",
    title: "blogs.blog3.title",
    blogUrl:
      "https://www.linkedin.com/pulse/challenges-scaling-fibre-to-fibre-recycling-lutz-walter/?trackingId=C8xgg9DYQxKhi8OfEPv7fA%3D%3D",
    author: {
      imgUrl:
        "https://media.licdn.com/dms/image/D4E35AQGeyO68Cqs0bg/profile-framedphoto-shrink_200_200/0/1707385469826?e=1709917200&v=beta&t=bQnwoFBK3Bs9sEjaP14UM9ykFCe8NyN0D-2tn_70-Ik",
      name: "Lutz Walter",
      position: "blogs.blog3.position",
    },
    content: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
};
