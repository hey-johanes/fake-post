import axios from 'axios';
import { useContext, createContext, useState, useCallback } from 'react';
import { useAuthContext } from './AuthContext';
import { POST_URL } from '../config/config';

const CardContext = createContext();

export function CardProvider({ children }) {
  const [datas, setDatas] = useState([]);

  const { user } = useAuthContext();

  const getDataById = useCallback(async () => {
    if (!user) return;
    try {
      const response = await axios.get(`${POST_URL}?userId=${user.id}`);
      setDatas(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  const fetchDataAll = useCallback(async () => {
    if (!user) return;
    try {
      const response = await axios.get(POST_URL);
      setDatas(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  const deleteDataOnSOcialPage = async (id) => {
    try {
      await axios.delete(`${POST_URL}/${id}`);
      fetchDataAll();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteData = async (id) => {
    try {
      await axios.delete(`${POST_URL}/${id}`);
      getDataById();
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    datas,
    setDatas,
    deleteData,
    getDataById,
    fetchDataAll,
    deleteDataOnSOcialPage,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}

export function useCardContext() {
  return useContext(CardContext);
}
