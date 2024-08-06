import { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from 'firebase/firestore';

const DiscountContext = createContext();

export const DiscountProvider = ({ children }) => {
  const [discounts, setDiscounts] = useState([]);
  const discountsCollectionRef = collection(db, 'discounts');

  useEffect(() => {
    const fetchDiscounts = async () => {
      const data = await getDocs(discountsCollectionRef);
      setDiscounts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchDiscounts();
  }, []);

  const addDiscount = async (discount) => {
    await addDoc(discountsCollectionRef, discount);
    setDiscounts([...discounts, { ...discount, id: discount.id }]);
  };

  const updateDiscount = async (id, updatedDiscount) => {
    const discountDoc = doc(db, 'discounts', id);
    await updateDoc(discountDoc, updatedDiscount);
    setDiscounts(discounts.map((discount) => (discount.id === id ? updatedDiscount : discount)));
  };

  const deleteDiscount = async (id) => {
    const discountDoc = doc(db, 'discounts', id);
    await deleteDoc(discountDoc);
    setDiscounts(discounts.filter((discount) => discount.id !== id));
  };

  return (
    <DiscountContext.Provider value={{ discounts, addDiscount, updateDiscount, deleteDiscount }}>
      {children}
    </DiscountContext.Provider>
  );
};

export const useDiscount = () => useContext(DiscountContext);
