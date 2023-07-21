import {create} from "zustand";

interface useAuthModalProps {
    open: boolean;
    setIsOpen: (open: boolean) => void;
}

const useAuthModal = create<useAuthModalProps>((set)=>({
    open: false,
    setIsOpen: (open: boolean) => set({open:open}),
}));

export default useAuthModal;