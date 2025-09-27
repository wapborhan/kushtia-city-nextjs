export const menuData = [
  {
    label: "ড্যাশবোর্ড",
    icon: "fa-chart-simple",
    path: "",
  },
  {
    label: "উদ্যোক্তা",
    icon: "fa-cart-shopping",
    subMenu: [
      {
        label: "উদ্যোক্তা যোগ করুন",
        path: "/contact/lead/add",
        icon: "fa-circle-plus",
      },

      {
        label: "উদ্যোক্তা তালিকা",
        path: "/contact/lead/view",
        icon: "fa-eye",
      },
    ],
  },

  {
    label: "ব্লাড ব্যাঙ্ক",
    icon: "fa-droplet",
    subMenu: [
      {
        label: "রক্তদাতা যোগ করুন",
        path: "blood/donar/add",
        icon: "fa-circle-plus",
      },

      {
        label: "অনুরোধ যোগ করুন",
        path: "blood/request/add",
        icon: "fa-circle-plus",
      },
      {
        label: "রক্তদাতা তালিকা",
        path: "blood/donar/view",
        icon: "fa-eye",
      },
      {
        label: "অনুরোধ তালিকা",
        path: "blood/request/view",
        icon: "fa-eye",
      },
    ],
  },

  {
    label: "চিকিৎসা কেন্দ্র",
    icon: "fa-hospital",
    subMenu: [
      {
        label: "ডাক্তার যোগ করুন",
        path: "doctor/add",
        icon: "fa-circle-plus",
      },
      {
        label: "হাসপাতাল যোগ করুন",
        path: "hospital/add",
        icon: "fa-circle-plus",
      },
      {
        label: "ডায়াগনস্টিক যোগ করুন",
        path: "diagnostic/add",
        icon: "fa-circle-plus",
      },
      {
        label: "ডাক্তার তালিকা",
        path: "doctor/view",
        icon: "fa-eye",
      },
      {
        label: "হাসপাতাল তালিকা",
        path: "hospital/view",
        icon: "fa-eye",
      },
      {
        label: "ডায়াগনস্টিক তালিকা",
        path: "diagnostic/view",
        icon: "fa-eye",
      },
    ],
  },
  {
    label: "প্রশাসন",
    icon: "fa-user-police",
    subMenu: [
      {
        label: "থানা যোগ করুন",
        path: "police/add",
        icon: "fa-circle-plus",
      },
      {
        label: "ফায়ার স্টেশন যোগ ",
        path: "fire-station/add",
        icon: "fa-circle-plus",
      },
      {
        label: "থানা তালিকা",
        path: "police/view",
        icon: "fa-eye",
      },
      {
        label: "ফায়ার স্টেশন তালিকা",
        path: "fire-station/view",
        icon: "fa-eye",
      },
    ],
  },
  {
    label: "বিদ্যুৎ অফিস",
    icon: "fa-bolt",
    subMenu: [
      {
        label: "বিদ্যুৎ অফিস যোগ করুন",
        path: "electricity/add",
        icon: "fa-circle-plus",
      },
      {
        label: "বিদ্যুৎ অফিস তালিকা",
        path: "electricity/view",
        icon: "fa-eye",
      },
    ],
  },
  {
    label: "ব্যাংক",
    icon: "fa-wallet",
    subMenu: [
      {
        label: "ব্যাংক যোগ করুন",
        path: "bank/add",
        icon: "fa-circle-plus",
      },
      {
        label: "ব্যাংক তালিকা",
        path: "bank/view",
        icon: "fa-eye",
      },
    ],
  },
  {
    label: "ফুড",
    icon: "fa-utensils",
    subMenu: [
      {
        label: "হোটেল যোগ করুন",
        path: "hotel/add",
        icon: "fa-circle-plus",
      },
      {
        label: "রেস্টুরেন্ট যোগ করুন",
        path: "restaurant/add",
        icon: "fa-circle-plus",
      },
      {
        label: "হোটেল তালিকা",
        path: "hotel/view",
        icon: "fa-eye",
      },
      {
        label: "রেস্টুরেন্ট তালিকা",
        path: "restaurant/view",
        icon: "fa-eye",
      },
    ],
  },
  {
    label: "ভাড়া",
    icon: "fa-user-police",
    subMenu: [
      {
        label: "বাসা ভাড়া যোগ করুন",
        path: "house-rent/add",
        icon: "fa-circle-plus",
      },
      {
        label: "গাড়ী ভাড়া যোগ করুন",
        path: "car-rent/add",
        icon: "fa-circle-plus",
      },
      {
        label: "বাসা ভাড়া তালিকা",
        path: "house-rent/view",
        icon: "fa-eye",
      },
      {
        label: "গাড়ী ভাড়া তালিকা",
        path: "car-rent/view",
        icon: "fa-eye",
      },
    ],
  },
  {
    label: "ব্যবহারকারী",
    icon: "fa-users",
    path: "users",
  },
];
