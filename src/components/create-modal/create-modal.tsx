import { useEffect, useState } from "react"
import { ProductData } from "../../interfaces/ProductData";
import { useProductDataMutate } from "../../hooks/useProductDataMutate";
import "./modal.css";

interface InputProps{
    label: string,
    value: string | number,
    updateValue(value: any) :void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({label, value, updateValue}: InputProps) =>{
    return (
        <>
        <label>{label}</label>
        <input value={value} onChange={e => updateValue(e.target.value)}></input>
        </>
    )
}

export function CreateModal({ closeModal }: ModalProps){
    const [name,setName] = useState("");
    const [price,setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate,isSuccess } = useProductDataMutate();

    const submit = () => {
        const productData: ProductData={
            name,
            price,
            image
        }
        mutate(productData)
    }

    useEffect(() => {
        if(!isSuccess) return 
        closeModal();
    }, [isSuccess])

    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo produto</h2>
                <form className="input-container">
                    <Input label="Nome" value={name} updateValue={setName}></Input>
                    <Input label="Preço" value={price} updateValue={setPrice}></Input>
                    <Input label="Imagem do produto" value={image} updateValue={setImage}/>
                </form>
                <button onClick={submit} className="btn-secondary">Enviar produto</button>
            </div>
        </div>
    )
}