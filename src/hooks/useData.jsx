import { useQuery } from '@tanstack/react-query';
import { apis } from '../api/AxiosManager';

const getFamilyInfo = async () => {
  try {
    const res = await apis.getFamily();
    return res.data.data;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const useFamilyData = () =>
  useQuery(['familyInfo'], getFamilyInfo, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    onSuccess: (data) => {
      console.log(data);
    },
  });