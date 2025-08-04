import axios from 'axios';
import { useContext, createContext, useState, useCallback } from 'react';
import { useAuthContext } from './AuthContext';

const CardContext = createContext();

export function CardProvider({ children }) {
  const [datas, setDatas] = useState([]);

  const { user } = useAuthContext();

  const fetchData = useCallback(async () => {
    if (!user) return;
    try {
      const response = await axios.get(
        `http://localhost:1234/post?userId=${user.id}`
      );
      setDatas(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  const fetchDataAll = useCallback(async () => {
    if (!user) return;
    try {
      const response = await axios.get(`http://localhost:1234/post`);
      setDatas(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  const deleteDataOnSOcialPage = async (id) => {
    try {
      await axios.delete(`http://localhost:1234/post/${id}`);
      fetchDataAll();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:1234/post/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    datas,
    setDatas,
    deleteData,
    fetchData,
    fetchDataAll,
    deleteDataOnSOcialPage,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}

export function useCardContext() {
  return useContext(CardContext);
}
