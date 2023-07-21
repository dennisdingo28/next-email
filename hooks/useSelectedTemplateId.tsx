import {create} from "zustand";

interface useSelectedTemplateIdProps {
    id: string;
    setSelectedTemplateId: (id: string) => void;
}

const useSelectedTemplateId = create<useSelectedTemplateIdProps>((set)=>({
    id:"64bab644f19d3279914077b1",
    setSelectedTemplateId:(id: string)=>set({id:id}),
}));

export default useSelectedTemplateId;