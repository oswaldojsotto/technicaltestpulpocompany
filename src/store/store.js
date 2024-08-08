import { create } from "zustand";

const useStore = create(set => ({
  oldBalance: 0,
  updateOldBalance: newOldBalance => set({ oldBalance: newOldBalance }),
  balance: 10,
  updateBalance: newBalance => set({ balance: newBalance }),
  showPaymentScreen: false,
  setShowPaymentScreen: newValue => set({ showPaymentScreen: newValue }),
}));

export default useStore;
