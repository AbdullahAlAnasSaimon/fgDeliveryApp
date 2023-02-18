const screens = {
  main_layout: "MainLayout",
  home: "Home",
  delivery: "Delivery",
  map: "Map",
  history: "History",
  wallet: "Wallet",
}

const bottom_tabs = [
  {
      id: 0,
      label: screens.home,
  },
  {
      id: 1,
      label: screens.delivery,
  },
  {
      id: 2,
      label: screens.map,
  },
  {
      id: 3,
      label: screens.history,
  },
  {
      id: 4,
      label: screens.wallet,
  },
]



const constant = {
  screens,
  bottom_tabs,
};

export default constant;