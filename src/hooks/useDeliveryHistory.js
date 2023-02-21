import { useQuery } from "react-query";

export const useDeliveryHistory = (email) =>{
  const {data: deliveriedHistory, isLoading: deliveredLoading, refetch: deliveryRefetch} = useQuery({
    queryKey: ["deliveryHistory"],
    queryFn: async () =>{
      const res = await fetch(`https://fg-server.vercel.app/delivered-orders?email=${email}`);
      const data = await res.json();
      return data;
    }
  })

  return [deliveriedHistory, deliveredLoading, deliveryRefetch];
}