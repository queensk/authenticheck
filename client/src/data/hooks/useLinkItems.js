import { useWallet } from "./../../data/context/walletContext";
import { FiHome, FiPlusSquare, FiCheckSquare, FiEdit } from 'react-icons/fi';

import { useEffect, useState } from "react";

export const useLinkItems = () => {
  const { walletType } = useWallet();

  const [linkItems, setLinkItems] = useState([]);

  useEffect(() => {
      
    const items = getLinkItems();

    setLinkItems(items);
}, [walletType]);

  return { linkItems };
};

const getLinkItems = () => {
  return getLinkItemsForUser();
};

const getLinkItemsForUser = () => {
  return [
    { name: "Home", icon: FiHome, path: ""},
    { name: "Create Product", icon: FiPlusSquare, path: "create-product" },
    { name: "Verify Product", icon: FiCheckSquare, path: "verify-product" },
    { name: "Update Product", icon: FiEdit, path: "update-product" }
  ];
}
