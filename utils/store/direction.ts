import { create } from 'zustand';

type DirectionState = {
  senderPlace: Place;
  receiverPlace: Place;
};

type DirectionAction = {
  setReceiverPlace: (address: Place) => void;
  setSenderPlace: (address: Place) => void;
};

export const useDirectionStore = create<DirectionState & DirectionAction>(
  set => ({
    receiverPlace: {
      address: '',
      title: '',
      latitude: 0,
      longitude: 0,
    },
    senderPlace: {
      address: '',
      title: '',
      latitude: 0,
      longitude: 0,
    },
    setReceiverPlace: place => set({ receiverPlace: place }),
    setSenderPlace: place => set({ senderPlace: place }),
  })
);
