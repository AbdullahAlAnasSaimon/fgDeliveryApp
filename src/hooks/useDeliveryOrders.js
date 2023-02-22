import { useQuery } from "react-query";


export const useDeliveryOrders = email => {
  const { data: deliveryOrders, isLoading: orderLoading, refetch: orderRefetch } = useQuery({
    queryKey: ["delivery-order"],
    queryFn: async () => {
      const res = await fetch(`https://fg-server.vercel.app/delivery-order/${email}`)
      const data = await res.json();
      return data;
    }
  });

  return [deliveryOrders, orderLoading, orderRefetch];
}