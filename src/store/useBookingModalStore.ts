import { create } from 'zustand';

type BookingModalStore = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

export const useBookingModalStore = create<BookingModalStore>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
})); 