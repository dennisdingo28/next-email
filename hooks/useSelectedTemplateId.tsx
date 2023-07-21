import {create} from "zustand";

interface useSelectedTemplateIdProps {
    id: string;
    setSelectedTemplateId: (id: string) => void;
}

const useSelectedTemplateId = create<useSelectedTemplateIdProps>((set)=>({
    id:"64b97317844b5171e0aa762d",
    setSelectedTemplateId:(id: string)=>set({id:id}),
}));

export default useSelectedTemplateId;