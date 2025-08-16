import axios from 'axios';
import { useContext, createContext, useState, useCallback } from 'react';
import { useAuthContext } from './AuthContext';
import { POST_URL } from '../config/config';
import ModalsError from '../component/modals/ModalsError';

const CardContext = createContext();

export function CardProvider({ children }) {
  const [datas, setDatas] = useState([]);
  const [show, setShow] = useState(false);

  const { user } = useAuthContext();

  const getDataById = useCallback(async () => {
    if (!user) return;
    try {
      const response = await axios.get(`${POST_URL}?userId=${user.id}`);
      setDatas(response.data);
    } catch (error) {
      setShow(true);
      <ModalsError
        messageError="Data gagal dimuat"
        show={show}
        setShow={setShow}
      />;
    }
  }, [show, user]);

  const fetchDataAll = useCallback(async () => {
    if (!user) return;
    try {
      const response = await axios.get(POST_URL);
      setDatas(response.data);
    } catch (error) {
      setShow(true);
      <ModalsError
        messageError="Data gagal dimuat"
        show={show}
        setShow={setShow}
      />;
    }
  }, [user, show]);

  const deleteDataSocialById = async (id) => {
    try {
      await axios.delete(`${POST_URL}/${id}`);
      fetchDataAll();
    } catch (error) {
      setShow(true);
      <ModalsError
        messageError="Data gagal di hapus"
        show={show}
        setShow={setShow}
      />;
    }
  };

  const deletebyId = async (id) => {
    try {
      await axios.delete(`${POST_URL}/${id}`);
      getDataById();
    } catch (error) {
      setShow(true);
      <ModalsError
        messageError="Data gagal dihapus"
        show={show}
        setShow={setShow}
      />;
    }
  };

  const editDataById = async (id, data) => {
    try {
      await axios.patch(`${POST_URL}/${id}`, data);
      getDataById();
    } catch (error) {
      setShow(true);
      <ModalsError
        messageError="Data gagal diubah"
        show={show}
        setShow={setShow}
      />;
    }
  };

  const editDataSocialById = async (id, data) => {
    try {
      await axios.patch(`${POST_URL}/${id}`, data);
      fetchDataAll();
    } catch (error) {
      setShow(true);
      <ModalsError
        messageError="Data gagal diubah"
        show={show}
        setShow={setShow}
      />;
    }
  };

  const value = {
    datas,
    setDatas,
    deletebyId,
    getDataById,
    fetchDataAll,
    deleteDataSocialById,
    editDataById,
    editDataSocialById,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
}

export function useCardContext() {
  return useContext(CardContext);
}
